package com.hms.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

    private String name;
    private String email;
    private String password;
    private Role role;
    private String dob;
    private String gender;
    private String mobNo;
    private int age;
    private String salary;
    private Address address;

}
