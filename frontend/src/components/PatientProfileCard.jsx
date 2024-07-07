import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";

function PatientProfileCard() {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const getPatient = async () => {
      try {
        const userResponse = await axios.get(
          `${import.meta.env.VITE_APP_API_ROOT}/api/user/${user?.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userData = await userResponse.data;
        setUserData(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    getPatient();
  }, [token]);

  return (
    <div>
      <div className="h-[80vh] flex justify-center items-center w-[70vw] p-4">
        <div className="grid grid-cols-1 md:grid-cols-2  h-[20vh] text-lg gap-10">
          <div className="name">
            <p>
              <span> Name :</span>
              <br />{" "}
              <span className="text-base text-slate-400">{userData.name}</span>
            </p>
          </div>
          <div className="address">
            <p>
              <span>Address :</span> <br />
              <span className="text-base text-slate-400">
                {userData?.patient?.address?.address}
              </span>
            </p>
          </div>
          <div className="city">
            <span>City :</span> <br />
            <span className="text-base text-slate-400">
              {userData?.patient?.address?.city}
            </span>
          </div>
          <div className="district">
            <span>District :</span> <br />
            <span className="text-base text-slate-400">Ramnagar</span>
          </div>
          <div className="state">
            <span> State :</span> <br />{" "}
            <span className="text-base text-slate-400">
              {userData?.patient?.address?.state}{" "}
            </span>
          </div>
          <div className="pincode">
            <span className="font-medium">Pin Code :</span> <br />
            <span className="text-slate-400 text-base">
              {userData?.patient?.address?.pinNo}
            </span>
          </div>
          <div className="email">
            <span>Email : </span> <br />{" "}
            <span className="text-base text-slate-400">{userData.email}</span>
          </div>
          <div className="contact no .">
            <span>Contact :</span> <br />
            <span className="text-base text-slate-400">
              {userData?.patient?.mobNo}
            </span>
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
