import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, [token]);

  return (
    <div style={{ background: "#1b1b1f", padding: "20px", borderRadius: "12px" }}>
      <h2 style={{ color: "#22c55e", textAlign: "center", marginBottom: "20px" }}>Manage Users</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #22c55e" }}>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u) => (
              <tr key={u.id} style={{ borderBottom: "1px solid #333", textAlign: "center" }}>
                <td>{u.id}</td>
                <td style={{ textTransform: "capitalize" }}>{u.username}</td>
                <td>{u.email}</td>
                <td style={{ color: u.role === "admin" ? "#22c55e" : "#aaa" }}>{u.role}</td>
                <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ padding: "15px", color: "#aaa" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
