package com.hms.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BillRequest {

    private String patientName;

    private String doctorName;
    private String department;
    private String description;
    private int amount;
    private String remarks;
    private String paymentMethod;

}
