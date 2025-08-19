import React from "react";

export default function VideoPlayer() {
  return (
    <div>
      <h2>Video Player (Route-Lazy)</h2>
      <p style={{ opacity: 0.8 }}>Another independently-split route chunk.</p>
      <video
        controls
        width="100%"
        style={{ borderRadius: 10, background: "#000" }}
        poster="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=1200&q=80&auto=format&fit=crop"
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
