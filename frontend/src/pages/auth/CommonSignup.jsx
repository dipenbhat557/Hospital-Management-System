import React, { useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import DoctorNavbar from "../../components/DoctorNavbar";
import { tokenState, userState } from "../../store/atom";

function CommonSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [user, setUser] = useRecoilState(userState);
  const setToken = useSetRecoilState(tokenState);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ROOT}/auth/signup`,
        formData
      );
      const { token, response: userData } = await response.data;

      setToken(token);
      setUser(userData);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      console.log("User signed up:", user);

      if (userData?.role === "DOCTOR") {
        window.location.href = "/auth/doctor";
      } else if (userData?.role === "PATIENT") {
        window.location.href = "/auth/patient";
      } else {
        window.location.href = "/auth/employee";
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
    setFormData({ name: "", email: "", password: "", role: "" });
  };

  return (
    <div className="h-full w-full">
      <DoctorNavbar />
      <div className="flex h-screen items-start justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">
            SIGN UP
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter the name"
                id="name"
                name="name"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex: something@gmail.com"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter a strong password"
                id="password"
                name="password"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="DOCTOR">Doctor</option>
                <option value="PATIENT">Patient</option>
                <option value="ADMIN">Admin</option>
                <option value="EMPLOYEE">Employee</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm hover:bg-indigo-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommonSignup;
