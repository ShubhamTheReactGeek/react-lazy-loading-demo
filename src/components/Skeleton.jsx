export default function Skeleton({ label = "Loading…" }) {
  return (
    <div
      style={{
        border: "1px solid #1f2738",
        minHeight: "200px",
        padding: 16,
        borderRadius: 10,
        background: "linear-gradient(90deg, #111 25%, #151b2e 37%, #111 63%)",
        backgroundSize: "400% 100%",
        animation: "shimmer 1.4s ease infinite",
      }}
    >
      <style>
        {`@keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }`}
      </style>
      <div style={{ height: 18, width: 180, marginBottom: 10, opacity: 0.8 }}>
        {label}
      </div>
      <div
        style={{
          height: 12,
          background: "#0f1424",
          borderRadius: 6,
          margin: "8px 0",
        }}
      ></div>
      <div
        style={{
          height: 12,
          background: "#0f1424",
          borderRadius: 6,
          width: "70%",
          margin: "8px 0",
        }}
      ></div>
      <div
        style={{
          height: 12,
          background: "#0f1424",
          borderRadius: 6,
          width: "50%",
          margin: "8px 0",
        }}
      ></div>
    </div>
  );
}
