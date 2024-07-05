package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Patient;
import com.hms.payload.PatientSignupRequest;
import com.hms.service.PatientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/auth/patient")
    public ResponseEntity<Patient> createPatient(@RequestBody PatientSignupRequest patientSignupRequest) {

        return new ResponseEntity<>(this.patientService.create(patientSignupRequest), HttpStatus.CREATED);
    }

}
