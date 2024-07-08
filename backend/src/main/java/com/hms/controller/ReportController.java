package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestBody;
import com.hms.model.Report;
import com.hms.payload.ReportRequest;
import com.hms.service.ReportService;


@RestController
@RequestMapping("/api/report")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping
    public ResponseEntity<Report> create(@RequestBody ReportRequest req) {
        return new ResponseEntity<>(this.reportService.create(req), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Report>> getAllReports() {
        return new ResponseEntity<>(this.reportService.getAllReports(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Report> getById(@PathVariable int id) {
        return new ResponseEntity<>(this.reportService.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        this.reportService.deleteById(id);
        return new ResponseEntity<>("Report deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<List<Report>> getByPatient(@PathVariable int id) {
        return new ResponseEntity<>(this.reportService.getByPatient(id), HttpStatus.ACCEPTED);
    }

}
