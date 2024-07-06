package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Room;
import com.hms.payload.RoomRequest;
import com.hms.service.RoomService;

@RestController
@RequestMapping("/api/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping
    public ResponseEntity<Room> create(@RequestBody RoomRequest req) {
        return new ResponseEntity<>(this.roomService.create(req), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<>(this.roomService.getAllRooms(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getById(@PathVariable int id) {
        return new ResponseEntity<>(this.roomService.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        this.roomService.deleteById(id);
        return new ResponseEntity<>("Deleted successfully rrooom", HttpStatus.OK);
    }

    @GetMapping("/available")
    public ResponseEntity<List<Room>> getAvailableRooms() {
        return new ResponseEntity<>(this.roomService.getAvailableRooms(), HttpStatus.ACCEPTED);
    }

}
