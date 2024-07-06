package com.hms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Appointment;
import com.hms.model.Doctor;
import com.hms.model.Patient;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

    public List<Appointment> findByPatient(Patient patient);

    public List<Appointment> findByDoctor(Doctor doctor);
}
