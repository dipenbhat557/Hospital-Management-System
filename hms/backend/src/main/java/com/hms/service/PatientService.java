package com.hms.service;

import org.springframework.stereotype.Service;

import com.hms.model.Patient;
import com.hms.payload.PatientSignupRequest;
import com.hms.payload.SignupRequest;

@Service
public interface PatientService {

    public Patient create(PatientSignupRequest patientSignupRequest);

}
