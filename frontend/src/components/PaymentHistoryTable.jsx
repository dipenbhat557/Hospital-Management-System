import React from "react";

const PaymentHistoryTable = () => {
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
        <tbody>
          <tr className="border-b hover:bg-gray-200">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">Dr Abhilash, MBBS</td>
            <td className="px-2 py-2">MRI Lab</td>
            <td className="px-2 py-2">MRI Report for patient</td>
            <td className="px-2 py-2">02-09-2023</td>
            <td className="px-2 py-2">₹10,000</td>
            <td className="px-2 py-2">Payment completed</td>
            <td className="px-2 py-2">Upi</td>
          </tr>
          <tr className="border-b hover:bg-gray-200">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">Dr Abhilash, MBBS</td>
            <td className="px-2 py-2">MRI Lab</td>
            <td className="px-2 py-2">MRI Report for patient</td>
            <td className="px-2 py-2">02-09-2023</td>
            <td className="px-2 py-2">₹10,000</td>
            <td className="px-2 py-2">Payment completed</td>
            <td className="px-2 py-2">Cash</td>
          </tr>{" "}
          <tr className="border-b hover:bg-gray-200">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">Dr Abhilash, MBBS</td>
            <td className="px-2 py-2">MRI Lab</td>
            <td className="px-2 py-2">MRI Report for patient</td>
            <td className="px-2 py-2">02-09-2023</td>
            <td className="px-2 py-2">₹10,000</td>
            <td className="px-2 py-2">Payment Incomplete</td>
          </tr>{" "}
          <tr className="border-b hover:bg-gray-200">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">Dr Abhilash, MBBS</td>
            <td className="px-2 py-2">MRI Lab</td>
            <td className="px-2 py-2">MRI Report for patient</td>
            <td className="px-2 py-2">02-09-2023</td>
            <td className="px-2 py-2">₹10,000</td>
            <td className="px-2 py-2">Payment completed</td>
            <td className="px-2 py-2">Etherium</td>
          </tr>{" "}
          <tr className="border-b hover:bg-gray-200">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">Dr Abhilash, MBBS</td>
            <td className="px-2 py-2">MRI Lab</td>
            <td className="px-2 py-2">MRI Report for patient</td>
            <td className="px-2 py-2">02-09-2023</td>
            <td className="px-2 py-2">₹10,000</td>
            <td className="px-2 py-2">Payment completed</td>
            <td className="px-2 py-2">Debit Card</td>
          </tr>{" "}
          <tr className="border-b hover:bg-gray-200">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">Dr Abhilash, MBBS</td>
            <td className="px-2 py-2">MRI Lab</td>
            <td className="px-2 py-2">MRI Report for patient</td>
            <td className="px-2 py-2">02-09-2023</td>
            <td className="px-2 py-2">₹10,000</td>
            <td className="px-2 py-2">Payment completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryTable;
