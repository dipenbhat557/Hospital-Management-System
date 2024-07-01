package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hms.model.Patient;
import com.hms.model.User;

public interface PatientRepo extends JpaRepository<Patient, Long> {
    Patient findByUser(User user);
}
