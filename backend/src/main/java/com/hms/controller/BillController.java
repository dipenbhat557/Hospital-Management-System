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

import com.hms.model.Bill;
import com.hms.payload.BillRequest;
import com.hms.service.BillService;

@RestController
@RequestMapping("/api/bill")
public class BillController {

    @Autowired
    private BillService billService;

    @PostMapping
    public ResponseEntity<Bill> create(@RequestBody BillRequest req) {
        return new ResponseEntity<>(this.billService.create(req), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Bill>> getAllBills() {
        return new ResponseEntity<>(this.billService.getAllBills(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bill> getById(@PathVariable int id) {
        return new ResponseEntity<>(this.billService.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        this.billService.deleteById(id);
        return new ResponseEntity<>("Bill deleted successfully", HttpStatus.ACCEPTED);
    }

}
