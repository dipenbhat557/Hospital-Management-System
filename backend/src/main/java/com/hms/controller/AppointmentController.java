package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Appointment;
import com.hms.payload.AppointmentRequest;
import com.hms.service.AppointmentService;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody AppointmentRequest req) {
        Appointment appointment = this.appointmentService.create(req);
        return new ResponseEntity<>(appointment, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        List<Appointment> appointments = this.appointmentService.getAllAppointments();

        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getById(@PathVariable int id) {
        Appointment appointment = this.appointmentService.getById(id);
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Appointment> updateById(@PathVariable int id, @RequestBody AppointmentRequest req) {
        Appointment appointment = this.appointmentService.updateAppointment(id, req);
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        this.appointmentService.deleteById(id);
        return new ResponseEntity<>("Appointment deleted successfully!!", HttpStatus.ACCEPTED);
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<List<Appointment>> getByPatientId(@PathVariable int id) {
        List<Appointment> appointments = this.appointmentService.getByPatientId(id);
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<List<Appointment>> getByDoctorId(@PathVariable int id) {
        List<Appointment> appointments = this.appointmentService.getByDoctorId(id);
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }
}
