import React from "react";
import DoctorNavbar from "../../components/DoctorNavbar";
import DoctorSideBar from "../../components/DoctorSideBar";
import DoctorConsultations from "../../components/DoctorConsultations";
import GlobalFooter from "../../components/GlobarFooter";
const Consultations = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DoctorNavbar />
      <div className="flex flex-grow overflow-hidden">
        <DoctorSideBar />
        <DoctorConsultations />
      </div>
      <GlobalFooter />
    </div>
  );
};

export default Consultations;
