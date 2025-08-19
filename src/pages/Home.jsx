import React, { Suspense } from "react";
import Skeleton from "../components/Skeleton.jsx";

const ImageGallery = React.lazy(() => import("../components/ImageGallery.jsx"));

export default function Home() {
  return (
    <div>
      <h1>React Lazy Loading – All Patterns in One App</h1>
      <ul>
        <li>
          <strong>Route-based</strong> splitting: visit “Heavy Chart” / “Video
          Player”.
        </li>
        <li>
          <strong>Hover prefetch</strong>: hover nav links before clicking
          (watch Network tab).
        </li>
        <li>
          <strong>Component-based on demand</strong>: load BigList via button.
        </li>
        <li>
          <strong>Image lazy loading</strong>: scroll the gallery below.
        </li>
      </ul>

      <Suspense fallback={<Skeleton label="Loading gallery…" />}>
        <ImageGallery />
      </Suspense>
    </div>
  );
}
