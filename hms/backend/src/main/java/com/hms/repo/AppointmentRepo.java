package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Appointment;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

}
