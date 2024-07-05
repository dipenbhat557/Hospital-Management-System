package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Doctor;
import com.hms.payload.DoctorSignupRequest;
import com.hms.service.DoctorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/auth/doctor")
    public ResponseEntity<Doctor> createDoctor(@RequestBody DoctorSignupRequest doctorSignupRequest) {

        return new ResponseEntity<>(this.doctorService.create(doctorSignupRequest), HttpStatus.CREATED);
    }

}
