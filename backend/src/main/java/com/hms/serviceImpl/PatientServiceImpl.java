package com.hms.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Address;
import com.hms.model.Patient;
import com.hms.model.User;
import com.hms.payload.PatientSignupRequest;
import com.hms.repo.AddressRepo;
import com.hms.repo.PatientRepo;
import com.hms.repo.UserRepo;
import com.hms.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private UserRepo userRepo;

    @Override
    public Patient create(PatientSignupRequest patientSignupRequest) {

        String name = patientSignupRequest.getName();
        String dob = patientSignupRequest.getDob();
        String gender = patientSignupRequest.getGender();
        String mobNo = patientSignupRequest.getMobNo();
        int age = patientSignupRequest.getAge();

        Address address = patientSignupRequest.getAddress();
        address = this.addressRepo.save(address);

        Patient patient = new Patient();
        patient.setName(name);
        patient.setDob(dob);
        patient.setGender(gender);
        patient.setMobNo(mobNo);
        patient.setAge(age);
        patient.setAddress(address);

        Integer userId = patientSignupRequest.getUserId();

        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
        patient = this.patientRepo.save(patient);
        user.setPatient(patient);
        user = this.userRepo.save(user);
        patient.setUser(user);

        return patient;
    }

    @Override
    public List<Patient> getAllPatients() {
        return this.patientRepo.findAll();
    }

    @Override
    public Patient getById(int id) {
        return this.patientRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected patient is not found"));
    }

    @Override
    public Patient updatePatient(Patient patient) {
        return patient;
    }

    @Override
    public void deleteById(int id) {
        this.patientRepo.delete(this.patientRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected patient is not found")));
    }

}
