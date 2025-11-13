import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import Leaderboard from "./pages/Leaderboard";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
// import DonorDashboard from "./pages/Dashboard/DonorDashboard";
// import ReceiverDashboard from "./pages/Dashboard/ReceiverDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16"> {/* 👈 Header ke niche content shift karne ke liye */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ✅ Donor aur Receiver Dashboard (abhi ke liye without protected route) */}
          {/* <Route path="/dashboard/donor" element={<DonorDashboard />} />
          <Route path="/dashboard/receiver" element={<ReceiverDashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;