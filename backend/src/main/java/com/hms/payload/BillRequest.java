package com.hms.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BillRequest {

    private int patientId;

    private int amount;

    private String paymentMethod;

}
