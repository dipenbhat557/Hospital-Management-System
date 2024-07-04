package com.hms.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeSignupRequest {
    private String name;
    private String salary;
    private String sex;
    private String mobNo;
    private String dob;
    private int age;
    private Integer userId;
    private Address address;

}
