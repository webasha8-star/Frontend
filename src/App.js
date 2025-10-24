// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import NotificationPage from "./pages/NotificationPage";
// import DashboardPage from "./pages/DashboardPage";
// import OSCPStyleExercise from "./pages/OSCPStyleExercise";
// import OSCP_Certificate from "./pages/OSCP_Certificate";
// import Profile from "./pages/Profile";
// import EpicGallery from "./pages/EpicGallery";
// import OurFAQ from "./pages/OurFAQ";
// import Testimonial from "./pages/Testimonial";
// import UpcomingChallenges from "./pages/UpcomingChallenges";
// import HistoricalChallenges from "./pages/HistoricalChallenges";
// import Leaderboard from "./pages/Leaderboard";
// import TrainingPath from "./pages/TrainingPath";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Levels from "./pages/Levels";
// import ScrollToTop from "./ScrollToTop";
// import { AuthProvider } from "./AuthContext";
// import "./App.css";

// // ✅ Dynamic Lab Page
// import LabPage from "./pages/LabPage";

// // ✅ Modular Admin Panel Imports
// import AdminLayout from "./admin/AdminLayout";
// import AdminDashboard from "./admin/AdminDashboard";
// import ManageUsers from "./admin/users/ManageUsers";
// import ManageLabs from "./admin/labs/ManageLabs";
// import CreateLab from "./admin/labs/CreateLab";
// import UpcomingChallengesAdmin from "./admin/challenges/UpcomingChallenges";
// import HistoricalChallengesAdmin from "./admin/challenges/HistoricalChallenges";
// import AnalyticsDashboard from "./admin/analytics/AnalyticsDashboard";
// import EditLab from "./admin/labs/EditLab";
// import AdminSubmissions from "./admin/submissions/AdminSubmissions";
// import Announcements from "./admin/communication/Announcements";
// import SystemSettings from "./admin/settings/SystemSettings";

// function App() {
//   return (
//     <AuthProvider>
//       <NotificationProvider>
//       <Router>
//         <ScrollToTop />

//         <Routes>

//           {/* 🏠 User-Facing Routes */}
//           <Route path="/" element={<DashboardPage />} />
//           <Route path="/labs/:id" element={<LabPage />} />
//           <Route path="/oscp-style-exercise" element={<OSCPStyleExercise />} />
//           <Route path="/OSCP_Certificate" element={<OSCP_Certificate />} />
//           <Route path="/upcoming-challenges" element={<UpcomingChallenges />} />
//           <Route path="/historical-challenges" element={<HistoricalChallenges />} />
//           <Route path="/leaderboard" element={<Leaderboard />} />
//           <Route path="/notifications" element={<NotificationPage />} />
//           <Route path="/training-path" element={<TrainingPath />} />
//           <Route path="/gallery" element={<EpicGallery />} />
//           <Route path="/faq" element={<OurFAQ />} />
//           <Route path="/testimonial" element={<Testimonial />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/levels" element={<Levels />} />
//           <Route path="/profile" element={<Profile />} />

//           {/* 👑 Modular Admin Panel */}
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route index element={<AdminDashboard />} />
//             <Route path="submissions" element={<AdminSubmissions />} />
//             <Route path="users" element={<ManageUsers />} />
//             <Route path="labs" element={<ManageLabs />} />
//             <Route path="labs/create" element={<CreateLab />} />
//             <Route path="labs/edit/:id" element={<EditLab />} />
//             <Route path="challenges" element={<UpcomingChallengesAdmin />} />
//             <Route path="challenges/history" element={<HistoricalChallengesAdmin />} />
//             <Route path="analytics" element={<AnalyticsDashboard />} />
//             <Route path="communication" element={<Announcements />} />
//             <Route path="settings" element={<SystemSettings />} />
//           </Route>

//           {/* Legacy Redirects (Old admin paths) */}
//           <Route path="/admin-dashboard" element={<Navigate to="/admin" replace />} />
//           <Route path="/admin-login" element={<Login />} />

//           {/* 🚧 Catch-All Redirect */}
//           <Route path="*" element={<Navigate to="/" replace />} />

//         </Routes>
//       </Router>
//       </NotificationProvider>
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
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./AuthContext";
import { AnnouncementProvider } from "./context/AnnouncementContext";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

// ✅ User & Public Pages
import NotificationPage from "./pages/NotificationPage";
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
import LabPage from "./pages/LabPage";

// ✅ Admin Imports
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ManageUsers from "./admin/users/ManageUsers";
import ManageLabs from "./admin/labs/ManageLabs";
import CreateLab from "./admin/labs/CreateLab";
import EditLab from "./admin/labs/EditLab";
import AdminSubmissions from "./admin/submissions/AdminSubmissions";
import UpcomingChallengesAdmin from "./admin/challenges/UpcomingChallenges";
import HistoricalChallengesAdmin from "./admin/challenges/HistoricalChallenges";
import AnalyticsDashboard from "./admin/analytics/AnalyticsDashboard";
import Announcements from "./admin/communication/Announcements";
import SystemSettings from "./admin/settings/SystemSettings";

function App() {
  return (
    <AuthProvider>
      <AnnouncementProvider>
        <Router>
          <ScrollToTop />
          <Toaster position="bottom-right" />

          <Routes>
            {/* 🏠 User Routes */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/labs/:id" element={<LabPage />} />
            <Route path="/oscp-style-exercise" element={<OSCPStyleExercise />} />
            <Route path="/OSCP_Certificate" element={<OSCP_Certificate />} />
            <Route path="/upcoming-challenges" element={<UpcomingChallenges />} />
            <Route path="/historical-challenges" element={<HistoricalChallenges />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/training-path" element={<TrainingPath />} />
            <Route path="/gallery" element={<EpicGallery />} />
            <Route path="/faq" element={<OurFAQ />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/profile" element={<Profile />} />

            {/* 👑 Admin Panel */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="submissions" element={<AdminSubmissions />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="labs" element={<ManageLabs />} />
              <Route path="labs/create" element={<CreateLab />} />
              <Route path="labs/edit/:id" element={<EditLab />} />
              <Route path="challenges" element={<UpcomingChallengesAdmin />} />
              <Route path="challenges/history" element={<HistoricalChallengesAdmin />} />
              <Route path="analytics" element={<AnalyticsDashboard />} />
              <Route path="communication" element={<Announcements />} />
              <Route path="settings" element={<SystemSettings />} />
            </Route>

            {/* Redirects */}
            <Route path="/admin-dashboard" element={<Navigate to="/admin" replace />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AnnouncementProvider>
    </AuthProvider>
  );
}

export default App;
