package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Employee;
import com.hms.payload.EmployeeSignupRequest;
import com.hms.service.EmployeeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController

public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/auth/employee")
    public ResponseEntity<Employee> postMethodName(@RequestBody EmployeeSignupRequest employeeSignupRequest) {

        return new ResponseEntity<>(this.employeeService.create(employeeSignupRequest), HttpStatus.CREATED);
    }

    @GetMapping("/api/employee")
    public ResponseEntity<List<Employee>> getAll() {
        return new ResponseEntity<>(this.employeeService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/api/employee/{id}")
    public ResponseEntity<Employee> getById(@PathVariable int id) {
        return new ResponseEntity<>(this.employeeService.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/api/employee/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        this.employeeService.deleteById(id);
        return new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
    }

}
