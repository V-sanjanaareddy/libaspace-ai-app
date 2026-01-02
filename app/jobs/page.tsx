export default function JobsPage() {
  return (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Job Board</h1>

      <div style={{ display: "grid", gap: "16px" }}>
        {[
          {
            title: "Frontend Engineer",
            location: "Remote",
            tech: "React, TypeScript",
          },
          {
            title: "AI Software Engineer",
            location: "USA",
            tech: "Python, ML, APIs",
          },
        ].map((job, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Tech:</strong> {job.tech}</p>

            <button
              style={{
                marginTop: "12px",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#2563eb",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
