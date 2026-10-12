"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface ComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
  leftImage?: string;
  rightImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  leftLabel?: string;
  rightLabel?: string;
  zoom?: number;
  className?: string;
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  leftImage,
  rightImage,
  beforeLabel,
  afterLabel,
  leftLabel,
  rightLabel,
  zoom = 1.13,
  className = ""
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Resolve left/right images & labels with fallback to before/after
  const activeLeftImage = leftImage || beforeImage || "";
  const activeRightImage = rightImage || afterImage || "";
  const activeLeftLabel = leftLabel || beforeLabel || "100% GOTS Cotton (Breathable)";
  const activeRightLabel = rightLabel || afterLabel || "Synthetic (Traps Heat)";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, onMouseMove, onTouchMove, stopDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-xl overflow-hidden select-none cursor-ew-resize bg-paper shadow-lg border border-border/40 touch-none ${className || 'aspect-square md:aspect-[4/5]'}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches[0]) handleMove(e.touches[0].clientX);
      }}
    >
      {/* Right Image (Background layer) */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
          style={{ 
            backgroundImage: `url(${activeRightImage})`,
            transform: `scale(${zoom})`,
            transformOrigin: "center center"
          }}
        />
      </div>

      {/* Right Label (pinned to top-right) */}
      <div 
        className="absolute top-4 right-4 bg-ink/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full z-10 pointer-events-none shadow-md transition-opacity duration-200"
        style={{ opacity: sliderPosition < 80 ? 1 : 0 }}
      >
        {activeRightLabel}
      </div>

      {/* Left Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
          style={{ 
            backgroundImage: `url(${activeLeftImage})`,
            transform: `scale(${zoom})`,
            transformOrigin: "center center"
          }}
        />
      </div>

      {/* Left Label (pinned to top-left) */}
      <div 
        className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-ink text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full z-10 pointer-events-none shadow-md border border-border/30 transition-opacity duration-200"
        style={{ opacity: sliderPosition > 20 ? 1 : 0 }}
      >
        {activeLeftLabel}
      </div>

      {/* Slider Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
        {/* Slider Handle Knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-black/10 flex items-center justify-center gap-1 cursor-ew-resize transition-transform">
          <div className="w-0.5 h-3.5 bg-ink/50 rounded-full" />
          <div className="w-0.5 h-3.5 bg-ink/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
