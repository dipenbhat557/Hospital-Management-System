package com.hms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hms.model.Doctor;
import com.hms.payload.DoctorSignupRequest;

@Service
public interface DoctorService {

    public Doctor create(DoctorSignupRequest doctorSignupRequest);

    public List<Doctor> getAllDoctors();

    public Doctor getById(int id);

    public void deleteById(int id);

    public Doctor getByUserId(int id);
}
