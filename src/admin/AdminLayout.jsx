import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Users, FilePlus, Folder, BarChart3, Bell, Settings, Home } from "lucide-react";
import Header from "../components/Header";

const AdminLayout = () => {
  const sidebarStyle = {
    width: "240px",
    background: "#1b1b1f",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    minHeight: "calc(100vh - 80px)", // Adjust for header height
    position: "fixed",
    top: "80px", // Push below header
    left: 0,
    bottom: 0,
    overflowY: "auto",
  };

  const linkStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 15px",
    borderRadius: "6px",
    color: isActive ? "#000" : "white",
    background: isActive ? "#22c55e" : "transparent",
    textDecoration: "none",
    fontWeight: "500",
  });

  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Sidebar + Main */}
      <div
        style={{
          display: "flex",
          background: "#0f0f10",
          color: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <h2
            style={{
              color: "#22c55e",
              fontSize: "22px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Admin Panel
          </h2>

          <NavLink to="/admin" end style={({ isActive }) => linkStyle(isActive)}>
            <Home size={18} /> Dashboard
          </NavLink>
           <NavLink to="/admin/analytics" style={({ isActive }) => linkStyle(isActive)}>
            <BarChart3 size={18} /> Analytics
          </NavLink>
          <NavLink to="/admin/users" style={({ isActive }) => linkStyle(isActive)}>
            <Users size={18} /> Users
          </NavLink>
          <NavLink to="/admin/labs" style={({ isActive }) => linkStyle(isActive)}>
            <FilePlus size={18} /> Labs
          </NavLink>
          <NavLink to="/admin/challenges" style={({ isActive }) => linkStyle(isActive)}>
            <Folder size={18} /> Challenges
          </NavLink>
          <NavLink to="/admin/communication" style={({ isActive }) => linkStyle(isActive)}>
            <Bell size={18} /> Communication
          </NavLink>
          <NavLink to="/admin/settings" style={({ isActive }) => linkStyle(isActive)}>
            <Settings size={18} /> Settings
          </NavLink>
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            marginLeft: "240px", // Leave space for sidebar
            padding: "40px",
            paddingTop: "120px", // Push below fixed header
            width: "calc(100% - 240px)",
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
