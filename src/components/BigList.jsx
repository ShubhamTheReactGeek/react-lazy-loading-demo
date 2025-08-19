import React from "react";

function slowCompute(i) {
  // Simulate heavy work
  const start = performance.now();
  while (performance.now() - start < 3) {} // block ~3ms per item
  return `Item #${i}`;
}

export default function BigList() {
  const items = Array.from({ length: 800 }).map((_, i) => slowCompute(i + 1));
  return (
    <div>
      <h3>BigList (lazy-loaded component)</h3>
      <ul style={{ columns: 3, gap: 12 }}>
        {items.map((x, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
