package com.hms.service;

import java.util.List;

import com.hms.model.Report;
import com.hms.payload.ReportRequest;

public interface ReportService {
    public Report create(ReportRequest req);

    public List<Report> getAllReports();

    public Report getById(int id);

    public void deleteById(int id);

    public List<Report> getByPatient(int patientId);
}
