package com.hms.service;

import org.springframework.stereotype.Service;

import com.hms.model.Doctor;
import com.hms.payload.DoctorSignupRequest;
import com.hms.payload.SignupRequest;

@Service
public interface DoctorService {

    public Doctor create(DoctorSignupRequest doctorSignupRequest);

}
