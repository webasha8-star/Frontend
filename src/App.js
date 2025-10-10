// // import React, { useState, useEffect } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// // } from "react-router-dom";
// // import DashboardPage from "./pages/DashboardPage";
// // import LatestAnnouncement from "./pages/LatestAnnouncement";
// // import FeaturedChallenges from "./pages/FeaturedChallenges";
// // import OSCPStyleExercise from "./pages/OSCPStyleExercise";
// // import WebExploitation from "./pages/WebExploitation";
// // import OSCP_Certificate from "./pages/OSCP_Certificate";
// // import EpicGallery from "./pages/EpicGallery";
// // import OurFAQ from "./pages/OurFAQ";
// // import Testimonial from "./pages/Testimonial";
// // import Lab1 from "./pages/labs/1";
// // import Lab2 from "./pages/labs/2";
// // import Lab3 from "./pages/labs/3";
// // import Lab4 from "./pages/labs/4";
// // import Lab5 from "./pages/labs/5";
// // import Lab6 from "./pages/labs/6";
// // import Lab7 from "./pages/labs/7";
// // import Lab8 from "./pages/labs/8";
// // import Lab9 from "./pages/labs/9";
// // import Lab10 from "./pages/labs/10";
// // import Lab11 from "./pages/labs/11";
// // import Lab12 from "./pages/labs/12";
// // import Lab13 from "./pages/labs/13";
// // import Lab14 from "./pages/labs/14";
// // import Lab15 from "./pages/labs/15";
// // import UpcomingChallenges from "./pages/UpcomingChallenges";
// // import HistoricalChallenges from "./pages/HistoricalChallenges";
// // import Leaderboard from "./pages/Leaderboard";
// // import TrainingPath from "./pages/TrainingPath";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Levels from "./pages/Levels";
// // import "./App.css";
// // import ScrollToTop from "./ScrollToTop";
// // import { AuthProvider } from "./AuthContext";

// // function App() {
// //   return (
// //     <AuthProvider>

// //       <Router>
// //         <ScrollToTop />
// //         <Routes>
// //           <Route path="/" element={<DashboardPage />} />
// //           <Route path="/home-2" element={<LatestAnnouncement />} />
// //           <Route path="/home-3" element={<FeaturedChallenges />} />
// //           <Route path="/oscp-style-exercise" element={<OSCPStyleExercise />} />
// //           <Route path="/web-exploitation" element={<WebExploitation />} />
// //           <Route path="/OSCP_Certificate" element={<OSCP_Certificate />} />
// //           <Route path="/upcoming-challenges" element={<UpcomingChallenges />} />
// //           <Route path="/historical-challenges" element={<HistoricalChallenges />} />
// //           <Route path="/leaderboard" element={<Leaderboard />} />
// //           <Route path="/training-path" element={<TrainingPath />} />
// //           <Route path="/home-4" element={<Navigate to="/lab" replace />} />
// //           <Route path="/gallery" element={<EpicGallery />} />
// //           <Route path="/faq" element={<OurFAQ />} />
// //           <Route path="/testimonial" element={<Testimonial />} />
// //           {/* Lab routes */}
// //           <Route path="/labs/1" element={<Lab1 />} />
// //           <Route path="/labs/2" element={<Lab2 />} />
// //           <Route path="/labs/3" element={<Lab3 />} />
// //           <Route path="/labs/4" element={<Lab4 />} />
// //           <Route path="/labs/5" element={<Lab5 />} />
// //           <Route path="/labs/6" element={<Lab6 />} />
// //           <Route path="/labs/7" element={<Lab7 />} />
// //           <Route path="/labs/8" element={<Lab8 />} />
// //           <Route path="/labs/9" element={<Lab9 />} />
// //           <Route path="/labs/10" element={<Lab10 />} />
// //           <Route path="/labs/11" element={<Lab11 />} />
// //           <Route path="/labs/12" element={<Lab12 />} />
// //           <Route path="/labs/13" element={<Lab13 />} />
// //           <Route path="/labs/14" element={<Lab14 />} />
// //           <Route path="/labs/15" element={<Lab15 />} />
// //           <Route path="/labs/1/module/:sectionId" element={<Lab1 />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //           <Route path="/levels" element={<Levels />} />
// //           {/* Add more routes for other pages here */}
// //         </Routes>
// //       </Router>
// //     </AuthProvider>
// //   );
// // }

// // export default App;



// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage";
// import LatestAnnouncement from "./pages/LatestAnnouncement";
// import FeaturedChallenges from "./pages/FeaturedChallenges";
// import OSCPStyleExercise from "./pages/OSCPStyleExercise";
// import WebExploitation from "./pages/WebExploitation";
// import OSCP_Certificate from "./pages/OSCP_Certificate";



