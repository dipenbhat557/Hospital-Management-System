import React, { useState } from "react";
import { MdBusinessCenter } from "react-icons/md";
function BookConsultations() {
  const departments = [
    "ENT",
    "Neurologist",
    "Cardio",
    "Dermatology",
    "Pediatrics",
  ];
  const doctors = {
    ENT: ["Dr. John Doe", "Dr. Jane Smith"],
    Neurologist: ["Dr. Albert Brown", "Dr. Emma Wilson"],
    Cardio: ["Dr. Michael Johnson", "Dr. Olivia Davis"],
    Dermatology: ["Dr. William Martinez", "Dr. Sophia Garcia"],
    Pediatrics: ["Dr. James Anderson", "Dr. Isabella Rodriguez"],
  };

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedDoctor, setSelectedDoctor] = useState(
    doctors[departments[0]][0]
  );

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setSelectedDoctor(doctors[event.target.value][0]);
  };

  return (
    <div className="w-[60vw] mx-auto mt-10 p-5 border rounded-lg shadow-lg h-[80vh]">
      <h2 className="text-2xl  font-bold pl-24 mb-5 text-center text-[#0abfc2]">
        Book a new appointment
      </h2>
      <div className="flex gap-3 items-center justify-center">
        <form className="w-[30vw] flex flex-col  justify-center gap-7">
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-fit text-slate-400 px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md text-slate-400"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                {doctors[selectedDepartment].map((doctor) => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0abfc2] text-white px-4 py-2 rounded-md  flex gap-3 items-center"
            >
              <MdBusinessCenter />
              Fix Appointment
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <img src="/mainlogo.jpg" alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
}

export default BookConsultations;
