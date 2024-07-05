package com.hms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.MedicalHistory;
import com.hms.model.Patient;

public interface HistoryRepo extends JpaRepository<MedicalHistory, Integer> {

    public List<MedicalHistory> findByPatient(Patient patient);
}