// import Profile from "./pages/Profile";

// import EpicGallery from "./pages/EpicGallery";
// import OurFAQ from "./pages/OurFAQ";
// import Testimonial from "./pages/Testimonial";
// import Lab1 from "./pages/labs/1";
// import Lab2 from "./pages/labs/2";
// import Lab3 from "./pages/labs/3";
// import Lab4 from "./pages/labs/4";
// import Lab5 from "./pages/labs/5";
// import Lab6 from "./pages/labs/6";
// import Lab7 from "./pages/labs/7";
// import Lab8 from "./pages/labs/8";
// import Lab9 from "./pages/labs/9";
// import Lab10 from "./pages/labs/10";
// import Lab11 from "./pages/labs/11";
// import Lab12 from "./pages/labs/12";
// import Lab13 from "./pages/labs/13";
// import Lab14 from "./pages/labs/14";
// import Lab15 from "./pages/labs/15";
// import UpcomingChallenges from "./pages/UpcomingChallenges";
// import HistoricalChallenges from "./pages/HistoricalChallenges";
// import Leaderboard from "./pages/Leaderboard";
// import TrainingPath from "./pages/TrainingPath";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Levels from "./pages/Levels";
// import AdminDashboard from "./pages/AdminDashboard"; // 👈 added this
// import "./App.css";
// import ScrollToTop from "./ScrollToTop";
// import { AuthProvider } from "./AuthContext";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <ScrollToTop />
//         <Routes>
//           {/* Main Dashboard */}
//           <Route path="/" element={<DashboardPage />} />

//           {/* Other pages */}
//           <Route path="/home-2" element={<LatestAnnouncement />} />
//           <Route path="/home-3" element={<FeaturedChallenges />} />
//           <Route path="/oscp-style-exercise" element={<OSCPStyleExercise />} />
//           <Route path="/web-exploitation" element={<WebExploitation />} />
//           <Route path="/OSCP_Certificate" element={<OSCP_Certificate />} />
//           <Route path="/upcoming-challenges" element={<UpcomingChallenges />} />
//           <Route path="/historical-challenges" element={<HistoricalChallenges />} />
//           <Route path="/leaderboard" element={<Leaderboard />} />
//           <Route path="/training-path" element={<TrainingPath />} />
//           <Route path="/home-4" element={<Navigate to="/lab" replace />} />
//           <Route path="/gallery" element={<EpicGallery />} />
//           <Route path="/faq" element={<OurFAQ />} />
//           <Route path="/testimonial" element={<Testimonial />} />

//           {/* Labs */}
// z          <Route path="/labs/2" element={<Lab2 />} />
//           <Route path="/labs/3" element={<Lab3 />} />
//           <Route path="/labs/4" element={<Lab4 />} />
//           <Route path="/labs/5" element={<Lab5 />} />
//           <Route path="/labs/6" element={<Lab6 />} />
//           <Route path="/labs/7" element={<Lab7 />} />
//           <Route path="/labs/8" element={<Lab8 />} />
//           <Route path="/labs/9" element={<Lab9 />} />
//           <Route path="/labs/10" element={<Lab10 />} />
//           <Route path="/labs/11" element={<Lab11 />} />
//           <Route path="/labs/12" element={<Lab12 />} />
//           <Route path="/labs/13" element={<Lab13 />} />
//           <Route path="/labs/14" element={<Lab14 />} />
//           <Route path="/labs/15" element={<Lab15 />} />
//           <Route path="/labs/1/module/:sectionId" element={<Lab1 />} />

//           {/* Auth */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/levels" element={<Levels />} />

//           {/* ✅ Admin Routes */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           {/* (Optional) If you want a dedicated admin login page */}
//           {/* Profile Route */}
// <Route path="/profile" element={<Profile />} />

//           <Route path="/admin-login" element={<Login />} />

//           {/* Catch-all (optional) */}
//           {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import LatestAnnouncement from "./pages/LatestAnnouncement";
import FeaturedChallenges from "./pages/FeaturedChallenges";
import OSCPStyleExercise from "./pages/OSCPStyleExercise";
import WebExploitation from "./pages/WebExploitation";
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
          <Route path="/home-2" element={<LatestAnnouncement />} />
          <Route path="/home-3" element={<FeaturedChallenges />} />
          <Route path="/oscp-style-exercise" element={<OSCPStyleExercise />} />
          <Route path="/web-exploitation" element={<WebExploitation />} />
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
