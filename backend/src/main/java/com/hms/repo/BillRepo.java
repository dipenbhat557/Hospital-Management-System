package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Bill;

public interface BillRepo extends JpaRepository<Bill, Integer> {

}
