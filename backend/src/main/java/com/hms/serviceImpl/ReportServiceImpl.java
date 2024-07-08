package com.hms.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Doctor;
import com.hms.model.Patient;
import com.hms.model.Report;
import com.hms.payload.ReportRequest;
import com.hms.repo.PatientRepo;
import com.hms.repo.ReportRepo;
import com.hms.service.DoctorService;
import com.hms.service.PatientService;
import com.hms.service.ReportService;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportRepo reportRepo;

    @Autowired
    private PatientService patientService;

    @Autowired
    private DoctorService doctorService;

    @Override
    public Report create(ReportRequest req) {
        Report report = new Report();

        int patientId = req.getPatientId();
        int doctorId = req.getDoctorId();

        Patient patient = this.patientService.getById(patientId);
        Doctor doctor = this.doctorService.getById(doctorId);

        report.setProblem(req.getProblem());
        report.setObservation(req.getObservation());
        report.setSuggestion(req.getSuggestion());
        report.setDate(new Date());
        report.setDoctor(doctor);
        report.setPatient(patient);
        report.setResult(req.getResult());
        report.setTestType(req.getTestType());

        report = this.reportRepo.save(report);

        return report;
    }

    @Override
    public List<Report> getAllReports() {
        return this.reportRepo.findAll();
    }

    @Override
    public Report getById(int id) {
        return this.reportRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Report is not found"));
    }

    @Override
    public void deleteById(int id) {
        this.reportRepo.delete(getById(id));
    }

    @Override
    public List<Report> getByPatient(int patientId) {
        return this.reportRepo.findByPatient(this.patientService.getById(patientId));
    }

}
