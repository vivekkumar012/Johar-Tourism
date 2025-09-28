import React from "react";
import logo from "../../assets/Johar_Tourism_01.png";
import { Link, useNavigate } from "react-router-dom";
import { Home, MapPin, ShoppingBag, Star, Users } from "lucide-react";

function Navbar({ activeSection, setActiveSection }) {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "features", label: "Features", icon: Star, path: "/features" },
    {
      id: "destinations",
      label: "Destinations",
      icon: MapPin,
      path: "/destinations",
    },
    { id: "roles", label: "User Roles", icon: Users, path: "/roles" },
  ];


  return (
    <header className="flex justify-between p-4 bg-gray-300 items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Johar Tourism Logo"
          className="h-14 w-16 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Johar <span className="text-blue-500">Tourism</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map(({ id, label, icon: Icon, path }) => (
          <button
            key={id}
            onClick={() => navigate(path)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
              activeSection === id
                ? "bg-green-100 text-green-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3 font-bold">
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign in
        </Link>
        <Link
          to="/register"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
