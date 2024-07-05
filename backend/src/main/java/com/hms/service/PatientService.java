package com.hms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hms.model.Patient;
import com.hms.payload.PatientSignupRequest;

@Service
public interface PatientService {

    public Patient create(PatientSignupRequest patientSignupRequest);

    public List<Patient> getAllPatients();

    public Patient getById(int id);

    public Patient updatePatient(Patient patient);

    public void deleteById(int id);

}
