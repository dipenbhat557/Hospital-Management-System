package com.hms.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Bill;
import com.hms.model.Patient;
import com.hms.payload.BillRequest;
import com.hms.repo.BillRepo;
import com.hms.service.BillService;
import com.hms.service.PatientService;
import com.hms.repo.PatientRepo;
import com.hms.service.UserService;
import com.hms.model.User;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillRepo billRepo;

    @Autowired
    private PatientService patientService;

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private UserService userService;

    @Override
    public Bill create(BillRequest req) {

        Bill bill = new Bill();

        String patientName = req.getPatientName();
        Patient patient = this.patientRepo.findByName(patientName);
        bill.setPatient(patient);
        bill.setDoctorName(req.getDoctorName());
        bill.setDepartment(req.getDepartment());
        bill.setDescription(req.getDescription());
        bill.setAmount(req.getAmount());
        bill.setDate(new Date());
        bill.setRemarks(req.getRemarks());
        bill.setPaymentMethod(req.getPaymentMethod());

        bill = this.billRepo.save(bill);

        return bill;
    }

    @Override
    public List<Bill> getAllBills() {
        return this.billRepo.findAll();
    }

    @Override
    public Bill getById(int id) {
        return this.billRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Bill is nt found"));
    }

    @Override
    public void deleteById(int id) {
        this.billRepo.delete(getById(id));
    }

    @Override
    public List<Bill> getByUserId(int userId){
        User user = this.userService.getById(userId);
        Patient patient = user.getPatient();
        if(patient == null){
            throw new ResourceNotFoundException("Patient is not this user");
        }

        List<Bill> bills = this.billRepo.findByPatient(patient);
        return bills;
    }

}
