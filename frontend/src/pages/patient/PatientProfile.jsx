import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSideBar from "../../components/PatientSideBar";
import PatientProfileCard from "../../components/PatientProfileCard";

function PatientProfile() {
  return (
    <div>
      <PatientNavbar />
      <div className="flex">
        <PatientSideBar />
        <PatientProfileCard />
      </div>
    </div>
  );
}

export default PatientProfile;
