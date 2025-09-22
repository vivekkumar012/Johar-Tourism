import React from "react";
import logo from "../assets/Johar_Tourism_01.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      <div>
        <h3 className="text-2xl font-bold text-[#41A4FF]">Johar Tourism</h3>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio non
          nemo veniam, natus accusantium. Praesentium, doloribus mollitia
          dignissimos similique optio
        </p>
        <div className="flex gap-10 justify-start my-6 md:w-[75%] cursor-pointer">
          <Facebook size={30} />
          <Twitter size={30} />
          <Instagram size={30} />
        </div>
      </div>
      <div className="flex md:justify-around justify-start mt-8">
        <div>
          <h6 className="font-bold text-[#41a3ff] text-xl">Reservations</h6>
          <ul className="mt-2 font-light cursor-pointer">
            <li className="py-2 text-sm">Hotels</li>
            <li className="py-2 text-sm">Tour Packages</li>
            <li className="py-2 text-sm">Vehicles</li>
            <li className="py-2 text-sm">Restaurants</li>
            <li className="py-2 text-sm">Events</li>
          </ul>
        </div>
        <div className="ml-[8rem]">
          <h6 className="font-bold text-[#41A4FF] text-xl">Support</h6>
          <ul className="mt-2 font-light cursor-pointer">
            <li className="py-2 text-sm">Contact us</li>
            <li className="py-2 text-sm">About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
