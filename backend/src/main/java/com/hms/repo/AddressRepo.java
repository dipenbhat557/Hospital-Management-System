package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Address;

public interface AddressRepo extends JpaRepository<Address, Integer> {

}
