// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../AuthContext";
// import { Users, FlaskConical, FolderKanban, Bell } from "lucide-react";
// import { Bar, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

// const AdminDashboard = () => {
//   const { token } = useContext(AuthContext);
//   const [stats, setStats] = useState({
//     users: 0,
//     admins: 0,
//     labs: 18,
//     challenges: 32,
//     messages: 8,
//   });
//   const [loading, setLoading] = useState(true);

//   // Fetch users count dynamically from backend
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/users/admin/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const users = res.data;

//         // Normalize roles to uppercase for reliable comparison
//         const adminCount = users.filter((u) => u.role?.toUpperCase() === "ADMIN").length;
//         const normalUserCount = users.filter((u) => u.role?.toUpperCase() !== "ADMIN").length;

//         setStats((prev) => ({
//           ...prev,
//           users: normalUserCount, // ✅ only non-admin users
//           admins: adminCount,
//         }));
//       } catch (err) {
//         console.error("Error fetching user stats:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, [token]);

//   // --- Chart Data ---
//   const barData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Labs Completed",
//         data: [3, 5, 2, 6, 4, 7, 5],
//         backgroundColor: "#22c55e",
//         borderRadius: 8,
//       },
//     ],
//   };

//   const doughnutData = {
//     labels: ["Admins", "Users"],
//     datasets: [
//       {
//         data: [stats.admins, stats.users],
//         backgroundColor: ["#22c55e", "#1e293b"],
//         borderColor: "#22c55e",
//       },
//     ],
//   };

//   // --- Inline Styles ---
//   const styles = {
//     container: {
//       backgroundColor: "#0f1115",
//       color: "white",
//       minHeight: "100vh",
//       padding: "40px 24px",
//       fontFamily: "Arial, sans-serif",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "50px",
//     },
//     title: {
//       color: "#22c55e",
//       fontSize: "2.2rem",
//       fontWeight: "bold",
//     },
//     subtitle: {
//       color: "#9ca3af",
//       marginTop: "10px",
//     },
//     cardGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "24px",
//       marginBottom: "50px",
//     },
//     card: {
//       backgroundColor: "#1f2937",
//       borderRadius: "16px",
//       padding: "24px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       transition: "background-color 0.3s",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//     },
//     cardTitle: { color: "#9ca3af", fontSize: "14px", marginBottom: "6px" },
//     cardValue: { color: "#22c55e", fontSize: "28px", fontWeight: "bold" },
//     chartGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//       gap: "32px",
//       marginBottom: "50px",
//     },
//     chartBox: {
//       backgroundColor: "#1f2937",
//       borderRadius: "16px",
//       padding: "24px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//     },
//     chartTitle: {
//       fontSize: "18px",
//       color: "#d1d5db",
//       marginBottom: "12px",
//       fontWeight: 600,
//       textAlign: "center",
//     },
//   };

//   // --- Loading State ---
//   if (loading) {
//     return (
//       <div style={{ textAlign: "center", padding: "50px", color: "#aaa" }}>
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>Admin Dashboard</h1>
//         <p style={styles.subtitle}>
//           Welcome, Admin! Here's an overview of your platform activity.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div style={styles.cardGrid}>
//         <div style={styles.card}>
//           <div>
//             <p style={styles.cardTitle}>Total Users</p>
//             <h2 style={styles.cardValue}>{stats.users}</h2>
//           </div>
//           <Users size={40} color="#22c55e" />
//         </div>

//         <div style={styles.card}>
//           <div>
//             <p style={styles.cardTitle}>Admins</p>
//             <h2 style={styles.cardValue}>{stats.admins}</h2>
//           </div>
//           <Users size={40} color="#22c55e" />
//         </div>

//         <div style={styles.card}>
//           <div>
//             <p style={styles.cardTitle}>Active Labs</p>
//             <h2 style={styles.cardValue}>{stats.labs}</h2>
//           </div>
//           <FlaskConical size={40} color="#22c55e" />
//         </div>

