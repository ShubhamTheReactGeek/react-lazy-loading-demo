import React, { Suspense, lazy } from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import routes, { prefetchers } from "./lazyRoutes.js";
import Home from "./pages/Home.jsx";
import Skeleton from "./components/Skeleton.jsx";
import usePrefetchOnHover from "./hooks/usePrefetchOnHover.js";

const HeavyChart = lazy(() => import("./pages/HeavyChart.jsx"));
const VideoPlayer = lazy(() => import("./pages/VideoPlayer.jsx"));

const navStyle = ({ isActive }) => ({
  padding: "8px 12px",
  borderRadius: 6,
  textDecoration: "none",
  background: isActive ? "#111" : "#222",
  color: "#fff",
});

export default function App() {
  // Prefetch on hover handlers (demonstrate route prefetch)
  const onHoverChart = usePrefetchOnHover(prefetchers.chart);
  const onHoverVideo = usePrefetchOnHover(prefetchers.video);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        background: "#0b0f19",
        minHeight: "100vh",
        color: "#ddd",
      }}
    >
      <header
        style={{
          display: "flex",
          gap: 12,
          padding: 16,
          borderBottom: "1px solid #1f2738",
          position: "sticky",
          top: 0,
          background: "#0b0f19",
          zIndex: 10,
        }}
      >
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>
        <NavLink to="/chart" style={navStyle} onMouseEnter={onHoverChart}>
          Heavy Chart
        </NavLink>
        <NavLink to="/video" style={navStyle} onMouseEnter={onHoverVideo}>
          Video Player
        </NavLink>
      </header>

      <main style={{ padding: 20, maxWidth: 980, margin: "0 auto" }}>
        <p style={{ opacity: 0.8, marginTop: 0 }}>
          Open DevTools → Network → check “JS”. Notice route chunks load only
          when you visit them (or hover, due to prefetch).
        </p>

        {/* Route-level suspense boundary */}
        <Suspense fallback={<Skeleton label="Loading route…" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<HeavyChart />} />
            <Route path="/video" element={<VideoPlayer />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Suspense>

        <hr style={{ margin: "32px 0", borderColor: "#1f2738" }} />

        <section>
          <h2>Component-level lazy (on click)</h2>
          <p>
            Click the button to load a heavy component chunk only when needed.
          </p>
          <LazyOnDemandDemo />
        </section>
      </main>

      <footer style={{ padding: 20, textAlign: "center", opacity: 0.6 }}>
        © {new Date().getFullYear()} Lazy Loading Demo
      </footer>
    </div>
  );
}

const LazyBigList = React.lazy(() => import("./components/BigList.jsx"));

function LazyOnDemandDemo() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setShow((s) => !s)}
        style={{
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #334",
          background: "#151b2e",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {show ? "Hide" : "Load"} Big List (lazy)
      </button>

      <div style={{ marginTop: 16 }}>
        <Suspense fallback={<Skeleton label="Loading BigList…" />}>
          {show ? (
            <LazyBigList />
          ) : (
            <em style={{ opacity: 0.8 }}>
              Component not loaded yet — no extra JS downloaded.
            </em>
          )}
        </Suspense>
      </div>
    </div>
  );
}
