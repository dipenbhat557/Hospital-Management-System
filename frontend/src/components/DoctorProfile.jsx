import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorProfile() {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [doctorDetails, setDoctorDetails] = useState(null);

  const userId = user ? user.id : null;

  useEffect(() => {
    const GetDoctor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/doctor/user/${userId}`,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );

        setDoctorDetails(response.data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    if (userId) {
      GetDoctor();
    }
  }, [userId, token]);

  if (!doctorDetails) {
    return <div>Loading...</div>;
  }

  const {
    employee: {
      name,
      age,
      sex: gender,
      address: { address, state, city, pinNo },
      mobNo: contact,
      dob,
    },
    department,
    qualification,
  } = doctorDetails;

  return (
    <div className="w-full flex flex-col justify-between py-7">
      <div className="flex gap-9 justify-center items-start w-full pt-10 text-slate-500">
        <div>
          <div className="doctorInfo">
            <table className="table-auto w-full text-left">
              <tbody>
                <tr>
                  <td className="font-semibold pr-4 py-2">Name:</td>
                  <td className="py-2">{name}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Age:</td>
                  <td className="py-2">{age}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Gender:</td>
                  <td className="py-2">{gender}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Specialisation:</td>
                  <td className="py-2">{department}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Qualifications:</td>
                  <td className="py-2">{qualification}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Language Spoken:</td>
                  <td className="py-2">English, Kannada, Tamil</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Contact:</td>
                  <td className="py-2">{contact}</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">
                    Residential Address:
                  </td>
                  <td className="py-2">
                    {address}, {city}, {state}, {pinNo}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Email:</td>
                  <td className="py-2">Ramlal@gmail.com</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Experience:</td>
                  <td className="py-2">6 years</td>
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
