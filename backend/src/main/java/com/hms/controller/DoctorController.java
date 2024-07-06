package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Doctor;
import com.hms.payload.DoctorSignupRequest;
import com.hms.service.DoctorService;

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
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/auth/doctor")
    public ResponseEntity<Doctor> createDoctor(@RequestBody DoctorSignupRequest doctorSignupRequest) {

        return new ResponseEntity<>(this.doctorService.create(doctorSignupRequest), HttpStatus.CREATED);
    }

    @GetMapping("/api/doctor")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        return new ResponseEntity<>(this.doctorService.getAllDoctors(), HttpStatus.OK);
    }

    @GetMapping("/api/doctor/{id}")
    public ResponseEntity<Doctor> getById(@PathVariable int id) {
        Doctor doctor = this.doctorService.getById(id);
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

    @DeleteMapping("/api/doctor/{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable int id) {
        this.doctorService.deleteById(id);
        return new ResponseEntity<>("The doctor is deleted successfully", HttpStatus.OK);
    }

}
