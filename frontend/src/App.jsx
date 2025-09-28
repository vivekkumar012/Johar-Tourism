import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import FeaturesSection from "./components/feature/FeatureSection";
import DestinationsSection from "./components/destination/DestinationsSection ";
import RolesSection from "./components/roles/RoleSection";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import TouristDashboard from "./components/tourist/TouristDashBoard";
import GuideDashboard from "./pages/GuideDashBoard";
import ArtisanDashboard from "./pages/ArtisanDashboard ";
import HomestayDashboard from "./pages/HomestayDashboard ";
import TransportDashboard from "./pages/TransportDashboard ";
import OfficialDashboard from "./pages/OfficialDashboard ";
import EventDashboard from "./pages/EventDashboard ";

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

        <Route path="/dashboard/tourist" element={<TouristDashboard />} />
        <Route path="/dashboard/guide" element={<GuideDashboard />} />
        <Route path="/dashboard/artisan" element={<ArtisanDashboard />} />
        <Route path="/dashboard/homestay" element={<HomestayDashboard />} />
        <Route path="/dashboard/transport" element={<TransportDashboard />} />
        <Route path="/dashboard/official" element={<OfficialDashboard />} />
        <Route path="/dashboard/event" element={<EventDashboard />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
