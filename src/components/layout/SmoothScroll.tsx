"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useMobileViewport } from "@/hooks/useMobileViewport";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { isMobile, isCoarsePointer, ready } = useMobileViewport();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  // Touch devices generally scroll better with native scrolling than JS smoothing.
  if (!ready || reducedMotion || isMobile || isCoarsePointer) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.055,
        duration: 0.95,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
