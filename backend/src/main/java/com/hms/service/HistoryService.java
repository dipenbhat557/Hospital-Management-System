package com.hms.service;

import java.util.List;

import com.hms.model.MedicalHistory;
import com.hms.payload.HistoryRequest;

public interface HistoryService {

    List<MedicalHistory> getPatientsHistory(int patientId);

    List<MedicalHistory> addPatientHistory(HistoryRequest req);

    void deleteHistory(int id);

}
