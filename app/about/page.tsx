export default function About() {
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
      <h1 style={{ fontSize: "56px", color: "#a82255", marginBottom: "25px" }}>
        About Us
      </h1>

      <p style={{ maxWidth: "900px", fontSize: "20px", lineHeight: "1.9", color: "#444" }}>
        Siphesihle Funeral Services was founded with a passion for serving
        families with dignity, care and respect during difficult times.
      </p>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "60px" }}>
        <InfoCard icon="🕊️" title="Compassion" text="We serve families with patience, warmth and understanding." />
        <InfoCard icon="🤝" title="Respect" text="Every family and loved one is treated with dignity." />
        <InfoCard icon="🌹" title="Care" text="We guide you through the process with professional support." />
      </div>

      <div
        style={{
          marginTop: "70px",
          height: "320px",
          borderRadius: "24px",
          background: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a82255",
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        Picture Space / Team or Business Image
      </div>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "24px",
        width: "300px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ fontSize: "34px", marginBottom: "15px" }}>{icon}</div>
      <h2 style={{ color: "#a82255", marginBottom: "15px" }}>{title}</h2>
      <p style={{ lineHeight: "1.8" }}>{text}</p>
    </div>
  );
}