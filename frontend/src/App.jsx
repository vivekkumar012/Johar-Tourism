import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import { Toaster } from "react-hot-toast"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
