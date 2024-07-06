import React from "react";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function PatientSideBar() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center  gap-28 w-[25vw] min-h-[88vh] p-7 font-semibold bg-[#0abfc2] mt-7 rounded-xl text-white ">
        <ul className="flex gap-5 flex-col w-full ">
          <Link
            to={"/patient"}
            className="text-sm flex gap-5 items-center hover:bg-[#ffff] p-4 hover:text-[#0abfc2]"
          >
            <FaHistory />
            MEDICAL HISTORY{" "}
          </Link>
          <Link
            to={"/patient/new"}
            className="text-sm flex gap-5 items-center hover:bg-[#ffff] p-4 hover:text-[#0abfc2]"
          >
            <FaFileMedicalAlt />
            CONSULTATION
          </Link>

          <Link
            to={"/patient/payment"}
            className="text-sm flex gap-5 items-center hover:bg-[#ffff] p-4 hover:text-[#0abfc2]"
          >
            <MdPayment /> PAYMENTS
          </Link>
          <Link
            to={"/patient/profile"}
            className="text-sm flex gap-5 items-center hover:bg-[#ffff] p-4 hover:text-[#0abfc2]"
          >
            <ImProfile />
            PROFILE
          </Link>
        </ul>
        <div className="logout ">
          <p className="flex items-center justify-center text-sm">
            <button className="flex items-center gap-2">
              <IoIosLogOut />
              LOGOUT
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientSideBar;
