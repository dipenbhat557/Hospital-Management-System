import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSignupForm from "../../components/PatientSignupForm";

function PatientSetup() {
  return (
    <div>
      <PatientNavbar />
      <div>
        <PatientSignupForm />
      </div>
    </div>
  );
}

export default PatientSetup;
