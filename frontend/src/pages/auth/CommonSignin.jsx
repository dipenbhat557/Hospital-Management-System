import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { userState, tokenState } from "../../store/atom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function CommonSignin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);
  const [data, setData] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ROOT}/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      setData(data); // Set data state
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (data?.response && data?.token) {
      setUser(data.response);
      setToken(data.token);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("user", JSON.stringify(data?.response));
    }
  }, [data, setUser, setToken]);

  useEffect(() => {
    if (user?.role) {
      if (user?.role === "DOCTOR") {
        navigate("/doctor"); // Use navigate for routing
      } else if (user?.role === "PATIENT") {
        navigate("/patient"); // Use navigate for routing
      } else {
        navigate("/"); // Use navigate for routing
      }
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Welcome User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="something@gmail.com"
              id="email"
              name="email"
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
              id="password"
              name="password"
              placeholder="Enter the password"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommonSignin;
