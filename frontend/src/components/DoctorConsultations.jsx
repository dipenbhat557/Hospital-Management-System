import React from "react";
import { RiFirstAidKitLine } from "react-icons/ri";

function DoctorConsultations() {
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
            <table className="min-w-full bg-white  border-4 shadow-lg  border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Patient's Name</th>
                  <th className="px-4 py-2 border">Arriving Time</th>
                  <th className="px-4 py-2 border">Appointment</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">John Doe</td>
                  <td className="px-4 py-2 border">10:00 AM</td>
                  <td className="px-4 py-2 border">Routine Checkup</td>

                  <td className="px-4 py-2 border flex gap-2 items-center justify-center">
                    {" "}
                    <RiFirstAidKitLine /> ReVisit
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Jane Smith</td>
                  <td className="px-4 py-2 border">11:00 AM</td>
                  <td className="px-4 py-2 border">Follow-up</td>
                  <td className="px-4 py-2 border flex gap-2 items-center justify-center">
                    <RiFirstAidKitLine /> Visit
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">steven Smith</td>
                  <td className="px-4 py-2 border">11:15 AM</td>
                  <td className="px-4 py-2 border">Follow-up</td>
                  <td className="px-4 py-2 border flex gap-2 items-center justify-center">
                    <RiFirstAidKitLine /> Visit
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Jane Mcullum</td>
                  <td className="px-4 py-2 border">11:30 AM</td>
                  <td className="px-4 py-2 border">Follow-up</td>
                  <td className="px-4 py-2 border flex gap-2 items-center justify-center">
                    <RiFirstAidKitLine /> Visit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorConsultations;
