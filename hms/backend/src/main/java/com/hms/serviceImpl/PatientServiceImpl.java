package com.hms.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;

import com.hms.model.Patient;
import com.hms.payload.Address;
import com.hms.payload.SignupRequest;
import com.hms.repo.AddressRepo;
import com.hms.repo.PatientRepo;
import com.hms.service.PatientService;

public class PatientServiceImpl implements PatientService {

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private PatientRepo patientRepo;

    @Override
    public Patient create(SignupRequest signupRequest) {

        String name = signupRequest.getName();
        String dob = signupRequest.getDob();
        String gender = signupRequest.getGender();
        String mobNo = signupRequest.getMobNo();
        int age = signupRequest.getAge();

        Address address = signupRequest.getAddress();
        address = this.addressRepo.save(address);

        Patient patient = new Patient();
        patient.setName(name);
        patient.setDob(dob);
        patient.setGender(gender);
        patient.setMobNo(mobNo);
        patient.setAge(age);
        patient.setAddress(address);

        patient = this.patientRepo.save(patient);

        return patient;
    }

}
