import React from "react";

const PatientNavbar = () => {
  return (
    <div className="min-w-screen h-16 flex justify-between items-center px-2 ">
      <div>
        <img src="/mainlogo.jpg" alt="" className="w-40" />
      </div>
      <div className="flex gap-6 text-slate-500">
        <p>
          <span className="font-semibold">DATE</span> : 12/08/24
        </p>
        <p>
          <span className="font-semibold">DATE</span> : Monday
        </p>
      </div>
    </div>
  );
};

export default PatientNavbar;
