export default function Gallery() {
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
          textAlign: "center",
        }}
      >
        Gallery
      </h1>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "20px",
          lineHeight: "1.9",
          color: "#444",
        }}
      >
        A look at our professional vehicles, service setup and the care we put
        into presenting every service with dignity and respect.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        <ImageBox src="/Images/gallery/vehicle.jpg" label="Professional Vehicle" />
        <ImageBox src="/Images/gallery/vehicle2.jpg" label="Vehicle Presentation" />
        <ImageBox src="/Images/gallery/servicesetup.jpg" label="Service Setup" />
        <ImageBox src="/Images/gallery/servicesetup2.jpg" label="Memorial Preparation" />
      </div>
    </main>
  );
}

function ImageBox({ src, label }: { src: string; label: string }) {
  return (
    <div
      style={{
        borderRadius: "24px",
        background: "white",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={label}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#a82255",
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        {label}
      </div>
    </div>
  );
}
