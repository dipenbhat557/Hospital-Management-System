import React from "react";
import PatientNavbar from "../../components/PatientNavbar";
import PatientSideBar from "../../components/PatientSideBar";
import PaymentHistoryTable from "../../components/PaymentHistoryTable";

function PatientPaymentHistory() {
  return (
    <div>
      <PatientNavbar />
      <div className="flex">
        <PatientSideBar />
        <PaymentHistoryTable />
      </div>
    </div>
  );
}

export default PatientPaymentHistory;
