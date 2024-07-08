import React from "react";

const DoctorNavbar = () => {
  return (
    <div className="min-w-screen h-16 flex justify-between items-center px-2 ">
      <div>
        <img src="/mainlogo.jpg" alt="" className="w-36" />
      </div>
      <div className="flex gap-6 text-slate-500">
        <p>
          <span className="font-semibold">DATE</span> : 08/07/24
        </p>
        <p>
          <span className="font-semibold">DATE</span> : Monday
        </p>
      </div>
    </div>
  );
};

export default DoctorNavbar;
