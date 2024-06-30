package com.hms.model;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String problem;
    private String solutions;
    private String medicalTest;
    private String testReport;
    private Timestamp timeOfCreation;
    private String referredTo;
    private String referredBy;

    @ManyToOne
    private Doctor doctor;

    @ManyToOne
    private Patient patient;

    // Constructors, getters, setters (generated by Lombok @Data)
}