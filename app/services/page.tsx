export default function Services() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "rgba(168, 34, 85, 0.08)",
        fontFamily: "Arial, sans-serif",
        color: "#3f3f3f",
        padding: "80px 60px",
      }}
    >
      <section>
        <h1 style={{ fontSize: "56px", color: "#a82255", marginBottom: "25px" }}>
          Our Services
        </h1>

        <p style={{ maxWidth: "800px", fontSize: "20px", lineHeight: "1.9", color: "#444" }}>
          We provide respectful and compassionate funeral services designed to support families
          through every step with dignity and care.
        </p>

        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "60px" }}>
          <ServiceCard title="Funeral Arrangements" text="Complete planning and coordination for the funeral service." />
          <ServiceCard title="Transportation" text="Professional and dignified hearse transportation." />
          <ServiceCard title="Family Support" text="Compassionate guidance and support during difficult times." />
          <ServiceCard title="Memorial Services" text="Respectful memorial planning for families and loved ones." />
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "24px",
        width: "320px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ color: "#a82255", marginBottom: "20px" }}>{title}</h2>
      <p style={{ lineHeight: "1.8" }}>{text}</p>
    </div>
  );
}