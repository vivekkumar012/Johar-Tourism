import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import backgroundImage from "../assets/bg.jpg";
import Spinner from "../components/spinner/LoadingSpinner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const Register = () => {
  const [loading2, setLoading2] = useState(false);

  const [file, setFile] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("traveler");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar/>
      <br />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">
          <div className="mb-8 text-center">
            <h2 className="text-5xl font-bold">SIGN UP</h2>
          </div>
          <div className="mb-6 flex sm:flex-row justify-center">
            <img
              className="rounded-full"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="avatar"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex flex-row justify-center items-center text-center">
                <label htmlFor="file">
                  click here to add a profile picture :{" "}
                  <DriveFolderUploadOutlinedIcon />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && !file.type.startsWith("image/")) {
                      toast.error("Please select an image file", "", "error");
                      return;
                    }
                    setFile(file);
                  }}
                />
              </div>
              <div className="mb-6">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <input
                  placeholder="Email"
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <input
                  placeholder="Mobile"
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <input
                  placeholder="Country"
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] focus:ring outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <div className="relative">
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="block text-base bordder-[#E9EDF4] border appearance-none w-full py-3 px-5   bg-[#FCFDFE] rounded-3xl  border-slate-300 focus:outline-none focus:ring"
                  >
                    <option value="traveler">Traveler</option>
                    <option value="hotelOwner">Hotel Owner</option>
                    <option value="vehicleOwner">Vehicle Owner</option>
                    <option value="resturentOwner">Resturent Owner</option>
                    <option value="tourGuide">Tour Guide</option>
                    <option value="eventOrganizer">Event Organizer</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.354 7.354a2 2 0 00-2.828 0L10 8.172 7.475 5.646a2 2 0 10-2.828 2.828l3.182 3.182a2 2 0 002.828 0l3.182-3.182a2 2 0 000-2.828z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>
              <div className="mb-9">
                <input
                  placeholder="Repeat Password"
                  type="password"
                  id="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="bordder-[#E9EDF4] w-full text-base rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>
              <div className="mb-10">
                <button
                  type="submit"
                  className=" w-full font-bold text-center hover:bg-gray-600 cursor-pointer rounded-3xl bg-[#41A4FF] py-3 px-5 text-white transition hover:bg-opacity-90"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          {loading2 && <Spinner />}

          <div className="flex flex-col justify-center text-center pb-20">
            <p className="text-base text-[#adadad]">
              Already a member yet?
              <Link
                to="/login"
                className="text-primary hover:underline ms-2 font-bold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
