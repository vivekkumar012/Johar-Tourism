import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import FeaturesSection from "./components/feature/FeatureSection";
import DestinationsSection from "./components/destination/DestinationsSection ";
import RolesSection from "./components/roles/RoleSection";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/destinations" element={<DestinationsSection />} />
        <Route path="/roles" element={<RolesSection />} />
      </Routes> 
      <Toaster />
    </div>
  );
}

export default App;
