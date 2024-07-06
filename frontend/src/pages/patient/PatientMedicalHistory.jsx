import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSideBar from "../../components/PatientSideBar";
import PatientHistory from "../../components/PatientHistory";

function PatientMedicalHistory() {
  return (
    <div>
      <PatientNavbar />
      <div className="flex">
        <PatientSideBar />
        <PatientHistory />
      </div>
    </div>
  );
}

export default PatientMedicalHistory;
