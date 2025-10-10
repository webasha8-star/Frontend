import React from "react";
import Layout from "../components/Layout";

const DownArrow = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "24px",
      margin: "4px 0",
    }}
    aria-hidden="true"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14m0 0-7-7m7 7 7-7"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const StructuredOSCPTraining = () => {
  const cardStyle = {
    background: "linear-gradient(135deg, #111827 60%, #1e293b 100%)",
    borderRadius: "24px",
    boxShadow: "0 2px 8px 0 rgba(74, 230, 94, 0.6)",
    padding: "24px 12px 24px 12px",
    maxWidth: "880px",
    margin: "30px auto",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "14px",
  };

  const heading1Style = {
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "#e0e7ff",
    marginBottom: "6px",
  };

  const paragraphStyle = {
    color: "#9ca3af",
    fontSize: "0.95rem",
    margin: 0,
    marginBottom: "14px",
    lineHeight: 1.35,
  };

  const branchStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "16px 0",
    flexWrap: "wrap",
    gap: "10px",
    position: "relative",
    width: "100%",
  };

  const nodeStyle = {
    backgroundColor: "#1e293b",
    padding: "6px 8px",
    borderRadius: "8px",
    color: "#f8fafc",
    fontWeight: 600,
    border: "2px solid #4ade80",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    minWidth: "90px",
    fontSize: "0.8rem",
    textAlign: "center",
    userSelect: "none",
    transition: "transform 0.18s, box-shadow 0.18s",
    cursor: "pointer",
    zIndex: 1,
  };

  const nodeHoverStyle = {
    transform: "translateY(-3px) scale(1.03)",
    boxShadow: "0 6px 12px rgba(34,197,94,0.23)",
  };

  const nodeBeforeStyle = { marginRight: "5px", fontSize: "1rem" };

  const stageLabelStyle = {
    fontSize: "0.85rem",
    color: "#38bdf8",
    fontWeight: 700,
    marginBottom: "8px",
    letterSpacing: "0.04em",
    textAlign: "center",
    userSelect: "none",
  };

  const [hoveredNodeIndex, setHoveredNodeIndex] = React.useState(null);

  const trainingStages = [
    {
      label: "Stage 1: Foundations",
      nodes: [
        { icon: "📘", text: "Information Gathering" },
        { icon: "🛠️", text: "Passive Recon" },
        { icon: "🛠️", text: "Active Recon" },
      ],
    },
    {
      label: "Stage 2: Vulnerability Discovery",
      nodes: [
        { icon: "🧪", text: "Manual Vuln Analysis" },
        { icon: "🧪", text: "Automated Tools" },
      ],
    },
    {
      label: "Stage 3: Exploitation",
      nodes: [
        { icon: "💣", text: "Web Exploitation" },
        { icon: "🔓", text: "Buffer Overflow" },
        { icon: "📈", text: "Priv. Escalation" },
      ],
    },
    {
      label: "Stage 4: Post-Exploitation",
      nodes: [
        { icon: "🔐", text: "Persistence" },
        { icon: "🔑", text: "Cred Dumping" },
        { icon: "🧭", text: "Pivoting" },
      ],
    },
    {
      label: "Stage 5: Active Directory & Red Team",
      nodes: [
        { icon: "🎯", text: "Kerberoasting" },
        { icon: "🎯", text: "AS-REP Roast" },
        { icon: "🧠", text: "Pass-the-Hash" },
      ],
    },
    {
      label: "Stage 6: Simulated Exam",
      nodes: [
        { icon: "🧪", text: "5 Targets" },
        { icon: "📄", text: "Reporting" },
      ],
    },
    {
      label: "Stage 7: Client-Side Attacks & Social Engineering",
      nodes: [
        { icon: "🎣", text: "Phishing" },
        { icon: "🧩", text: "Browser Exploit" },
        { icon: "👥", text: "Soc. Engg." },
      ],
    },
    {
      label: "Stage 8: Reporting & Documentation",
      nodes: [
        { icon: "📝", text: "Reports" },
        { icon: "📸", text: "Screenshots" },
        { icon: "📊", text: "Exec Summaries" },
      ],
    },
    {
      label: "Stage 9: Continuous Learning",
      nodes: [
        { icon: "🌐", text: "Blogs/Podcasts" },
        { icon: "💡", text: "Open Source" },
        { icon: "🏆", text: "CTFs/Bounties" },
      ],
    },
  ];

  return (
    <Layout>
      <main style={{ paddingTop: "130px" /* Adjust this to your header height */ }}>

        <div
          style={{
            minHeight: "100vh",
            padding: "12px",
            margin: 0,
          }}
        >
          <div style={cardStyle} aria-label="Structured OSCP Training Path">
            <div style={headerStyle}>
              <h1 style={heading1Style}>Structured OSCP-Style Training Path</h1>
              <p style={paragraphStyle}>
                Master each stage of your OSCP journey
                <br />
                through this compact, visual roadmap.
              </p>
            </div>
            {/* Training Tree in single card */}
            {trainingStages.map((stage, si) => (
              <React.Fragment key={si}>
                <div style={stageLabelStyle}>{stage.label}</div>
                <div style={branchStyle}>
                  {stage.nodes.map((node, ni) => {
                    const isHovered = hoveredNodeIndex === `${si}-${ni}`;
                    return (
                      <div
                        key={ni}
                        style={{
                          ...nodeStyle,
                          ...(isHovered ? nodeHoverStyle : {}),
                        }}
                        onMouseEnter={() => setHoveredNodeIndex(`${si}-${ni}`)}
                        onMouseLeave={() => setHoveredNodeIndex(null)}
                        role="listitem"
                        tabIndex={0}
                        aria-label={`${node.text} (${node.icon})`}
                      >
                        <span style={nodeBeforeStyle}>{node.icon}</span>
                        {node.text}
                      </div>
                    );
                  })}
                </div>
                {si < trainingStages.length - 1 && <DownArrow />}
              </React.Fragment>
            ))}
          </div>

          <div
            style={{
              maxWidth: 480,
              margin: "24px auto 0",
              padding: "0 8px",
              fontSize: "0.9rem",
              color: "#9ca3af",
            }}
          >
            <h2
              style={{
                color: "#e0e7ff",
                fontWeight: "700",
                fontSize: "1.1rem",
                marginBottom: "10px",
              }}
            >
              Modules Covered
            </h2>
            <ul style={{ paddingLeft: "18px", margin: 0 }}>
              <li>Recon Techniques</li>
              <li>Exploitation Fundamentals</li>
              <li>Privilege Escalation</li>
              <li>Buffer Overflow & Exploit Dev</li>
              <li>AD and Post-Exploitation</li>
              <li>Client-Side Attacks</li>
              <li>Professional Reporting</li>
              <li>Continuous Security Learning</li>
            </ul>
          </div>

          <footer />
        </div>
      </main>
    </Layout>
  );
};

export default StructuredOSCPTraining;
