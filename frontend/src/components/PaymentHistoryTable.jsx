import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
const PaymentHistoryTable = () => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const [payments, setPayments] = useState([]);
  useEffect(() => {
    const fetchUserId = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_ROOT}/api/bill/user/${user?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const ps = await response.data;
      setPayments(ps);
      console.log("responsei d ", response);
      console.log("payment are ", ps);
    };
    fetchUserId();
  }, []);

  return (
    <div className="flex justify-center w-[70vw] overflow-scroll h-[70vh] mt-7 ">
      <table className=" border border-collapse w-[55vw] h-[60vh]">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="px-2 text-[#0abfc2]">No</th>
            <th className="px-2 text-[#0abfc2]">Doctor</th>
            <th className="px-2 text-[#0abfc2]">Department</th>
            <th className="px-2 text-[#0abfc2]">Description</th>
            <th className="px-2 text-[#0abfc2]">Date</th>
            <th className="px-2 text-[#0abfc2]">Amount</th>
            <th className="px-2 text-[#0abfc2]">Remarks</th>
            <th className="px-2 text-[#0abfc2]">Mode</th>
          </tr>
        </thead>

        {payments?.length === 0 ? (
          <p className="text-[35px] w-full text-center font-semibold text-slate-400">
            No payments yet
          </p>
        ) : (
          payments?.map((p, i) => {
            return (
              <tbody key={i}>
                <tr className="border-b hover:bg-gray-200 h-[100px]">
                  <td className="px-2 py-2">0{i}</td>
                  <td className="px-2 py-2">{p?.doctorName}</td>
                  <td className="px-2 py-2">{p?.department}</td>
                  <td className="px-2 py-2">{p?.description}</td>
                  <td className="px-2 py-2">
                    {p?.date?.toString().slice(0, 10)}
                  </td>
                  <td className="px-2 py-2">₹{p?.amount}</td>
                  <td className="px-2 py-2">{p?.remarks}</td>
                  <td className="px-2 py-2">{p?.paymentMethod}</td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};

export default PaymentHistoryTable;
