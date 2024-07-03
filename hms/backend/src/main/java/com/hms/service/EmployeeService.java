package com.hms.service;

import com.hms.model.Employee;
import com.hms.payload.SignupRequest;

public interface EmployeeService {
    public Employee create(SignupRequest signupRequest);
}
