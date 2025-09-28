import React, { useState } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Tourist",
  });

  const roles = [
    "Tourist",
    "Local Guide",
    "Tribal Artisan",
    "Homestay Owner",
    "Transport Provider",
    "Tourism Official",
    "Event Organizer",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // API call to backend here
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8">
          <div className="text-center mb-6">
            <Lock className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>
            <p className="text-gray-500">Access your account by role</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500"
            >
              {roles.map((role, idx) => (
                <option key={idx} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
