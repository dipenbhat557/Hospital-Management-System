package com.hms.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.model.Doctor;
import com.hms.model.Employee;
import com.hms.payload.SignupRequest;
import com.hms.repo.DoctorRepo;
import com.hms.service.DoctorService;
import com.hms.service.EmployeeService;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private EmployeeService employeeService;

    @Override
    public Doctor create(SignupRequest signupRequest) {

        String department = signupRequest.getDepartment();
        String qualification = signupRequest.getQualification();

        Employee employee = this.employeeService.create(signupRequest);

        Doctor doctor = new Doctor();
        doctor.setDepartment(department);
        doctor.setQualification(qualification);
        doctor.setEmployee(employee);

        doctor = this.doctorRepo.save(doctor);

        return doctor;
    }

}
