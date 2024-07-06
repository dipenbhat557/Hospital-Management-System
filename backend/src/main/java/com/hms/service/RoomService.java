package com.hms.service;

import java.util.List;

import com.hms.model.Room;
import com.hms.payload.RoomRequest;

public interface RoomService {

    public Room create(RoomRequest req);

    public List<Room> getAllRooms();

    public Room getById(int id);

    public void deleteById(int id);

    public List<Room> getAvailableRooms();

}
