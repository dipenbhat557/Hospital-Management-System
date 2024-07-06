import React from "react";
import { Link } from "react-router-dom";

const consultations = [
  {
    date: "01-09-2023",
    department: "ENT",
    doctorName: "Dr Joseph",
    doctorTitle: "MBBS",
    nextConsultation: "01-10-2023",
  },
  {
    date: "01-06-2023",
    department: "Physician",
    doctorName: "Dr Ann Mathew",
    doctorTitle: "MBBS",
    nextConsultation: "02-08-2023",
  },
];

function PatientHistory() {
  return (
    <div className="flex w-[75vw] justify-center flex-col items-center gap-7">
      <div className="previous-consultations pt-8 ">
        <table className="table-auto w-[50vw]">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-medium">
              <th className="px-4 py-2">DEPARTMENT</th>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">DOCTOR</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consultation) => (
              <tr
                key={consultation.date}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-4 py-2">{consultation.department}</td>
                <td className="px-4 py-2">{consultation.date}</td>
                <td className="px-4 py-2">
                  {consultation.doctorName} <br />
                  {consultation.doctorTitle}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4">
        <div className="  flex items-center  flex-col border shadow-2xl   p-2 ease-in-out  transition-all w-[15vw]">
          <img
            src="/newapp.jpg"
            className="w-28 h-32 object-contain "
            alt="something kei"
          />
          <Link className="text-[#0abfc2] font-semibold " to={"/patient/new"}>
            Book New Appointment
          </Link>
        </div>
        <div className="previousPayments bg-white flex items-center  flex-col border shadow-2xl   p-2 ease-in-out  transition-all w-[15vw]">
          <img src="/payment.jpg" alt="" className="w-28 h-32 object-contain" />
          <Link
            className="text-[#0abfc2] font-semibold "
            to={"/patient/payment"}
          >
            Payment History
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PatientHistory;
