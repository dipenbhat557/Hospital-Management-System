import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function PatientHistory() {
  const [consultations, setConsultations] = useState([]);
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const navigate = useNavigate();
  const userId = user?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUser = await axios.get(
          `${import.meta.env.VITE_APP_API_ROOT}/api/user/${user.id}`,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );

        const userRes = await newUser.data;
        const patientId = userRes?.patient?.id;

        console.log(userRes);
        console.log(patientId);

        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_ROOT}/api/report/patient/${patientId}`,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );
        const data = await response.data;
        console.log(user);
        console.log(data);
        setConsultations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleRowClick = (consultationId) => {
    navigate(`/patient/payment/on`);
  };

  return (
    <div className="flex w-[75vw] justify-center flex-col items-center gap-7">
      <div className="previous-consultations pt-8 ">
        <table className="table-auto w-[50vw]">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-medium">
              <th className="px-4 py-2">DEPARTMENT</th>
              <th className="px-4 py-2">RESULT</th>
              <th className="px-4 py-2">DOCTOR</th>
            </tr>
          </thead>
          <tbody>
            {consultations?.length === 0 ? (
              <p className="text-[35px] font-semibold text-center text-slate-400 w-full">
                No previous medical reports
              </p>
            ) : (
              consultations?.map((consultation) => (
                <tr
                  key={consultation.id}
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRowClick(consultation.id)}
                >
                  <td className="px-4 py-2">
                    {consultation.doctor.department || " "}
                  </td>
                  <td className="px-4 py-2">{consultation.result || " "}</td>
                  <td className="px-4 py-2">
                    {consultation.doctor.employee.name || " "} <br />
                    {consultation.doctor.qualification || " "}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center flex-col border shadow-2xl p-2 ease-in-out transition-all w-[15vw]">
          <img
            src="/newapp.jpg"
            className="w-28 h-32 object-contain"
            alt="something kei"
          />
          <Link className="text-[#0abfc2] font-semibold" to={"/patient/new"}>
            Book New Appointment
          </Link>
        </div>
        <div className="previousPayments bg-white flex items-center flex-col border shadow-2xl p-2 ease-in-out transition-all w-[15vw]">
          <img src="/payment.jpg" alt="" className="w-28 h-32 object-contain" />
          <Link className="text-[#0abfc2] font-semibold" to={"/patient/payment"}>
            Payment History
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PatientHistory;
