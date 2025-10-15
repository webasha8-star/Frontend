import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

const CreateLab = () => {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [modules, setModules] = useState([
    { title: "", questions: [{ text: "", type: "mcq", options: ["", ""], answer: "" }] },
  ]);

  const addModule = () =>
    setModules([...modules, { title: "", questions: [{ text: "", type: "mcq", options: ["", ""], answer: "" }] }]);

  const addQuestion = (mIndex) => {
    const copy = [...modules];
    copy[mIndex].questions.push({ text: "", type: "mcq", options: ["", ""], answer: "" });
    setModules(copy);
  };

  const addOption = (mIndex, qIndex) => {
    const copy = [...modules];
    copy[mIndex].questions[qIndex].options.push("");
    setModules(copy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      alert("Failed to create lab");
    }
  };

  return (
    <div
      style={{
        background: "#1b1b1f",
        padding: "30px",
        borderRadius: "12px",
        maxWidth: "950px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#22c55e", marginBottom: "20px", textAlign: "center" }}>
        Create New Lab
      </h2>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Lab Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} required />

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
            <h3 style={{ color: "#22c55e" }}>MODULE {mIndex + 1}</h3>
            <input
              placeholder="Module Title"
              value={mod.title}
              onChange={(e) => {
                const copy = [...modules];
                copy[mIndex].title = e.target.value;
                setModules(copy);
              }}
              style={inputStyle}
              required
            />

            {mod.questions.map((q, qIndex) => (
              <div key={qIndex} style={questionStyle}>
                <button
                  type="button"
                  onClick={() => {
                    const copy = [...modules];
                    copy[mIndex].questions.splice(qIndex, 1);
                    setModules(copy);
                  }}
                  style={removeBtnStyle}
                >
                  ×
                </button>

                <input
                  placeholder="Question Text"
                  value={q.text}
                  onChange={(e) => {
                    const copy = [...modules];
                    copy[mIndex].questions[qIndex].text = e.target.value;
                    setModules(copy);
                  }}
                  style={inputStyle}
                  required
                />

                <label style={labelStyle}>Question Type</label>
                <select
                  value={q.type}
                  onChange={(e) => {
                    const copy = [...modules];
                    copy[mIndex].questions[qIndex].type = e.target.value;
                    setModules(copy);
                  }}
                  style={inputStyle}
                >
                  <option value="mcq">Multiple Choice (MCQ)</option>
                  <option value="text">Descriptive</option>
                </select>

                {q.type === "mcq" &&
                  q.options.map((opt, optIndex) => (
                    <div key={optIndex} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <input
                        placeholder={`Option ${optIndex + 1}`}
                        value={opt}
                        onChange={(e) => {
                          const copy = [...modules];
                          copy[mIndex].questions[qIndex].options[optIndex] = e.target.value;
                          setModules(copy);
                        }}
                        style={{ ...inputStyle, flex: 1 }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const copy = [...modules];
                          copy[mIndex].questions[qIndex].options.splice(optIndex, 1);
                          setModules(copy);
                        }}
                        style={removeOptionBtnStyle}
                      >
                        ×
                      </button>
                    </div>
                  ))}

                {q.type === "mcq" && (
                  <button type="button" onClick={() => addOption(mIndex, qIndex)} style={addBtnStyle}>
                    ➕ Add Option
                  </button>
                )}

                <input
                  placeholder="Correct Answer"
                  value={q.answer}
                  onChange={(e) => {
                    const copy = [...modules];
                    copy[mIndex].questions[qIndex].answer = e.target.value;
                    setModules(copy);
                  }}
                  style={inputStyle}
                  required
                />
              </div>
            ))}

            <button type="button" onClick={() => addQuestion(mIndex)} style={addBtnStyle}>
              ➕ Add Question
            </button>

            <button
              type="button"
              onClick={() => {
                const copy = [...modules];
                copy.splice(mIndex, 1);
                setModules(copy);
              }}
              style={removeModuleBtnStyle}
            >
              ❌ Remove Module
            </button>
          </div>
        ))}

        <button type="button" onClick={addModule} style={addBtnStyle}>
          ➕ Add Module
        </button>

        <button type="submit" style={submitBtnStyle}>
          ✅ Save Lab
        </button>
      </form>
    </div>
  );
};

export default CreateLab;

// 🔸 Inline Styles
const labelStyle = { color: "#22c55e", fontWeight: "bold", marginTop: "10px" };
const inputStyle = {
  width: "100%",
  marginBottom: "12px",
  padding: "10px",
  background: "#181c2a",
  color: "#fff",
  border: "1px solid #39FF14",
  borderRadius: "6px",
  outline: "none",
};
const textareaStyle = { ...inputStyle, resize: "vertical" };
const moduleStyle = {
  border: "1px solid #333",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "8px",
};
const questionStyle = {
  background: "#232323",
  padding: "12px",
  borderRadius: "8px",
  marginBottom: "10px",
  position: "relative",
};
const removeBtnStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  background: "#ff3b3b",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  cursor: "pointer",
};
const removeOptionBtnStyle = {
  background: "#ff3b3b",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  cursor: "pointer",
};
const addBtnStyle = {
  background: "#22c55e",
  color: "#000",
  border: "none",
  borderRadius: "4px",
  padding: "8px 14px",
  cursor: "pointer",
  marginTop: "10px",
};
const removeModuleBtnStyle = {
  background: "#ff3b3b",
  color: "#fff",
  padding: "8px 14px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "10px",
};
const submitBtnStyle = {
  background: "#22c55e",
  color: "#000",
  padding: "10px 18px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "15px",
};
