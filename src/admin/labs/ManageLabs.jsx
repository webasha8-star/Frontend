import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const ManageLabs = () => {
  const { token } = useContext(AuthContext);
  const [labs, setLabs] = useState([]);
  const [expandedLab, setExpandedLab] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/labs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLabs(res.data);
    } catch (error) {
      console.error("❌ Error fetching labs:", error);
      alert("Failed to load labs");
    }
  };

  const deleteLab = async (labId) => {
    if (!window.confirm("Delete this Lab?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/labs/${labId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Lab deleted successfully");
      fetchLabs();
    } catch {
      alert("Failed to delete lab — check admin authorization.");
    }
  };

  const deleteModule = async (moduleId) => {
    if (!window.confirm("Delete this Module?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/labs/modules/${moduleId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Module deleted successfully");
      fetchLabs();
    } catch {
      alert("Failed to delete module — check admin authorization.");
    }
  };

  const deleteQuestion = async (questionId) => {
    if (!window.confirm("Delete this Question?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/labs/questions/${questionId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Question deleted successfully");
      fetchLabs();
    } catch {
      alert("Failed to delete question — check admin authorization.");
    }
  };

  return (
    <div
      style={{
        background: "#1b1b1f",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ textAlign: "right", marginBottom: "15px" }}>
        <button
          onClick={() => navigate("/admin/labs/create")}
          style={createBtn}
        >
          ➕ Create New Lab
        </button>
      </div>

      <h2 style={{ color: "#22c55e", textAlign: "center" }}>Manage Labs</h2>

      {labs.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa" }}>No labs found.</p>
      ) : (
        labs.map((lab) => (
          <div key={lab.id} style={labBox}>
            <div
              onClick={() =>
                setExpandedLab(expandedLab === lab.id ? null : lab.id)
              }
              style={labHeader}
            >
              <h3 style={{ color: "#22c55e" }}>{lab.title}</h3>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/admin/labs/edit/${lab.id}`);
                  }}
                  style={editBtn}
                >
                  ✏️ Edit Lab
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteLab(lab.id);
                  }}
                  style={deleteBtn}
                >
                  Delete Lab
                </button>
              </div>
            </div>

            {expandedLab === lab.id && (
              <div style={{ marginTop: "10px" }}>
                <p style={{ color: "#ccc" }}>{lab.summary}</p>
                {lab.modules.map((mod) => (
                  <div key={mod.id} style={moduleBox}>
                    <div
                      onClick={() =>
                        setExpandedModule(
                          expandedModule === mod.id ? null : mod.id
                        )
                      }
                      style={moduleHeader}
                    >
                      <h4 style={{ color: "#39FF14" }}>📘 {mod.title}</h4>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteModule(mod.id);
                        }}
                        style={deleteBtn}
                      >
                        Delete Module
                      </button>
                    </div>

                    {expandedModule === mod.id && (
                      <div style={{ marginTop: "10px" }}>
                        {mod.questions.map((q) => (
                          <div key={q.id} style={questionBox}>
                            <p style={{ color: "#fff" }}>
                              <strong>Q:</strong> {q.text}
                            </p>
                            <ul>
                              {Array.isArray(q.options) &&
                                q.options.map((opt, i) => (
                                  <li key={i} style={{ color: "#aaa" }}>
                                    {opt}
                                  </li>
                                ))}
                            </ul>
                            <p style={{ color: "#22c55e" }}>
                              ✅ Correct: {q.answer}
                            </p>
                            <button
                              onClick={() => deleteQuestion(q.id)}
                              style={questionDeleteBtn}
                            >
                              Delete Question
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ManageLabs;

// 🔸 Styles
const createBtn = {
  background: "#22c55e",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  padding: "10px 18px",
  cursor: "pointer",
  fontWeight: "600",
};
const editBtn = {
  background: "#3dff88",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  padding: "6px 12px",
  cursor: "pointer",
  fontWeight: "600",
};
const deleteBtn = {
  background: "#ff3b3b",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "6px 12px",
  cursor: "pointer",
  fontWeight: "600",
};
const labBox = {
  border: "1px solid #333",
  borderRadius: "8px",
  marginBottom: "20px",
  padding: "15px",
  background: "#181c2a",
};
const labHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
};
const moduleBox = {
  border: "1px solid #333",
  borderRadius: "8px",
  marginTop: "10px",
  padding: "10px",
  background: "#0f0f10",
};
const moduleHeader = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
};
const questionBox = {
  borderBottom: "1px solid #333",
  padding: "8px 0",
  position: "relative",
};
const questionDeleteBtn = {
  position: "absolute",
  right: 0,
  top: "5px",
  fontSize: "12px",
  background: "#ff3b3b",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  cursor: "pointer",
};
