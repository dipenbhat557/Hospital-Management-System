package com.hms.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Appointment;
import com.hms.model.Doctor;
import com.hms.model.Patient;
import com.hms.payload.AppointmentRequest;
import com.hms.repo.AppointmentRepo;
import com.hms.service.AppointmentService;
import com.hms.service.DoctorService;
import com.hms.service.PatientService;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private PatientService patientService;

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Override
    public Appointment create(AppointmentRequest req) {
        Appointment appointment = new Appointment();

        appointment.setDate(req.getDate());

        int doctorId = req.getDoctorId();
        Doctor doctor = this.doctorService.getById(doctorId);
        appointment.setDoctor(doctor);

        int patientId = req.getPatientId();
        Patient patient = this.patientService.getById(patientId);
        appointment.setPatient(patient);

        appointment.setVerified(req.isVerified());

        appointment = this.appointmentRepo.save(appointment);

        return appointment;
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return this.appointmentRepo.findAll();
    }

    @Override
    public Appointment getById(int id) {
        return this.appointmentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));
    }

    @Override
    public Appointment updateAppointment(int id, AppointmentRequest req) {
        Appointment appointment = getById(id);

        appointment.setVerified(req.isVerified());

        appointment = this.appointmentRepo.save(appointment);

        return appointment;
    }

    @Override
    public void deleteById(int id) {
        Appointment appointment = this.appointmentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The appointment is not found"));
        this.appointmentRepo.delete(appointment);
    }

    @Override
    public List<Appointment> getByPatientId(int id) {
        Patient patient = this.patientService.getById(id);
        List<Appointment> appointments = this.appointmentRepo.findByPatient(patient);
        return appointments;
    }

    @Override
    public List<Appointment> getByDoctorId(int id) {
        Doctor doctor = this.doctorService.getById(id);
        List<Appointment> appointments = this.appointmentRepo.findByDoctor(doctor);
        return appointments;
    }

}
