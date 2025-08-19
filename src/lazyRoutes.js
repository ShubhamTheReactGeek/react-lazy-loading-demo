import React, { lazy } from "react";

// Route-based lazy imports
const HeavyChart = lazy(() => import("./pages/HeavyChart.jsx"));
const VideoPlayer = lazy(() => import("./pages/VideoPlayer.jsx"));

// Elements
const routes = {
  chart: HeavyChart,
  video: VideoPlayer,
};

// Prefetchers for hover (call these to warm the cache)
export const prefetchers = {
  chart: () => import("./pages/HeavyChart.jsx"),
  video: () => import("./pages/VideoPlayer.jsx"),
};

export default routes;
