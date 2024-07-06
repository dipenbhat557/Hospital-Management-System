package com.hms.service;

import java.util.List;

import com.hms.model.Bill;
import com.hms.payload.BillRequest;

public interface BillService {

    public Bill create(BillRequest req);

    public List<Bill> getAllBills();

    public Bill getById(int id);

    public void deleteById(int id);

}
