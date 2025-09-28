import React, { useState } from "react";
import { Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Tourist",
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Change the URL to your backend port (e.g. 5000)
      const res = await axios.post("http://localhost:3000/api/auth/register", formData);

      if (res.status === 201 || res.status === 200) {
        alert("Registration successful! Please login.");
        navigate("/login"); // redirect with react-router
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8">
          <div className="text-center mb-6">
            <Users className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500">Join as your preferred role</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
            >
              {roles.map((role, idx) => (
                <option key={idx} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
