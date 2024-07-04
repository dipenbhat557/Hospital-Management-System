package com.hms.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.model.Employee;
import com.hms.model.Patient;
import com.hms.payload.Address;
import com.hms.payload.SignupRequest;
import com.hms.repo.AddressRepo;
import com.hms.repo.EmployeeRepo;
import com.hms.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee create(SignupRequest signupRequest) {

        String name = signupRequest.getName();
        String salary = signupRequest.getSalary();
        String sex = signupRequest.getGender();
        String mobNo = signupRequest.getMobNo();
        int age = signupRequest.getAge();
        String dob = signupRequest.getDob();

        Address address = signupRequest.getAddress();
        address = this.addressRepo.save(address);

        Employee employee = new Employee();
        employee.setName(name);
        employee.setSalary(salary);
        employee.setSex(sex);
        employee.setMobNo(mobNo);
        employee.setAge(age);
        employee.setAddress(address);

        employee = this.employeeRepo.save(employee);

        return employee;
    }

}
