package com.hms.service;

import java.util.List;

import com.hms.model.Appointment;
import com.hms.payload.AppointmentRequest;

public interface AppointmentService {

    public Appointment create(AppointmentRequest req);

    public List<Appointment> getAllAppointments();

    public Appointment getById(int id);

    public Appointment updateAppointment(int id, AppointmentRequest req);

    public void deleteById(int id);

    public List<Appointment> getByPatientId(int id);

    public List<Appointment> getByDoctorId(int id);

}
