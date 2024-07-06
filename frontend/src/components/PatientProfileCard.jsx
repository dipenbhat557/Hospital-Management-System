import React from "react";
import { CiEdit } from "react-icons/ci";

function PatientProfileCard() {
  return (
    <div>
      <div className="h-[80vh] flex justify-center items-center w-[70vw] p-4">
        <div className="grid grid-cols-1 md:grid-cols-2  h-[20vh] text-lg gap-10">
          <div className="name">
            <p>
              <span> Name :</span>
              <br />{" "}
              <span className="text-base text-slate-400">Aakash Subedi</span>
            </p>
          </div>
          <div className="address">
            <p>
              <span>Address :</span> <br />
              <span className="text-base text-slate-400">
                Jain Global Campus
              </span>
            </p>
          </div>
          <div className="city">
            <span>City :</span> <br />
            <span className="text-base text-slate-400">Kanakapura</span>
          </div>
          <div className="district">
            <span>District :</span> <br />
            <span className="text-base text-slate-400">Ramnagar</span>
          </div>
          <div className="state">
            <span> State :</span> <br />{" "}
            <span className="text-base text-slate-400">Karnataka</span>
          </div>
          <div className="pincode">
            <span className="font-medium">Pin Code :</span> <br />
            <span className="text-slate-400 text-base">51202</span>
          </div>
          <div className="email">
            <span>Email : </span> <br />{" "}
            <span className="text-base text-slate-400">
              herewegoagain@gmail.com
            </span>
          </div>
          <div className="contact no .">
            <span>Contact :</span> <br />
            <span className="text-base text-slate-400">894574564</span>
          </div>
        </div>
        <div className="image flex flex-col items-center justify-center h-[20vh]">
          <img src="/patient.jpg" className="w-[15vw] rounded-3xl" alt="" />
          <button className="text-slate-400 flex gap-3 items-center">
            <CiEdit />
            Edit Photo
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientProfileCard;
