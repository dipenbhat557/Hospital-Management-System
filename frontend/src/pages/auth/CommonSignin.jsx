import React, { useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { userState, tokenState } from "../../store/atom";

function CommonSignin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);

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
      const data = response.data;
      console.log(data.token);
      console.log(data.response);
      setToken(data.token);
      setUser(data.response);
      console.log(user);
      console.log(token);
      if (user.role === "DOCTOR") {
        window.location.href = "/doctor";
      } else if (user.role === "PATIENT") {
        window.location.href = "/patient";
      } else {
        window.location.href = "/employee";
      }

      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
