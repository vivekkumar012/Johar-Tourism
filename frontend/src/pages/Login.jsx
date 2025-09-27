import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import backgroundImage from "../assets/bg.jpg";
import Spinner from "../components/spinner/LoadingSpinner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const Login = () => {
  const [loading2, setLoading2] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
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
            <h2 className="text-5xl font-bold">SIGN IN</h2>
          </div>
          
          <div>
            <form onSubmit={handleSubmit}>
              
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
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                />
              </div>

              <div className="mb-10">
                <button
                  type="submit"
                  className=" w-full font-bold text-center hover:bg-gray-600 cursor-pointer rounded-3xl bg-[#41A4FF] py-3 px-5 text-white transition hover:bg-opacity-90"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          {loading2 && <Spinner />}

          <div className="flex flex-col justify-center text-center pb-20">
            <p className="text-base text-[#adadad]">
              Not Already a member yet?
              <Link
                to="/register"
                className="text-primary hover:underline ms-2 font-bold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
