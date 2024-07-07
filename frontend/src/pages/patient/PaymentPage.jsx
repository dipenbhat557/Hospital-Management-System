import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
   const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const [formData, setFormData] = useState({
    patientName: user?.name,
    doctorName: '',
    department: '',
    description: '',
    amount: '',
    remarks: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ROOT}/api/bill`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Payment data submitted:', response.data);
      window.location.href="/patient"
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Payment Information</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
            <input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Remarks</label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
