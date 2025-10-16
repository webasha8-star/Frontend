import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

const Announcements = () => {
  const { token } = useContext(AuthContext);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [loading, setLoading] = useState(true);

  const styles = {
    container: {
      background: "#0f1115",
      color: "white",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      color: "#22c55e",
      fontSize: "2rem",
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "25px",
    },
    form: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      marginBottom: "30px",
    },
    input: {
      width: "60%",
      padding: "12px",
      background: "#1f2937",
      border: "1px solid #22c55e",
      borderRadius: "6px",
      color: "white",
    },
    button: {
      background: "#22c55e",
      color: "#000",
      border: "none",
      borderRadius: "6px",
      padding: "10px 18px",
      cursor: "pointer",
      fontWeight: "600",
    },
    list: {
      background: "#1f2937",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      maxWidth: "800px",
      margin: "0 auto",
    },
    item: {
      borderBottom: "1px solid #333",
      padding: "12px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: { color: "#d1d5db" },
    date: { color: "#9ca3af", fontSize: "0.85rem" },
    deleteBtn: {
      background: "#ff3b3b",
      border: "none",
      color: "#fff",
      borderRadius: "4px",
      padding: "6px 10px",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/announcements", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnnouncements(res.data);
    } catch (err) {
      console.error("Error fetching announcements:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleAddAnnouncement = async () => {
    if (!newAnnouncement.trim()) return alert("Enter announcement text");

    try {
      await axios.post(
        "http://localhost:5000/api/announcements",
        { message: newAnnouncement },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewAnnouncement("");
      fetchAnnouncements();
      alert("✅ Announcement added!");
    } catch (err) {
      console.error("Error adding announcement:", err);
      alert("Failed to add announcement");
    }
  };

  const deleteAnnouncement = async (id) => {
    if (!window.confirm("Delete this announcement?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/announcements/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAnnouncements();
    } catch (err) {
      console.error("Error deleting announcement:", err);
      alert("Failed to delete");
    }
  };

  if (loading)
    return (
      <h2 style={{ textAlign: "center", color: "#aaa", marginTop: "50px" }}>
        Loading announcements...
      </h2>
    );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📢 Announcements</h1>

      {/* Create New Announcement */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter new announcement..."
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddAnnouncement} style={styles.button}>
          Post
        </button>
      </div>

      {/* List of Announcements */}
      <div style={styles.list}>
        {announcements.length > 0 ? (
          announcements.map((a) => (
            <div key={a.id} style={styles.item}>
              <div>
                <p style={styles.text}>{a.message}</p>
                <p style={styles.date}>
                  Posted on {new Date(a.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => deleteAnnouncement(a.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "#aaa", textAlign: "center" }}>
            No announcements yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Announcements;
