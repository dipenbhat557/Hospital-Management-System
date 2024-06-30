package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

}
