import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

const AdminSubmissions = () => {
  const { token } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/submissions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubmissions(res.data);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [token]);

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
    table: {
      width: "100%",
      borderCollapse: "collapse",
      background: "#1f2937",
      borderRadius: "10px",
      overflow: "hidden",
    },
    th: {
      backgroundColor: "#22c55e20",
      color: "#22c55e",
      padding: "12px",
      textAlign: "center",
      borderBottom: "2px solid #22c55e",
    },
    td: {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #333",
    },
    button: {
      background: "#22c55e",
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: "6px 12px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      background: "#1f2937",
      padding: "25px",
      borderRadius: "12px",
      width: "80%",
      maxWidth: "600px",
      color: "white",
      position: "relative",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "15px",
      background: "none",
      border: "none",
      color: "#aaa",
      fontSize: "20px",
      cursor: "pointer",
    },
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#aaa" }}>
        Loading submissions...
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Lab Submissions</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Lab</th>
            <th style={styles.th}>Submitted On</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.length > 0 ? (
            submissions.map((sub) => (
              <tr key={sub.id}>
                <td style={styles.td}>{sub.id}</td>
                <td style={styles.td}>{sub.user?.username || "N/A"}</td>
                <td style={styles.td}>{sub.lab?.title || "N/A"}</td>
                <td style={styles.td}>
                  {new Date(sub.submittedAt).toLocaleDateString()}
                </td>
                <td
                  style={{
                    ...styles.td,
                    color:
                      sub.status === "APPROVED"
                        ? "#22c55e"
                        : sub.status === "REJECTED"
                        ? "red"
                        : "#facc15",
                  }}
                >
                  {sub.status}
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => setSelectedAnswer(sub)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={styles.td} colSpan="6">
                No submissions found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedAnswer && (
        <div style={styles.modal} onClick={() => setSelectedAnswer(null)}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeButton}
              onClick={() => setSelectedAnswer(null)}
            >
              ✖
            </button>
            <h2 style={{ color: "#22c55e", marginBottom: "10px" }}>
              {selectedAnswer.lab?.title}
            </h2>
            <p style={{ marginBottom: "10px" }}>
              <strong>User:</strong> {selectedAnswer.user?.username}
            </p>
            <p style={{ marginBottom: "15px" }}>
              <strong>Submitted On:</strong>{" "}
              {new Date(selectedAnswer.submittedAt).toLocaleString()}
            </p>
            <pre
              style={{
                background: "#111827",
                padding: "15px",
                borderRadius: "8px",
                color: "#9ca3af",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {selectedAnswer.answer}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSubmissions;
