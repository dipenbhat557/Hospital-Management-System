package com.hms.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportRequest {

    private String problem;
    private String observation;
    private String suggestion;
    private String testType;
    private String result;
    private int patientId;
    private int doctorId;

}
