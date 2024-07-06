package com.hms.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Doctor;
import com.hms.model.MedicalHistory;
import com.hms.model.Patient;
import com.hms.payload.HistoryRequest;
import com.hms.repo.HistoryRepo;
import com.hms.repo.PatientRepo;
import com.hms.service.DoctorService;
import com.hms.service.HistoryService;

@Service
public class HistoryServiceImpl implements HistoryService {

    @Autowired
    private HistoryRepo historyRepo;

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private DoctorService doctorService;

    @Override
    public List<MedicalHistory> getPatientsHistory(int patientId) {
        Patient patient = this.patientRepo.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected patient is not found"));

        List<MedicalHistory> histories = this.historyRepo.findByPatient(patient);

        return histories;
    }

    @Override
    public List<MedicalHistory> addPatientHistory(HistoryRequest req) {
        Patient patient = this.patientRepo.findById(req.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected patient is not found"));

        Doctor doctor = this.doctorService.getById(req.getDoctorId());

        System.out.println("The history request is " + req);

        MedicalHistory history = new MedicalHistory();
        history.setDescription(req.getDescription());
        history.setDate(new Date());
        history.setPatient(patient);
        history.setDoctor(doctor);

        history = this.historyRepo.save(history);

        return this.historyRepo.findByPatient(patient);
    }

    @Override
    public void deleteHistory(int id) {
        this.historyRepo.delete(this.historyRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected history is not found")));
    }

}
