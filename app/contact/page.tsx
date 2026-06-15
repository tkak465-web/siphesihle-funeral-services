export default function Contact() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(168,34,85,0.10), rgba(255,255,255,0.95))",
        fontFamily: "Arial, sans-serif",
        color: "#3f3f3f",
        padding: "90px 60px",
      }}
    >
      <section style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "56px",
            color: "#a82255",
            textAlign: "center",
            marginBottom: "18px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 60px",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          Reach us directly through phone, WhatsApp, email or our social media
          pages. We are here to assist with dignity, care and respect.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          <ContactButton
            title="Call Us"
            subtitle="Speak to us directly"
            link="tel:+27XXXXXXXXX"
          />

          <ContactButton
            title="WhatsApp"
            subtitle="Message us anytime"
            link="https://wa.me/27XXXXXXXXX"
          />

          <ContactButton
            title="Email Us"
            subtitle="Send us an enquiry"
            link="https://mail.google.com/mail/?view=cm&fs=1&to=info@siphesihle.co.za"
          />

          <ContactButton
            title="Facebook"
            subtitle="Visit our page"
            link="https://www.facebook.com/share/1F9pYB3s3D/"
          />

          <ContactButton
            title="Instagram"
            subtitle="Follow our updates"
            link="https://www.instagram.com/siphesihle_funeral_services?igsh=MWhrcGI2YWs3azl0ZQ=="
          />

          <ContactButton
            title="TikTok"
            subtitle="View our videos"
            link="https://www.tiktok.com/"
          />
        </div>
      </section>
    </main>
  );
}

function ContactButton({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          background: "white",
          padding: "34px",
          borderRadius: "24px",
          textAlign: "center",
          boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
          border: "1px solid rgba(168,34,85,0.12)",
        }}
      >
        <h2 style={{ color: "#a82255", margin: "0 0 10px", fontSize: "26px" }}>
          {title}
        </h2>

        <p style={{ margin: 0, color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
          {subtitle}
        </p>
      </div>
    </a>
  );
}