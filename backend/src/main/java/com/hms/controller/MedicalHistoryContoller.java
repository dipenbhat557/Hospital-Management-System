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

import com.hms.model.MedicalHistory;
import com.hms.payload.HistoryRequest;
import com.hms.service.HistoryService;

@RestController
@RequestMapping("/api/history")
public class MedicalHistoryContoller {

    @Autowired
    private HistoryService historyService;

    @SuppressWarnings({ "rawtypes", "unchecked" })
    @GetMapping("/{id}")
    public ResponseEntity<List<MedicalHistory>> getMedicalHistory(@PathVariable int id) {
        List<MedicalHistory> history = this.historyService.getPatientsHistory(id);
        return new ResponseEntity(history, HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<List<MedicalHistory>> addMedicalHistory(@PathVariable int id,
            @RequestBody HistoryRequest req) {

        System.out.println("The request form m controller " + req);

        List<MedicalHistory> newHistories = this.historyService.addPatientHistory(id, req);

        return new ResponseEntity<>(newHistories, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHistory(@PathVariable int id) {
        this.historyService.deleteHistory(id);

        return new ResponseEntity<>("The history is deleted sucessfullyy!!!", HttpStatus.OK);
    }
}
