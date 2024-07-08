package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Bill;
import com.hms.model.Patient;
import java.util.List;

public interface BillRepo extends JpaRepository<Bill, Integer> {
    public List<Bill> findByPatient(Patient patient);
}
