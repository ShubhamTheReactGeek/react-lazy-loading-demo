/**
 * Demonstrates native image lazy loading and IntersectionObserver
 * for background-like placeholders.
 */
import React, { useEffect, useRef, useState } from "react";

const IMG_URLS = Array.from({ length: 18 }).map(
  (_, i) => `https://picsum.photos/seed/lazy-${i}/480/320`
);

export default function ImageGallery() {
  return (
    <div>
      <h3>Image Lazy Loading</h3>
      <p style={{ opacity: 0.8 }}>
        Scroll down—images use <code>loading="lazy"</code> and fade-in when
        loaded.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12,
        }}
      >
        {IMG_URLS.map((src, idx) => (
          <FadeInImage key={idx} src={src} alt={`Random ${idx}`} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function FadeInImage({ src, alt, idx }) {
  const [ready, setReady] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const onLoad = () => setReady(true);
    img.addEventListener("load", onLoad);
    return () => img.removeEventListener("load", onLoad);
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={idx > 3 ? "lazy" : "eager"}
      style={{
        width: "100%",
        height: 180,
        objectFit: "cover",
        borderRadius: 10,
        // transform: `scale(${ready ? 1 : 0.98})`,
        // opacity: ready ? 1 : 0,
        transition: "opacity .4s ease, transform .4s ease",
        background: "#0f1424",
      }}
    />
  );
}
