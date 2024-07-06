package com.hms.serviceImpl;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.exception.ResourceNotFoundException;
import com.hms.model.Bill;
import com.hms.model.Patient;
import com.hms.payload.BillRequest;
import com.hms.repo.BillRepo;
import com.hms.repo.PatientRepo;
import com.hms.service.BillService;
import com.hms.service.PatientService;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillRepo billRepo;

    @Autowired
    private PatientService patientService;

    @Override
    public Bill create(BillRequest req) {

        Bill bill = new Bill();

        int patientId = req.getPatientId();
        Patient patient = this.patientService.getById(patientId);
        bill.setPatient(patient);
        bill.setAmount(req.getAmount());
        bill.setDate(new Date());
        bill.setPaymentMehtod(req.getPaymentMethod());

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

}
