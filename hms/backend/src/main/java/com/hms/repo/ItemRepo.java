package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Item;

public interface ItemRepo extends JpaRepository<Item, Integer> {

}
