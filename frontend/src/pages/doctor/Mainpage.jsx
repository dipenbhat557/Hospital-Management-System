import React from "react";
import DoctorSideBar from "../../components/DoctorSideBar";
import DoctorNavbar from "../../components/DoctorNavbar";
import OverviewCard from "../../components/OverviewCard";
import GlobalFooter from "../../components/GlobarFooter";

function Mainpage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DoctorNavbar />
      <div className="flex flex-grow overflow-hidden">
        <DoctorSideBar />
        <OverviewCard />
      </div>
      <GlobalFooter />
    </div>
  );
}

export default Mainpage;
