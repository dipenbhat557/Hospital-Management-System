package com.hms.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Patient;
import com.hms.model.Room;
import com.hms.payload.RoomRequest;
import com.hms.repo.RoomRepo;
import com.hms.service.PatientService;
import com.hms.service.RoomService;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepo roomRepo;

    @Autowired
    private PatientService patientService;

    @Override
    public Room create(RoomRequest req) {

        Room room = new Room();

        room.setType(req.getType());
        room.setCapacity(req.getCapacity());
        room.setAvailability(req.isAvailable());

        List<Patient> patients = req.getPatientIds().stream().map(p -> this.patientService.getById(p))
                .collect(Collectors.toList());

        room.setPatients(patients);

        room = this.roomRepo.save(room);

        return room;

    }

    @Override
    public List<Room> getAllRooms() {
        return this.roomRepo.findAll();
    }

    @Override
    public Room getById(int id) {
        return this.roomRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room is not found"));
    }

    @Override
    public void deleteById(int id) {
        this.roomRepo.delete(getById(id));

    }

    @Override
    public List<Room> getAvailableRooms() {
        return this.getAllRooms().stream().filter(room -> room.isAvailability() == true).collect(Collectors.toList());
    }

}
