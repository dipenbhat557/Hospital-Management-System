package com.hms.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.User;
import com.hms.payload.Role;
import com.hms.payload.UserSignupRequest;
import com.hms.repo.UserRepo;
import com.hms.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User create(UserSignupRequest userSignupRequest) {

        String name = userSignupRequest.getName();
        String email = userSignupRequest.getEmail();
        String password = userSignupRequest.getPassword();
        Role role = userSignupRequest.getRole();

        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(this.passwordEncoder.encode(password));
        user.setRole(role);

        // if (role == Role.PATIENT) {
        // Patient patient = this.patientService.create(signupRequest);
        // user.setPatient(patient);
        // } else if (role == Role.DOCTOR) {
        // Doctor doctor = this.doctorService.create(signupRequest);
        // user.setEmployee(doctor.getEmployee());
        // } else {
        // Employee employee = this.employeeService.create(signupRequest);
        // user.setEmployee(employee);
        // }

        user = this.userRepo.save(user);

        return user;
    }

    @Override
    public User getById(int id) {
        return this.userRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
    }

    @Override
    public void deleteById(int id) {
        this.userRepo.delete(this.userRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found")));

    }

}
