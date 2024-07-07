package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Patient;
import com.hms.payload.PatientSignupRequest;
import com.hms.service.PatientService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/api/patient")
    public ResponseEntity<List<Patient>> getAll() {
        return new ResponseEntity<>(this.patientService.getAllPatients(), HttpStatus.OK);
    }

    @GetMapping("/api/patient/{id}")
    public ResponseEntity<Patient> getById(@PathVariable int id) {
        return new ResponseEntity<>(this.patientService.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/api/patient/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        this.patientService.deleteById(id);
        return new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
    }

}
