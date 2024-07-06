import React from "react";
import DoctorProfile from "../../components/DoctorProfile";
import DoctorSideBar from "../../components/DoctorSideBar";
import DoctorNavbar from "../../components/DoctorNavbar";
import GlobalFooter from "../../components/GlobarFooter";

function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DoctorNavbar />
      <div className="flex flex-grow overflow-hidden">
        <DoctorSideBar />
        <DoctorProfile />
      </div>
      <GlobalFooter />
    </div>
  );
}

export default ProfilePage;
