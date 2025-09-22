import React from "react";
import logo from "../../assets/Johar_Tourism_01.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-300 items-center top-0 left-0">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-14 w-16 cursor-pointer" />
        <h1 className="text-xl font-bold">
          Johar <span className="text-xl font-bold text-blue-500">Tourism</span>
        </h1>
      </div>
      <div>
        <li className="flex gap-6 text-xl cursor-pointer">
          <ul>
            <Link to={"/"}>Home</Link>
          </ul>
          <ul>
            <Link to={"/reservation"}>Reservations</Link>
          </ul>
          <ul>
            <Link to={"/contact"}>Contact us</Link>
          </ul>
        </li>
      </div>
      <div className="flex items-center gap-3 font-bold ">
        <Link
          to={"/login"}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 cursor-pointer"
        >
          Sign in
        </Link>
        <Link
          to={"/register"}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
