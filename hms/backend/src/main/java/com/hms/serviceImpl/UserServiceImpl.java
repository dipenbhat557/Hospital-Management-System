package com.hms.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.hms.model.Doctor;
import com.hms.model.Employee;
import com.hms.model.Patient;
import com.hms.model.User;
import com.hms.payload.Role;
import com.hms.payload.SignupRequest;
import com.hms.repo.UserRepo;
import com.hms.service.DoctorService;
import com.hms.service.EmployeeService;
import com.hms.service.PatientService;
import com.hms.service.UserService;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PatientService patientService;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private EmployeeService employeeService;

    @Override
    public User create(SignupRequest signupRequest) {

        String name = signupRequest.getName();
        String email = signupRequest.getEmail();
        String password = signupRequest.getPassword();
        Role role = signupRequest.getRole();

        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(this.passwordEncoder.encode(password));
        user.setRole(role);

        if (role == Role.PATIENT) {
            Patient patient = this.patientService.create(signupRequest);
            user.setPatient(patient);
        } else if (role == Role.DOCTOR) {
            Doctor doctor = this.doctorService.create(signupRequest);
            user.setEmployee(doctor.getEmployee());
        } else {
            Employee employee = this.employeeService.create(signupRequest);
            user.setEmployee(employee);
        }

        user = this.userRepo.save(user);

        return user;
    }

}
