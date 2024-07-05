package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.payload.Address;

public interface AddressRepo extends JpaRepository<Address, Long> {

}
