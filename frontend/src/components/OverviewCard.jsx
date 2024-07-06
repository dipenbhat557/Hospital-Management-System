import React from "react";

function OverviewCard() {
  return (
    <div className="flex items-center justify-center min-w-fit w-full">
      <div className="p-2 border border-2-solid flex justify-between">
        <div className="w-[25vw] p-4 ">
          <div>
            <p className=" text-[#0abfc2] font-semibold">
              HELLO DR. SANDUK RUIT
            </p>
          </div>
          <div className="flex ">
            <img src="./docter.jpg" alt="" className="w-40 rounded-xl" />
          </div>
          <div className=" mt-4 text-gray-500">PATIENT'S CONSULTED: 50</div>
          <div className="flex flex-col   mt-4">
            <img
              src="./doctorPatient.jpg"
              alt=""
              className="w-20 rounded-xl "
            />
            <p className="text-sm  mt-2 text-gray-500">
              Previous Consultations
            </p>
          </div>
          <div className=" mt-4 ">
            <p className=" bg-[#0abfc2] text-white rounded-sm p-4 w-fit font-bold">
              <a href="/doctor/consultations">Check Today's Schedule</a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="./mainlogo.jpg" alt="" className="w-[30vw]" />
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
