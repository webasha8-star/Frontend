import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Users, FlaskConical, FolderKanban } from "lucide-react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./AdminDashboard.css"; // 👈 your separate CSS file

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDashboard = () => {
  const { token } = useContext(AuthContext);
  const [stats, setStats] = useState({
    users: 0,
    admins: 0,
    labs: 0,
    challenges: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // ✅ Fetch Users
        const userRes = await axios.get("http://localhost:5000/api/users/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const users = userRes.data || [];

        const adminCount = users.filter((u) => u.role?.toUpperCase() === "ADMIN").length;
        const normalUserCount = users.filter((u) => u.role?.toUpperCase() !== "ADMIN").length;

        // ✅ Fetch Labs
        const labsRes = await axios.get("http://localhost:5000/api/labs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const labs = labsRes.data || [];
        const labCount = Array.isArray(labs) ? labs.length : 0;

        // ✅ Fetch Challenges
        let challengeCount = 0;
        try {
          const challengesRes = await axios.get("http://localhost:5000/api/challenges", {
            headers: { Authorization: `Bearer ${token}` },
          });
          challengeCount = Array.isArray(challengesRes.data)
            ? challengesRes.data.length
            : 0;
        } catch (e) {
          console.warn("⚠️ Challenges endpoint not available — skipping count.");
        }

        setStats({
          users: normalUserCount,
          admins: adminCount,
          labs: labCount,
          challenges: challengeCount,
        });
      } catch (err) {
        console.error("Error fetching admin dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  // --- Dummy Chart Data ---
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Labs Completed",
        data: [3, 5, 2, 6, 4, 7, 5],
        backgroundColor: "#22c55e",
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: ["Admins", "Users"],
    datasets: [
      {
        data: [stats.admins, stats.users],
        backgroundColor: ["#22c55e", "#1e293b"],
        borderColor: "#22c55e",
      },
    ],
  };

  if (loading) {
    return (
      <div className="admin-loading">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <p className="admin-subtitle">
          Welcome, Admin! Here's an overview of your platform activity.
        </p>
      </header>

      {/* Stats Cards */}
      <div className="admin-card-grid">
        <div className="admin-card">
          <div>
            <p className="admin-card-title">Total Users</p>
            <h2 className="admin-card-value">{stats.users}</h2>
          </div>
          <Users size={40} color="#22c55e" />
        </div>

        <div className="admin-card">
          <div>
            <p className="admin-card-title">Admins</p>
            <h2 className="admin-card-value">{stats.admins}</h2>
          </div>
          <Users size={40} color="#22c55e" />
        </div>

        <div className="admin-card">
          <div>
            <p className="admin-card-title">Active Labs</p>
            <h2 className="admin-card-value">{stats.labs}</h2>
          </div>
          <FlaskConical size={40} color="#22c55e" />
        </div>

        <div className="admin-card">
          <div>
            <p className="admin-card-title">Challenges</p>
            <h2 className="admin-card-value">{stats.challenges}</h2>
          </div>
          <FolderKanban size={40} color="#22c55e" />
        </div>
      </div>

      {/* Charts Section */}
      <div className="admin-chart-grid">
        <div className="admin-chart-box">
          <h2 className="admin-chart-title">Weekly Lab Completions</h2>
          <Bar data={barData} />
        </div>

        <div className="admin-chart-box">
          <h2 className="admin-chart-title">User Role Distribution</h2>
          <div className="admin-chart-center">
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
