package com.hms.service;

import com.hms.model.Patient;
import com.hms.payload.SignupRequest;

public interface PatientService {

    public Patient create(SignupRequest signupRequest);

}
