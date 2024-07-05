package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}
