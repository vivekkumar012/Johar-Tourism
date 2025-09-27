import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast"
import Login from "./pages/Login"
import FeaturesSection from "./components/feature/FeatureSection";
import DestinationsSection from "./components/destination/DestinationsSection ";
import RolesSection from "./components/roles/RoleSection";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/destinations" element={<DestinationsSection />} />
        <Route path="/roles" element={<RolesSection />} />
      </Routes> 
      <Toaster />
    </div>
  );
}

export default App;
