export default function Contact() {
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
      <h1
        style={{
          fontSize: "56px",
          color: "#a82255",
          marginBottom: "25px",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          maxWidth: "800px",
          fontSize: "20px",
          lineHeight: "1.9",
          color: "#444",
        }}
      >
        We are available to assist families with care, dignity and respect.
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "60px",
        }}
      >
        <ContactCard title="Phone" text="+27 XX XXX XXXX" />
        <ContactCard title="Email" text="example@gmail.com" />
        <ContactCard title="WhatsApp" text="+27 XX XXX XXXX" />
        <ContactCard title="Instagram" text="@siphesihle_funeral_services" />
        <ContactCard title="TikTok" text="@siphesihle_funeral_services" />
        <ContactCard title="Location" text="Address will be added here" />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          style={socialButton}
        >
          Instagram
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          style={socialButton}
        >
          TikTok
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          style={socialButton}
        >
          WhatsApp
        </a>
      </div>

      <div
        style={{
          marginTop: "60px",
          background: "white",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          maxWidth: "700px",
        }}
      >
        <h2
          style={{
            color: "#a82255",
            marginBottom: "25px",
          }}
        >
          Send Us a Message
        </h2>

        <input
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          placeholder="Your Phone Number"
          style={inputStyle}
        />

        <input
          placeholder="Your Email"
          style={inputStyle}
        />

        <textarea
          placeholder="Your Message"
          rows={6}
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Submit Message
        </button>
      </div>
    </main>
  );
}

function ContactCard({
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
        padding: "35px",
        borderRadius: "24px",
        width: "280px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "#a82255",
          marginBottom: "15px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          lineHeight: "1.8",
        }}
      >
        {text}
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "14px",
  border: "1px solid rgba(168, 34, 85, 0.25)",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  padding: "16px 34px",
  borderRadius: "30px",
  border: "none",
  background: "#a82255",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const socialButton = {
  padding: "16px 34px",
  borderRadius: "30px",
  border: "none",
  background: "#a82255",
  color: "white",
  textDecoration: "none",
  fontWeight: 600,
  display: "inline-block",
};