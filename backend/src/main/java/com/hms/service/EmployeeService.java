package com.hms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hms.model.Employee;
import com.hms.payload.EmployeeSignupRequest;

@Service
public interface EmployeeService {
    public Employee create(EmployeeSignupRequest employeeSignupRequest);

    public List<Employee> getAll();

    public Employee getById(int id);

    public void deleteById(int id);
}
