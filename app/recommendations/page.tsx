export default function RecommendationsPage() {
  return (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Recommended Jobs for You
      </h1>

      <p style={{ color: "#555", marginBottom: "20px" }}>
        Based on your interest in AI & Full Stack Development
      </p>

      <div style={{ display: "grid", gap: "16px" }}>
        <div style={cardStyle}>
          <h2>AI Engineer</h2>
          <p>Matched Skills: Python, ML, APIs</p>
          <p>Match Score: 92%</p>
        </div>

        <div style={cardStyle}>
          <h2>Full Stack Engineer</h2>
          <p>Matched Skills: React, TypeScript, Backend APIs</p>
          <p>Match Score: 88%</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};
