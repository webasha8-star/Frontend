import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import OSCPStyleExercise from "./pages/OSCPStyleExercise";
import OSCP_Certificate from "./pages/OSCP_Certificate";

import Profile from "./pages/Profile";
import EpicGallery from "./pages/EpicGallery";
import OurFAQ from "./pages/OurFAQ";
import Testimonial from "./pages/Testimonial";
import UpcomingChallenges from "./pages/UpcomingChallenges";
import HistoricalChallenges from "./pages/HistoricalChallenges";
import Leaderboard from "./pages/Leaderboard";
import TrainingPath from "./pages/TrainingPath";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Levels from "./pages/Levels";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./ScrollToTop";
import { AuthProvider } from "./AuthContext";
import "./App.css";

// ✅ Dynamic Lab Page (new component)
import LabPage from "./pages/LabPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* 🏠 Main Dashboard */}
          <Route path="/" element={<DashboardPage />} />

          {/* 🔥 Dynamic Labs (replaces 1–15.jsx) */}
          <Route path="/labs/:id" element={<LabPage />} />

          {/* 🧩 Other pages */}
          <Route path="/oscp-style-exercise" element={<OSCPStyleExercise />} />
          <Route path="/OSCP_Certificate" element={<OSCP_Certificate />} />
          <Route path="/upcoming-challenges" element={<UpcomingChallenges />} />
          <Route path="/historical-challenges" element={<HistoricalChallenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/training-path" element={<TrainingPath />} />
          <Route path="/gallery" element={<EpicGallery />} />
          <Route path="/faq" element={<OurFAQ />} />
          <Route path="/testimonial" element={<Testimonial />} />

          {/* 🔐 Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/levels" element={<Levels />} />

          {/* 👑 Admin */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<Login />} />

          {/* 👤 Profile */}
          <Route path="/profile" element={<Profile />} />

          {/* 🚧 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
