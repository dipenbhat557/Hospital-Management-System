package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
