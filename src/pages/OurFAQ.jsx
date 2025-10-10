import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questionInput, setQuestionInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [errors, setErrors] = useState({ email: "", question: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // New, more attractive green color for borders and highlights
  const greenColor = "#00b33c";
  const hoverColor = "#0a0a0a";
  const errorColor = "#ff0000ff";

  const faqs = useMemo(
    () => [
      {
        question: "What is CrackMeNow?",
        answer: "CrackMeNow is a cyber learning platform where you can sharpen your hacking skills through labs and challenges.",
      },
      {
        question: "Is this platform free to use?",
        answer: "Yes! You can join for free and access beginner-friendly content. Some premium labs may require a subscription.",
      },
      {
        question: "Do I need technical experience to start?",
        answer: "No prior experience is needed. Our beginner tracks guide you from the basics to advanced concepts.",
      },
      {
        question: "How do I track my progress?",
        answer: "You can track your progress through your dashboard, which updates automatically as you complete labs.",
      },
      {
        question: "What certifications can I prepare for?",
        answer: "CrackMeNow offers tailored training for OSCP, CEH, and other cybersecurity certifications with hands-on labs.",
      },
    ],
    []
  );

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    let hasErrors = false;
    const newErrors = { email: "", question: "" };

    if (emailInput.trim() === "") {
      newErrors.email = "Email is required.";
      hasErrors = true;
    } else if (!validateEmail(emailInput)) {
      newErrors.email = "Please enter a valid email address.";
      hasErrors = true;
    }

    if (questionInput.trim() === "") {
      newErrors.question = "Question is required.";
      hasErrors = true;
    }

    setErrors(newErrors);
    if (hasErrors) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Submitted question:", questionInput);
      console.log("User email:", emailInput);

      setSubmitted(true);
      setQuestionInput("");
      setEmailInput("");
      setIsSubmitting(false);

      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: "100vh",
          padding: isMobile ? "20px" : "60px 20px",
          fontFamily: "'Roboto Mono', Arial, sans-serif",
          paddingTop: "150px",
        }}
      >
        <h2
          style={{
            color: greenColor,
            fontSize: isMobile ? "28px" : "36px",
            textAlign: "center",
            marginBottom: "40px",
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "16px",
                overflow: "hidden",
                width: isMobile ? "90%" : "60%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <button
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: isMobile ? "12px 16px" : "16px 24px",
                  fontSize: isMobile ? "14px" : "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  textTransform: "none",
                  borderRadius: "8px",
                  border: `1px solid ${greenColor}`,
                  boxShadow: `0 0 8px ${greenColor}33`,
                  transition: "background 0.3s, transform 0.2s",
                }}
                onClick={() => toggle(index)}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span style={{ color: greenColor }}>{activeIndex === index ? "▲" : "▼"}</span>
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  style={{
                    backgroundColor: hoverColor,
                    color: "#ccc",
                    padding: isMobile ? "12px 16px" : "16px 24px",
                    fontSize: isMobile ? "12px" : "14px",
                    borderTop: `1px solid ${greenColor}`,
                    textAlign: "left",
                    width: "100%",
                    textTransform: "none",
                    borderRadius: "0 0 8px 8px",
                    transition: "max-height 0.3s ease",
                    maxHeight: activeIndex === index ? "200px" : "0",
                    overflow: "hidden",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            width: isMobile ? "90%" : "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3
            style={{
              color: greenColor,
              marginBottom: "20px",
              fontSize: isMobile ? "18px" : "24px",
              fontWeight: 600,
            }}
          >
            Didn't find your question? Ask us!
          </h3>

          <label
            htmlFor="email-input"
            style={{
              display: "block",
              color: "#fff",
              fontSize: "14px",
              marginBottom: "4px",
              textAlign: "left",
            }}
          >
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            style={{
              width: "100%",
              padding: isMobile ? "8px" : "10px",
              fontSize: isMobile ? "14px" : "16px",
              marginBottom: errors.email ? "4px" : "12px",
              backgroundColor: "#111",
              color: "#fff",
              border: `1px solid ${errors.email ? errorColor : greenColor}`,
              borderRadius: "8px",
              textTransform: "none",
              boxShadow: `0 0 6px ${greenColor}33`,
            }}
            placeholder="Your email address"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <div
              id="email-error"
              style={{
                color: errorColor,
                fontSize: "12px",
                textAlign: "left",
                marginBottom: "12px",
              }}
            >
              {errors.email}
            </div>
          )}

          <label
            htmlFor="question-input"
            style={{
              display: "block",
              color: "#fff",
              fontSize: "14px",
              marginBottom: "4px",
              textAlign: "left",
            }}
          >
            Your Question
          </label>
          <textarea
            id="question-input"
            style={{
              width: "100%",
              height: "100px",
              padding: isMobile ? "8px" : "10px",
              fontSize: isMobile ? "14px" : "16px",
              backgroundColor: "#111",
              color: "#fff",
              border: `1px solid ${errors.question ? errorColor : greenColor}`,
              borderRadius: "8px",
              resize: "none",
              textTransform: "none",
              marginBottom: errors.question ? "4px" : "12px",
              boxShadow: `0 0 6px ${greenColor}33`,
            }}
            placeholder="Type your question here..."
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
            aria-describedby={errors.question ? "question-error" : undefined}
          />
          {errors.question && (
            <div
              id="question-error"
              style={{
                color: errorColor,
                fontSize: "12px",
                textAlign: "left",
                marginBottom: "12px",
              }}
            >
              {errors.question}
            </div>
          )}

          <button
            style={{
              marginTop: "12px",
              padding: isMobile ? "10px 20px" : "12px 24px",
              fontSize: isMobile ? "14px" : "16px",
              backgroundColor: "#ffffffff",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              fontWeight: "bold",
              textTransform: "none",
              opacity: isSubmitting ? 0.7 : 1,
              transition: "background-color 0.3s, opacity 0.3s",
              position: "relative",
            }}
            onClick={handleSubmit}
            disabled={isSubmitting}
            onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#ffffffff")}
            onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#ffffffff")}
          >
            {isSubmitting ? (
              <>
                Submitting
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    width: "16px",
                    height: "16px",
                    border: "2px solid #000",
                    borderTop: "2px solid #fff",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </>
            ) : (
              "Submit Question"
            )}
          </button>

          {submitted && (
            <div
              style={{
                marginTop: "16px",
                color: greenColor,
                fontWeight: "bold",
                fontSize: "14px",
                animation: "fadeInOut 3s ease-in-out",
              }}
            >
              <style>
                {`
                  @keyframes fadeInOut {
                    0% { opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { opacity: 0; }
                  }
                `}
              </style>
              Thank you! Your question has been submitted.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FAQSection;