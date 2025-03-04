import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSideBar from "../../components/PatientSideBar";
import BookConsultations from "../../components/BookConsultations";

function PatientMainPage() {
  return (
    <div>
      <PatientNavbar />
      <div className="flex">
        <PatientSideBar />
        <BookConsultations />
      </div>
    </div>
  );
}

export default PatientMainPage;
