package com.hms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Patient;
import com.hms.model.Report;

public interface ReportRepo extends JpaRepository<Report, Integer> {
    List<Report> findByPatient(Patient patient);
}
