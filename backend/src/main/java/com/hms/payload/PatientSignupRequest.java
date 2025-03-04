package com.hms.payload;

import com.hms.model.Address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientSignupRequest {
    private String name;
    private String dob;
    private String gender;
    private String mobNo;
    private int age;
    private Integer userId;
    private Address address;
}
