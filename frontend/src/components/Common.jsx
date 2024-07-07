import React from "react";
import { Link } from "react-router-dom";

function Common() {
  return (
    <div className="w-screen h-screen bg-black text-white font-semibold text-[45px] flex justify-center items-center flex-col gap-10">
      <p className="text-green-500">Hello this is the first page of hms</p>
      <Link className="text-[30px]" to="/auth/signup">Click to Register</Link>
      <Link to="/auth/signin" className="text-[30px]">Click here if you are already a user</Link>
    </div>
  );
}

export default Common;
