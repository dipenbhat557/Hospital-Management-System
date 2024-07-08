import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiFirstAidKitLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function DoctorConsultations() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "http://localhost:8080/api/appointment",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPatients(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleNavigate = (patientId) => {
    navigate(`/doctor/new`, { state: { patientId: patientId } });
  };

  return (
    <div className="flex justify-center align-middle h-fit w-full">
      <div className="card w-full max-w-4xl p-4">
        <div className="previousConsultations">
          <div>
            <p className="text-xl text-[#0abfc2] font-bold mb-4">
              Today's Consultations
            </p>
            <div className="flex justify-between p-2">
              <p>Date : 15/02/2024</p>
              <p>Day: Thursday</p>
            </div>
          </div>
          <div className="consultations">
            <table className="min-w-full bg-white border-4 shadow-lg border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Patient's Name</th>
                  <th className="px-4 py-2 border">Arriving Date</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-4 py-2 border">
                      {patient.patient?.name}
                    </td>
                    <td className="px-4 py-2 border">{patient.date}</td>
                    <td className="px-4 py-2 border">
                      {patient.doctor.department}
                    </td>
                    <td className="px-4 py-2 border flex gap-2 items-center justify-center">
                      <button
                        onClick={() => handleNavigate(patient.patient?.id)}
                        className="flex gap-2 items-center"
                      >
                        <RiFirstAidKitLine />
                        {patient.verified ? (
                          <p>Not verified</p>
                        ) : (
                          <p>Check in</p>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorConsultations;
