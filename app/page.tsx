export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "rgba(168, 34, 85, 0.08)",
        fontFamily: "Arial, sans-serif",
        color: "#3f3f3f",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          background: "#a82255",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/images/logo/logo.jpeg"
            alt="Logo"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              borderRadius: "12px",
              background: "white",
            }}
          />

          <div>
            <h1 style={{ margin: 0, color: "white", fontSize: "30px" }}>
              Siphesihle Funeral Services
            </h1>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.8)" }}>
              Driven By Passion
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "30px", fontWeight: 600 }}>
          <a href="/" style={{ ...navStyle, color: "white" }}>Home</a>
          <a href="/services" style={{ ...navStyle, color: "white" }}>Services</a>
          <a href="/arrangements" style={{ ...navStyle, color: "white" }}>Arrangements</a>
          <a href="/gallery" style={{ ...navStyle, color: "white" }}>Gallery</a>
          <a href="/about" style={{ ...navStyle, color: "white" }}>About</a>
          <a href="/contact" style={{ ...navStyle, color: "white" }}>Contact</a>
        </div>
      </header>

      <section
        style={{
          padding: "100px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "650px" }}>
          <h2
            style={{
              fontSize: "64px",
              color: "#a82255",
              marginBottom: "25px",
              lineHeight: "1.1",
            }}
          >
            Compassionate Funeral Services
          </h2>

          <p style={{ fontSize: "20px", lineHeight: "1.9", color: "#444" }}>
            We provide respectful funeral and memorial services with dignity,
            compassion and care for every family we serve.
          </p>

          <div style={{ display: "flex", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
            <a href="/contact" style={primaryButton}>24/7 Assistance</a>
            <a href="/services" style={secondaryButton}>View Services</a>
          </div>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          style={{
            width: "420px",
            height: "420px",
            objectFit: "cover",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            background: "white",
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </section>

      <section style={{ padding: "80px 60px", background: "rgba(255,255,255,0.6)" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            color: "#a82255",
            marginBottom: "60px",
          }}
        >
          Our Services
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <ServiceCard
            title="Funeral Arrangements"
            text="Complete funeral planning and coordination services."
          />
          <ServiceCard
            title="Transportation"
            text="Professional and dignified hearse transportation."
          />
          <ServiceCard
            title="Family Support"
            text="Compassionate assistance and support during difficult times."
          />
          <ServiceCard
            title="Arrangements"
            text="Guidance through planning, documents and funeral coordination."
          />
          <ServiceCard
            title="Gallery"
            text="View images of our services, vehicles and arrangements."
          />
        </div>
      </section>

      <section style={{ padding: "100px 60px" }}>
        <h2 style={{ fontSize: "48px", color: "#a82255", marginBottom: "30px" }}>
          About Us
        </h2>

        <p style={{ maxWidth: "900px", lineHeight: "2", fontSize: "18px" }}>
          Siphesihle Funeral Services was founded with a passion for serving
          families with dignity, care and respect.
        </p>
      </section>

      <footer
        style={{
          background: "#a82255",
          color: "white",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h3>Siphesihle Funeral Services</h3>
        <p>24/7 Assistance Available</p>
        <p>Phone: +27 XX XXX XXXX</p>
        <p>Email: example@gmail.com</p>

        <p style={{ marginTop: "30px", opacity: 0.7 }}>
          © 2026 Siphesihle Funeral Services
        </p>
      </footer>
    </main>
  );
}

function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
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
      <h3 style={{ color: "#a82255", marginBottom: "20px" }}>{title}</h3>
      <p style={{ lineHeight: "1.8" }}>{text}</p>
    </div>
  );
}

const navStyle = {
  textDecoration: "none",
};

const primaryButton = {
  padding: "16px 34px",
  borderRadius: "30px",
  border: "none",
  background: "#a82255",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
  textDecoration: "none",
  display: "inline-block",
};

const secondaryButton = {
  padding: "16px 34px",
  borderRadius: "30px",
  border: "1px solid #a82255",
  background: "transparent",
  color: "#a82255",
  cursor: "pointer",
  fontSize: "16px",
  textDecoration: "none",
  display: "inline-block",
};