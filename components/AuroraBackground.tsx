"use client";

// AuroraBackground.tsx
// Renders four desaturated radial blobs that slowly drift behind all content.
// Colours: midnight indigo · deep violet · dark teal · dusty purple
// Zero JS animation — all motion handled via CSS keyframes in globals.css.

export default function AuroraBackground() {
  return (
    <div className="aurora-container" aria-hidden="true">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
      {/* Grain overlay for organic texture */}
      <div className="aurora-noise" />
    </div>
  );
}
