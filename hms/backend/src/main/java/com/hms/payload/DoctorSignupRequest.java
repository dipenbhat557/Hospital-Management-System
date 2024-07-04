package com.hms.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorSignupRequest {
    private String department;
    private String qualification;
    private Integer userId;
    private EmployeeSignupRequest employeeSignupRequest;
}
