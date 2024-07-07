import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdBusinessCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BookConsultations() {
  const navigate = useNavigate();
  const departments = [
    "ENT",
    "Neurologist",
    "Cardio",
    "Dermatology",
    "Pediatrics",
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [patientId, setPatientId] = useState(null);
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorResponse = await axios.get(
          `${import.meta.env.VITE_APP_API_ROOT}/api/doctor`
        );
        const listofDoctors = doctorResponse.data;
        setDoctors(listofDoctors);
        if (listofDoctors.length > 0) {
          setSelectedDoctor(listofDoctors[0]?.id || "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

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
        setPatientId(userData?.id);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    getPatient();
  }, [token]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      date: date,
      patientId: patientId,
      doctorId: selectedDoctor,
      verified: false,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_ROOT}/api/appointment`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/patient");
    } catch (error) {
      console.error("Error creating appointment:", error);
      // Handle specific error cases or display error message to user
    }
  };

  return (
    <div className="w-[60vw] mx-auto mt-10 p-5 border rounded-lg shadow-lg h-[80vh]">
      <h2 className="text-2xl font-bold pl-24 mb-5 text-center text-[#0abfc2]">
        Book a new appointment
      </h2>
      <div className="flex gap-3 items-center justify-center">
        <form
          className="w-[30vw] flex flex-col justify-center gap-7"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-fit text-slate-400 px-3 py-2 border rounded-md"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex gap-5">
            <div className="mb-4">
              <label htmlFor="department" className="block text-gray-700 mb-2">
                Department
              </label>
              <select
                id="department"
                className="w-full px-3 py-2 border rounded-md text-slate-400"
                value={selectedDepartment}
                onChange={handleDepartmentChange}
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="doctor" className="block text-gray-700 mb-2">
                Doctor
              </label>
              <select
                id="doctor"
                className="w-[10vw] px-3 py-2 border rounded-md text-black"
                value={selectedDoctor}
                onChange={handleDoctorChange}
              >
                {doctors.map((doctor) => (
                  <option
                    key={doctor.id}
                    value={doctor.id}
                    className="text-black"
                  >
                    {doctor.employee.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0abfc2] text-white px-4 py-2 rounded-md flex gap-3 items-center"
            >
              <MdBusinessCenter />
              Fix Appointment
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <img src="/mainlogo.jpg" alt="Logo" className="w-96" />
        </div>
      </div>
    </div>
  );
}

export default BookConsultations;
