package com.hms.service;

import com.hms.model.Doctor;
import com.hms.payload.SignupRequest;

public interface DoctorService {

    public Doctor create(SignupRequest signupRequest);

}
