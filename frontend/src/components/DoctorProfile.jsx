import React from "react";
import GlobalFooter from "./GlobarFooter";

function DoctorProfile() {
  return (
    <div className="w-full flex flex-col justify-between py-7">
      <div className="flex gap-9 justify-center items-start w-full pt-10 text-slate-500">
        <div>
          <div className="doctorInfo">
            <table className="table-auto w-full text-left">
              <tbody>
                <tr>
                  <td className="font-semibold pr-4">Name:</td>
                  <td>Dr. Sanduk Ruit</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Age:</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Gender:</td>
                  <td>Female</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Specialisation:</td>
                  <td>Nasal</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Language Spoken:</td>
                  <td>English, Kannada, Tamil</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Contact:</td>
                  <td>+91 1234567890</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Residential Address:</td>
                  <td>Dang, Lumbini, Nepal</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Email:</td>
                  <td>Ramlal@gmail.com</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4">Experience:</td>
                  <td>6 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-3 font-semibold mt-4">
            <p>Schedule:</p>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
          </div>
        </div>
        <div>
          <div className="imageContainer">
            <img src="/docter.jpg" alt="Doctor" className="w-[15vw]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
