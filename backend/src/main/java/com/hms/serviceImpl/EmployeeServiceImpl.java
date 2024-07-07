package com.hms.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Address;
import com.hms.model.Employee;
import com.hms.model.User;
import com.hms.payload.EmployeeSignupRequest;
import com.hms.repo.AddressRepo;
import com.hms.repo.EmployeeRepo;
import com.hms.repo.UserRepo;
import com.hms.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private UserRepo userRepo;

    @Override
    public Employee create(EmployeeSignupRequest employeeSignupRequest) {

        String name = employeeSignupRequest.getName();
        String salary = employeeSignupRequest.getSalary();
        String sex = employeeSignupRequest.getSex();
        String mobNo = employeeSignupRequest.getMobNo();
        int age = employeeSignupRequest.getAge();
        String dob = employeeSignupRequest.getDob();

        Address address = employeeSignupRequest.getAddress();
        address = this.addressRepo.save(address);

        Employee employee = new Employee();
        employee.setName(name);
        employee.setSalary(salary);
        employee.setSex(sex);
        employee.setMobNo(mobNo);
        employee.setAge(age);
        employee.setAddress(address);
        employee.setDob(dob);

        Integer userId = employeeSignupRequest.getUserId();
        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not founmd"));
        employee = this.employeeRepo.save(employee);
        // employee.setUser(user);
        user.setEmployee(employee);
        this.userRepo.save(user);

        return employee;
    }

    @Override
    public List<Employee> getAll() {
        return this.employeeRepo.findAll();
    }

    @Override
    public Employee getById(int id) {
        return this.employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("The emoloye not found"));
    }

    @Override
    public void deleteById(int id) {
        this.employeeRepo.delete(getById(id));
    }

}
