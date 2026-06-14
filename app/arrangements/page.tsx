export default function Arrangements() {
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
        Funeral Arrangements
      </h1>

      <p style={{ maxWidth: "850px", fontSize: "20px", lineHeight: "1.9", color: "#444" }}>
        We guide families through each step of the funeral process with care,
        respect and professionalism.
      </p>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "60px" }}>
        <StepCard number="1" title="Initial Contact" text="Reach out to us and we will assist you immediately." />
        <StepCard number="2" title="Family Consultation" text="We discuss your needs, wishes and service preferences." />
        <StepCard number="3" title="Planning" text="We help arrange the service, transport and ceremony details." />
        <StepCard number="4" title="Service Day" text="We coordinate the day with dignity, calmness and care." />
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
        Picture Space / Arrangement Image
      </div>
    </main>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "24px",
        width: "280px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#a82255",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          marginBottom: "20px",
        }}
      >
        {number}
      </div>

      <h2 style={{ color: "#a82255", marginBottom: "15px" }}>{title}</h2>
      <p style={{ lineHeight: "1.8" }}>{text}</p>
    </div>
  );
}