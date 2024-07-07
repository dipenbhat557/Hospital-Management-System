package com.hms.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Doctor;
import com.hms.model.Employee;
import com.hms.model.User;
import com.hms.payload.DoctorSignupRequest;
import com.hms.repo.DoctorRepo;
import com.hms.repo.UserRepo;
import com.hms.service.DoctorService;
import com.hms.service.EmployeeService;
import com.hms.service.UserService;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

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

    @Override
    public List<Doctor> getAllDoctors() {
        return this.doctorRepo.findAll();
    }

    @Override
    public Doctor getById(int id) {
        return this.doctorRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected doctor is not found"));
    }

    @Override
    public void deleteById(int id) {
        Doctor doctor = this.doctorRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("The expected doctor is not found"));

        this.doctorRepo.delete(doctor);
    }

    @Override
    public Doctor getByUserId(int id) {

        User user = this.userService.getById(id);

        Doctor doctor = this.doctorRepo.findByEmployee_User(user);

        return doctor;
    }

}