//         <div style={styles.card}>
//           <div>
//             <p style={styles.cardTitle}>Challenges</p>
//             <h2 style={styles.cardValue}>{stats.challenges}</h2>
//           </div>
//           <FolderKanban size={40} color="#22c55e" />
//         </div>
//       </div>

//       {/* Charts */}
//       <div style={styles.chartGrid}>
//         <div style={styles.chartBox}>
//           <h2 style={styles.chartTitle}>Weekly Lab Completions</h2>
//           <Bar data={barData} />
//         </div>

//         <div style={styles.chartBox}>
//           <h2 style={styles.chartTitle}>User Role Distribution</h2>
//           <div style={{ width: "240px", margin: "0 auto" }}>
//             <Doughnut data={doughnutData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

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
        const users = userRes.data;

        const adminCount = users.filter((u) => u.role?.toUpperCase() === "ADMIN").length;
        const normalUserCount = users.filter((u) => u.role?.toUpperCase() !== "ADMIN").length;

        // ✅ Fetch Labs (using same logic as ManageLabs)
        const labsRes = await axios.get("http://localhost:5000/api/labs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const labs = labsRes.data || [];
        const labCount = Array.isArray(labs) ? labs.length : 0;

        // ✅ Fetch Challenges (optional, if available)
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

        // ✅ Update dashboard stats
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

  // --- Chart Data ---
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

  // --- Styles ---
  const styles = {
    container: {
      backgroundColor: "#0f1115",
      color: "white",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "50px",
    },
    title: {
      color: "#22c55e",
      fontSize: "2.2rem",
      fontWeight: "bold",
    },
    subtitle: {
      color: "#9ca3af",
      marginTop: "10px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
      marginBottom: "50px",
    },
    card: {
      backgroundColor: "#1f2937",
      borderRadius: "16px",
      padding: "24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "background-color 0.3s",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    cardTitle: { color: "#9ca3af", fontSize: "14px", marginBottom: "6px" },
    cardValue: { color: "#22c55e", fontSize: "28px", fontWeight: "bold" },
    chartGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "32px",
      marginBottom: "50px",
    },
    chartBox: {
      backgroundColor: "#1f2937",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    chartTitle: {
      fontSize: "18px",
      color: "#d1d5db",
      marginBottom: "12px",
      fontWeight: 600,
      textAlign: "center",
    },
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#aaa" }}>
        Loading dashboard...
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <p style={styles.subtitle}>
          Welcome, Admin! Here's an overview of your platform activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <div>
            <p style={styles.cardTitle}>Total Users</p>
            <h2 style={styles.cardValue}>{stats.users}</h2>
          </div>
          <Users size={40} color="#22c55e" />
        </div>

        <div style={styles.card}>
          <div>
            <p style={styles.cardTitle}>Admins</p>
            <h2 style={styles.cardValue}>{stats.admins}</h2>
          </div>
          <Users size={40} color="#22c55e" />
        </div>

        <div style={styles.card}>
          <div>
            <p style={styles.cardTitle}>Active Labs</p>
            <h2 style={styles.cardValue}>{stats.labs}</h2>
          </div>
          <FlaskConical size={40} color="#22c55e" />
        </div>

        <div style={styles.card}>
          <div>
            <p style={styles.cardTitle}>Challenges</p>
            <h2 style={styles.cardValue}>{stats.challenges}</h2>
          </div>
          <FolderKanban size={40} color="#22c55e" />
        </div>
      </div>

      {/* Charts */}
      <div style={styles.chartGrid}>
        <div style={styles.chartBox}>
          <h2 style={styles.chartTitle}>Weekly Lab Completions</h2>
          <Bar data={barData} />
        </div>

        <div style={styles.chartBox}>
          <h2 style={styles.chartTitle}>User Role Distribution</h2>
          <div style={{ width: "240px", margin: "0 auto" }}>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
