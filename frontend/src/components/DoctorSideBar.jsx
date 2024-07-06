import React from "react";
import { GrOverview } from "react-icons/gr";
import { FaFileSignature } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorSideBar = () => {
  return (
    <div className="h-[55vh]  flex flex-col justify-center items-start align-middle rounded-lg pl-4 bg-[#0abfc2] w-96 overflow-y-hidden shadow-2xl text-slate-50 font-bold">
      <div className="flex flex-col items-start justify-center gap-16 w-full">
        <ul className="flex flex-col gap-4 w-full">
          <Link
            to={"/doctor"}
            className="flex items-center align-middle p-3 gap-14 hover:bg-white hover:text-[#0abfc2] hover:rounded-l-xl
          "
          >
            <GrOverview />
            Overview
          </Link>
          <Link
            to={"/doctor/consultations"}
            className="flex items-center align-middle p-3 gap-14 hover:bg-white hover:text-[#0abfc2] hover:rounded-l-xl"
          >
            <FaFileSignature /> Consultations
          </Link>
          <Link
            to={"/doctor/profile"}
            className="flex items-center align-middle p-3 gap-14 hover:bg-white hover:text-[#0abfc2] hover:rounded-l-xl"
          >
            <FaRegUserCircle />
            Profile
          </Link>
        </ul>
        <div className="flex items-center justify-center">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorSideBar;
