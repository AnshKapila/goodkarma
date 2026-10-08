"use client";

import { useState, useRef, useEffect } from "react";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ComparisonSlider({ beforeImage, afterImage, beforeLabel = "Synthetic", afterLabel = "Organic Cotton", className = "" }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-xl overflow-hidden select-none cursor-ew-resize bg-paper shadow-lg border border-border/40 ${className || 'aspect-square md:aspect-[4/5]'}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >

      {/* After Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />
      
      {/* After Label */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-ink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10 pointer-events-none opacity-0 md:opacity-100 transition-opacity">
        {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-ink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10 pointer-events-none opacity-0 md:opacity-100 transition-opacity" style={{ transform: `translateX(calc(${sliderPosition}vw - 100%))`}}>
            {/* The label logic for clipping can be tricky, so we'll just put it static if it fits or hide it if clipped */}
        </div>
      </div>
      
      {/* Static Before Label */}
      <div 
        className="absolute top-4 right-4 bg-ink/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10 pointer-events-none md:block hidden"
        style={{ opacity: sliderPosition < 80 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        {beforeLabel}
      </div>


      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-border flex items-center justify-center gap-1">
          <div className="w-1 h-3 bg-border rounded-full" />
          <div className="w-1 h-3 bg-border rounded-full" />
        </div>
      </div>
    </div>
  );
}
