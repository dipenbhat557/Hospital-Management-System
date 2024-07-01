package com.hms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Doctor;
import com.hms.model.Employee;
import com.hms.model.Patient;
import com.hms.model.User;
import com.hms.payload.Role;
import com.hms.repo.DoctorRepo;
import com.hms.repo.PatientRepo;
import com.hms.repo.UserRepo;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private DoctorRepo doctorRepository;

    @Autowired
    private PatientRepo patientRepository;

    @GetMapping("/details")
    public ResponseEntity<?> getUserDetails(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername());

        if (user.getRole() == Role.DOCTOR) {
            Doctor doctor = doctorRepository.findByEmployee_User(user);
            return ResponseEntity.ok(doctor);
        } else if (user.getRole() == Role.PATIENT) {
            Patient patient = patientRepository.findByUser(user);
            return ResponseEntity.ok(patient);
        }
        // Add similar blocks for other roles (e.g., Nurse, Receptionist)

        return ResponseEntity.ok(user);
    }
}
