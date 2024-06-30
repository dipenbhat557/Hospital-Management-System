package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Report;

public interface ReportRepo extends JpaRepository<Report, Integer> {

}
