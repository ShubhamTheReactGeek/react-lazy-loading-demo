import React, { useEffect, useRef } from "react";

export default function HeavyChart() {
  const ref = useRef(null);

  useEffect(() => {
    // Simulate heavy bundle by doing some math + canvas render
    const cvs = document.createElement("canvas");
    cvs.width = 900;
    cvs.height = 300;
    const ctx = cvs.getContext("2d");

    // Draw bars
    const bars = 50;
    for (let i = 0; i < bars; i++) {
      const h = Math.sin(i / 4) * 100 + 120 + Math.random() * 40;
      ctx.fillRect(i * 18, cvs.height - h, 14, h);
    }
    ref.current.appendChild(cvs);
  }, []);

  return (
    <div>
      <h2>Heavy Chart (Route-Lazy)</h2>
      <p style={{ opacity: 0.8 }}>
        This route’s JS is split into its own chunk. It loads only when you
        visit (or hover-prefetch).
      </p>
      <div
        ref={ref}
        style={{ background: "#0f1424", borderRadius: 10, padding: 12 }}
      />
    </div>
  );
}
