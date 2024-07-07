import axios from "axios";
import React, { useEffect, useState } from "react";

function OverviewCard() {
  const [doctorId, setDoctorId] = useState();
  const [doctorData, setDoctorData] = useState(null);

  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  // useEffect(() => {
  //   const getDoctorId = async () => {
  //     try {
  //       const userResponse = await axios.get(
  //         `${import.meta.env.VITE_APP_API_ROOT}/api/user/${user?.id}`,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       const userData = userResponse.data;
  //       console.log(userData?.id);
  //       setDoctorId(userData?.id);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   if (user?.id && token) {
  //     getDoctorId();
  //   }
  // }, [user, token]);

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_ROOT}/api/doctor/user/${user.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const doctorDataResponse = response.data;
        setDoctorData(doctorDataResponse);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    getDoctor();
  }, [doctorId, token]);

  return (
    <div className="flex items-center justify-center min-w-fit w-full">
      <div className="p-2 border border-2-solid flex justify-between">
        <div className="w-[25vw] p-4">
          <div>
            <p className="text-[#0abfc2] font-semibold">
              HELLO {doctorData?.employee?.name.toUpperCase() || "Loading..."}
            </p>
          </div>
          <div className="flex">
            <img src="./docter.jpg" alt="" className="w-40 rounded-xl" />
          </div>
          <div className="mt-4 text-gray-500">
            DEPARTMENT: {doctorData?.department.toUpperCase()}
          </div>
          <div className="flex flex-col mt-4">
            <img src="./doctorPatient.jpg" alt="" className="w-20 rounded-xl" />
            <p className="text-sm mt-2 text-gray-500">Previous Consultations</p>
          </div>
          <div className="mt-4">
            <p className="bg-[#0abfc2] text-white rounded-sm p-4 w-fit font-bold">
              <a href="/doctor/consultations">Check Today's Schedule</a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="./mainlogo.jpg" alt="" className="w-[30vw]" />
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
