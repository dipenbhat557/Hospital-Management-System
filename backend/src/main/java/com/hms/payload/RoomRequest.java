package com.hms.payload;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomRequest {

    private String type;
    private int capacity;
    private boolean available;
    private List<Integer> patientIds = new ArrayList<>();

}
