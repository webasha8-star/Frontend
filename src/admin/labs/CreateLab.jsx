import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Trash2, XCircle, Save } from "lucide-react";

const CreateLab = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [modules, setModules] = useState([
    { title: "", questions: [{ text: "", type: "mcq", options: ["", ""], answer: "" }] },
  ]);
  const [loading, setLoading] = useState(false);

  // ✅ Role-based access check
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role || role.toUpperCase() !== "ADMIN") {
      alert("Access Denied! Only Admins can create labs.");
      navigate("/");
    }
  }, [navigate]);

  // ✅ Add new module
  const addModule = () =>
    setModules((prev) => [
      ...prev,
      { title: "", questions: [{ text: "", type: "mcq", options: ["", ""], answer: "" }] },
    ]);

  // ✅ Add new question
  const addQuestion = (mIndex) => {
    const updated = [...modules];
    updated[mIndex].questions.push({ text: "", type: "mcq", options: ["", ""], answer: "" });
    setModules(updated);
  };

  // ✅ Add new option
  const addOption = (mIndex, qIndex) => {
    const updated = [...modules];
    updated[mIndex].questions[qIndex].options.push("");
    setModules(updated);
  };

  // ✅ Remove handlers
  const removeModule = (mIndex) => {
    if (modules.length === 1) return alert("At least one module is required.");
    const updated = modules.filter((_, i) => i !== mIndex);
    setModules(updated);
  };

  const removeQuestion = (mIndex, qIndex) => {
    const updated = [...modules];
    updated[mIndex].questions.splice(qIndex, 1);
    setModules(updated);
  };

  const removeOption = (mIndex, qIndex, optIndex) => {
    const updated = [...modules];
    updated[mIndex].questions[qIndex].options.splice(optIndex, 1);
    setModules(updated);
  };

  // ✅ Validate lab data before sending to backend
  const validateLab = () => {
    if (!title.trim()) return "Lab title is required.";
    if (modules.length === 0) return "At least one module is required.";

    for (const [mIndex, mod] of modules.entries()) {
      if (!mod.title.trim()) return `Module ${mIndex + 1} needs a title.`;
      for (const [qIndex, q] of mod.questions.entries()) {
        if (!q.text.trim()) return `Question ${qIndex + 1} in Module ${mIndex + 1} has no text.`;
        if (q.type === "mcq" && q.options.some((opt) => !opt.trim()))
          return `All options must be filled for Question ${qIndex + 1} (Module ${mIndex + 1}).`;
        if (!q.answer.trim())
          return `Question ${qIndex + 1} in Module ${mIndex + 1} needs an answer.`;
      }
    }
    return null;
  };

  // ✅ Submit lab to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateLab();
    if (error) return alert(error);

    const payload = {
      title,
      summary,
      image,
      modules: modules.map((m) => ({
        title: m.title,
        questions: m.questions.map((q) => ({
          text: q.text,
          type: q.type,
          options: q.type === "mcq" ? q.options : [],
          answer: q.answer,
        })),
      })),
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/labs/create", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("✅ Lab created successfully!");
      setTitle("");
      setSummary("");
      setImage("");
      setModules([{ title: "", questions: [{ text: "", type: "mcq", options: ["", ""], answer: "" }] }]);
    } catch (error) {
      console.error("❌ Error creating lab:", error);
      alert(error.response?.data?.message || "Failed to create lab. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageContainer}>
      <h2 style={heading}>Create New Lab</h2>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Lab Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Summary</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Brief summary of the lab"
          style={textareaStyle}
        />

        <label style={labelStyle}>Image URL (optional)</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/image.png"
          style={inputStyle}
        />

        {/* MODULES */}
        {modules.map((mod, mIndex) => (
          <div key={mIndex} style={moduleStyle}>
            <div style={moduleHeader}>
              <h3 style={moduleTitle}>Module {mIndex + 1}</h3>
              <button type="button" onClick={() => removeModule(mIndex)} style={iconButtonDanger}>
                <XCircle size={18} />
              </button>
            </div>

            <input
              placeholder="Module Title"
              value={mod.title}
              onChange={(e) => {
                const updated = [...modules];
                updated[mIndex].title = e.target.value;
                setModules(updated);
              }}
              style={inputStyle}
              required
            />

            {mod.questions.map((q, qIndex) => (
              <div key={qIndex} style={questionBox}>
                <div style={questionHeader}>
                  <h4 style={questionTitle}>Question {qIndex + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeQuestion(mIndex, qIndex)}
                    style={iconButtonDanger}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <input
                  placeholder="Question Text"
                  value={q.text}
                  onChange={(e) => {
                    const updated = [...modules];
                    updated[mIndex].questions[qIndex].text = e.target.value;
                    setModules(updated);
                  }}
                  style={inputStyle}
                  required
                />

                <label style={labelStyle}>Question Type</label>
                <select
                  value={q.type}
                  onChange={(e) => {
                    const updated = [...modules];
                    updated[mIndex].questions[qIndex].type = e.target.value;
                    setModules(updated);
                  }}
                  style={inputStyle}
                >
                  <option value="mcq">Multiple Choice (MCQ)</option>
                  <option value="text">Descriptive</option>
                </select>

                {q.type === "mcq" &&
                  q.options.map((opt, optIndex) => (
                    <div key={optIndex} style={optionRow}>
                      <input
                        placeholder={`Option ${optIndex + 1}`}
                        value={opt}
                        onChange={(e) => {
                          const updated = [...modules];
                          updated[mIndex].questions[qIndex].options[optIndex] = e.target.value;
                          setModules(updated);
                        }}
                        style={{ ...inputStyle, flex: 1 }}
                      />
                      <button
                        type="button"
                        onClick={() => removeOption(mIndex, qIndex, optIndex)}
                        style={iconButtonDangerSmall}
                      >
                        <XCircle size={14} />
                      </button>
                    </div>
                  ))}

                {q.type === "mcq" && (
                  <button
                    type="button"
                    onClick={() => addOption(mIndex, qIndex)}
                    style={iconButtonAdd}
                  >
                    <PlusCircle size={16} /> Add Option
                  </button>
                )}

                <input
                  placeholder="Correct Answer"
                  value={q.answer}
                  onChange={(e) => {
                    const updated = [...modules];
                    updated[mIndex].questions[qIndex].answer = e.target.value;
                    setModules(updated);
                  }}
                  style={inputStyle}
                  required
                />
              </div>
            ))}

            <button type="button" onClick={() => addQuestion(mIndex)} style={iconButtonAdd}>
              <PlusCircle size={16} /> Add Question
            </button>
          </div>
        ))}

        <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
          <button type="button" onClick={addModule} style={iconButtonAddLarge}>
            <PlusCircle size={18} /> Add Module
          </button>
          <button type="submit" style={submitButton} disabled={loading}>
            {loading ? "Saving..." : <><Save size={18} /> Save Lab</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateLab;

//
// ✅ Styles (Unchanged — clean dark theme)
//
const pageContainer = {
  background: "#0f1117",
  padding: "40px",
  borderRadius: "14px",
  maxWidth: "950px",
  margin: "0 auto",
  boxShadow: "0 0 25px rgba(0, 255, 90, 0.08)",
};
const heading = { color: "#22c55e", fontSize: "28px", marginBottom: "25px", textAlign: "center", fontWeight: "700" };
const labelStyle = { color: "#22c55e", fontWeight: "500", marginTop: "12px" };
const inputStyle = { width: "100%", marginBottom: "12px", padding: "10px", background: "#1a1d29", color: "#fff", border: "1px solid #3dff88", borderRadius: "6px", outline: "none", transition: "0.3s" };
const textareaStyle = { ...inputStyle, resize: "vertical" };
const moduleStyle = { border: "1px solid #222", background: "#181b24", padding: "18px", marginBottom: "24px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,255,90,0.05)" };
const moduleHeader = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" };
const moduleTitle = { color: "#39ff88", fontSize: "18px" };
const questionBox = { background: "#212432", padding: "14px", borderRadius: "8px", marginBottom: "12px", position: "relative", boxShadow: "0 0 6px rgba(0,255,90,0.04)" };
const questionHeader = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" };
const questionTitle = { color: "#3dff88", fontSize: "15px", fontWeight: "600" };
const optionRow = { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" };
const iconButtonAdd = { display: "inline-flex", alignItems: "center", gap: "6px", background: "#22c55e", color: "#000", border: "none", borderRadius: "6px", padding: "8px 14px", cursor: "pointer", fontWeight: "600", transition: "0.3s", marginBottom: "10px" };
const iconButtonAddLarge = { ...iconButtonAdd, fontSize: "15px", padding: "10px 16px" };
const iconButtonDanger = { background: "transparent", color: "#ff4c4c", border: "none", cursor: "pointer", transition: "0.3s" };
const iconButtonDangerSmall = { ...iconButtonDanger, padding: "4px", borderRadius: "4px", background: "#2a2a2a" };
const submitButton = { display: "inline-flex", alignItems: "center", gap: "8px", background: "#22c55e", color: "#000", fontWeight: "700", border: "none", borderRadius: "6px", padding: "10px 18px", cursor: "pointer", transition: "0.3s" };
