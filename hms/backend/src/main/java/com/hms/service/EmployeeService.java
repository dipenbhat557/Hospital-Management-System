package com.hms.service;

import org.springframework.stereotype.Service;

import com.hms.model.Employee;
import com.hms.payload.SignupRequest;

@Service
public interface EmployeeService {
    public Employee create(SignupRequest signupRequest);
}
