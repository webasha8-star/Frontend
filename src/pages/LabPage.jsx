import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import "./labs/LabOutline.css";

const LabPage = () => {
  const { id } = useParams();

  // ✅ Correct: useContext must be inside the component
  const { user, token } = useContext(AuthContext);

  const [lab, setLab] = useState(null);
  const [openModule, setOpenModule] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});

  useEffect(() => {
  axios
    .get(`http://localhost:5000/api/labs/${id}`)
    .then((res) => setLab(res.data))
    .catch((err) => console.error("❌ Error fetching lab:", err));
}, [id]);


  const handleInputChange = (moduleId, questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [moduleId]: { ...prev[moduleId], [questionId]: value },
    }));
  };

  const handleSubmitQuestion = async (moduleId, questionId) => {
    const answer = answers[moduleId]?.[questionId];
    if (!answer) return alert("Please select an answer before submitting.");

    try {
      console.log("Submitting:", {
  userId: user?.id,
  answers: [{ questionId: Number(questionId), selected: answer }],
});

await axios.post(
  "http://localhost:5000/api/labs/submit",
  {
    userId: Number(user?.id), // ✅ ensure it's a number
    answers: [{ questionId: Number(questionId), selected: answer }],
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
);


      setSubmittedAnswers((prev) => ({
        ...prev,
        [moduleId]: { ...prev[moduleId], [questionId]: true },
      }));

      alert("✅ Answer submitted successfully!");
    } catch (error) {
      console.error("❌ Error submitting answer:", error);
      if (error.response?.status === 401)
        alert("Session expired. Please log in again.");
      else alert("Failed to submit. Please try again.");
    }
  };

  if (!lab)
    return (
      <Layout>
        <div style={{ color: "#fff", textAlign: "center", marginTop: "200px" }}>
          Loading...
        </div>
      </Layout>
    );

  return (
    <Layout>
      {/* Header Section */}
      <section
        className="lab-info-section"
        style={{
          background: "#232d3f",
          color: "#fff",
          padding: "32px 0",
          textAlign: "center",
          paddingTop: "150px",
        }}
      >
        <div
          className="container"
          style={{ margin: "0 auto", textAlign: "left" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <img
              src="/assets/img/home-1/shop/Easy Level 1.png"
              alt="Lab"
              style={{
                width: 110,
                height: 110,
                marginRight: 32,
                borderRadius: 12,
                background: "#34495e",
                padding: 8,
                objectFit: "contain",
              }}
            />
            <div>
              <h1
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "8px",
                  color: "#39FF14",
                }}
              >
                {lab.title.toUpperCase()}
              </h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  color: "#fff",
                  margin: 0,
                }}
              >
                {lab.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section
        style={{ background: "#181c2a", minHeight: "60vh", padding: "32px 0" }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          {lab.modules.map((mod) => (
            <div
              key={mod.id}
              style={{
                marginBottom: 18,
                borderRadius: 8,
                background: "#232d3f",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <div
                onClick={() =>
                  setOpenModule(openModule === mod.id ? null : mod.id)
                }
                style={{
                  cursor: "pointer",
                  padding: "22px 32px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom:
                    openModule === mod.id ? "1px solid #39FF14" : "none",
                  background: "#232d3f",
                  color: "#39FF14",
                  fontWeight: 700,
                  fontSize: "1.18rem",
                  transition: "background 0.2s",
                }}
              >
                <span
                  style={{ color: "#39FF14", fontWeight: 700, marginRight: 12 }}
                >
                  Module {mod.id}
                </span>
                <span style={{ color: "#fff", fontWeight: 600 }}>
                  {mod.title}
                </span>
                <span style={{ marginLeft: "auto", color: "#fff", fontSize: 22 }}>
                  {openModule === mod.id ? "▲" : "▶"}
                </span>
              </div>

              {openModule === mod.id && (
                <div
                  style={{
                    padding: "24px 32px",
                    color: "#fff",
                    fontSize: "1.08rem",
                    background: "#232d3f",
                  }}
                >
                  {mod.questions.map((q, idx) => (
                    <div
                      key={q.id}
                      style={{
                        marginBottom: 24,
                        background: "#1a1f2e",
                        padding: 16,
                        borderRadius: 8,
                      }}
                    >
                      <label
                        style={{
                          color: "#39FF14",
                          fontWeight: 600,
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
Question {idx + 1}. {q.text}
                      </label>

                      {Array.isArray(q.options) ? (
                        q.options.map((opt, i) => (
                          <label
                            key={i}
                            style={{
                              display: "block",
                              marginBottom: 6,
                              color: "#fff",
                            }}
                          >
                            <input
                              type="radio"
                              name={`q${q.id}`}
                              value={opt}
                              checked={answers[mod.id]?.[q.id] === opt}
                              onChange={() =>
                                handleInputChange(mod.id, q.id, opt)
                              }
                              disabled={submittedAnswers[mod.id]?.[q.id]}
                              style={{ marginRight: 8 }}
                            />
                            {opt}
                          </label>
                        ))
                      ) : (
                        <input
                          type="text"
                          value={answers[mod.id]?.[q.Fid] || ""}
                          onChange={(e) =>
                            handleInputChange(mod.id, q.id, e.target.value)
                          }
                          style={{
                            flex: 1,
                            padding: "10px",
                            borderRadius: 4,
                            border: "1px solid #34495e",
                            background: "#181c2a",
                            color: "#fff",
                          }}
                          placeholder="Answer Here"
                          disabled={submittedAnswers[mod.id]?.[q.id]}
                        />
                      )}

                      <button
                        onClick={() => handleSubmitQuestion(mod.id, q.id)}
                        style={{
                          background: submittedAnswers[mod.id]?.[q.id]
                            ? "#2ecc71"
                            : "#0FA30F",
                          color: "#fff",
                          border: "none",
                          borderRadius: 4,
                          padding: "10px 24px",
                          fontWeight: 700,
                          cursor: "pointer",
                          minWidth: "100px",
                          marginTop: "10px",
                        }}
                        disabled={submittedAnswers[mod.id]?.[q.id]}
                      >
                        {submittedAnswers[mod.id]?.[q.id]
                          ? "Submitted"
                          : "Submit"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div
  style={{
    display: "flex",
    justifyContent: "space-between", // ✅ spread out both buttons
    maxWidth: 1200,
    margin: "24px auto 0",
    padding: "0 24px",
  }}
>
  {/* ✅ Show Previous button only if not the first lab */}
  {parseInt(id) > 1 ? (
    <Link
      to={`/labs/${parseInt(id) - 1}`}
      className="lab-nav-btn"
      style={{
        background: "#0FA30F",
        color: "#fff",
        borderRadius: 4,
        padding: "10px 24px",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      ← Previous Lab
    </Link>
  ) : (
    <div /> // keeps spacing balanced when no previous lab
  )}

  {/* ✅ Existing Next Lab button */}
  <Link
    to={`/labs/${parseInt(id) + 1}`}
    className="lab-nav-btn"
    style={{
      background: "#0FA30F",
      color: "#fff",
      borderRadius: 4,
      padding: "10px 24px",
      fontWeight: 700,
      textDecoration: "none",
    }}
  >
    Next Lab →
  </Link>
</div>

        </div>
      </section>
    </Layout>
  );
};

export default LabPage;
