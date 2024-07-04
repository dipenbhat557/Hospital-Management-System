package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hms.model.Employee;
import com.hms.payload.EmployeeSignupRequest;
import com.hms.service.EmployeeService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> postMethodName(@RequestBody EmployeeSignupRequest employeeSignupRequest) {

        return new ResponseEntity<>(this.employeeService.create(employeeSignupRequest), HttpStatus.CREATED);
    }

}
