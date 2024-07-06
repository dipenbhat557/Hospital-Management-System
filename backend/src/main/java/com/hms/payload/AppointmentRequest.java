package com.hms.payload;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequest {

    private LocalDate date;
    private int doctorId;
    private int patientId;
    private boolean verified;

}
