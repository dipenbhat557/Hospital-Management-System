package com.hms.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Doctor;
import com.hms.model.Employee;
import com.hms.model.User;
import com.hms.payload.DoctorSignupRequest;
import com.hms.payload.SignupRequest;
import com.hms.repo.DoctorRepo;
import com.hms.repo.UserRepo;
import com.hms.service.DoctorService;
import com.hms.service.EmployeeService;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private UserRepo userRepo;

    @Override
    public Doctor create(DoctorSignupRequest doctorSignupRequest) {

        String department = doctorSignupRequest.getDepartment();
        String qualification = doctorSignupRequest.getQualification();

        Employee employee = this.employeeService.create(doctorSignupRequest.getEmployeeSignupRequest());

        Doctor doctor = new Doctor();
        doctor.setDepartment(department);
        doctor.setQualification(qualification);
        doctor.setEmployee(employee);

        doctor = this.doctorRepo.save(doctor);

        User user = this.userRepo.findById(doctorSignupRequest.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));

        user.setEmployee(employee);
        this.userRepo.save(user);
        return doctor;
    }

}
