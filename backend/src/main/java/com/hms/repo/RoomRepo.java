package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.model.Room;

public interface RoomRepo extends JpaRepository<Room, Integer> {

}
