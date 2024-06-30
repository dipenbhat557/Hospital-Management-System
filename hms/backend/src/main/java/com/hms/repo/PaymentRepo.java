package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Integer> {

}
