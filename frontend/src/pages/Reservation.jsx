import React from "react";
import Navbar from "../components/navbar/Navbar";

function Reservation() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-4">
        <h1 className="text-2xl font-bold ">Railway Tickets</h1>
        <button className="px-4 py-2 text-white bg-blue-400 cursor-pointer hover:bg-blue-900">
          Click Here
        </button>
      </div>
    </div>
  );
}

export default Reservation;
