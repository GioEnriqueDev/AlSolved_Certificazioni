"use client";

import { useEffect, useState } from "react";

type MobileViewportState = {
  isMobile: boolean;
  isCoarsePointer: boolean;
  ready: boolean;
};

function bindMediaListener(query: MediaQueryList, listener: () => void) {
  const legacyQuery = query as MediaQueryList & {
    addListener?: (listener: () => void) => void;
    removeListener?: (listener: () => void) => void;
  };

  if (typeof legacyQuery.addEventListener === "function") {
    legacyQuery.addEventListener("change", listener);
    return () => legacyQuery.removeEventListener("change", listener);
  }

  legacyQuery.addListener?.(listener);
  return () => legacyQuery.removeListener?.(listener);
}

export function useMobileViewport(breakpoint = 768): MobileViewportState {
  const [state, setState] = useState<MobileViewportState>({
    isMobile: false,
    isCoarsePointer: false,
    ready: false,
  });

  useEffect(() => {
    const widthQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const update = () => {
      setState({
        isMobile: widthQuery.matches,
        isCoarsePointer: coarsePointerQuery.matches,
        ready: true,
      });
    };

    update();

    const unbindWidth = bindMediaListener(widthQuery, update);
    const unbindCoarse = bindMediaListener(coarsePointerQuery, update);

    return () => {
      unbindWidth();
      unbindCoarse();
    };
  }, [breakpoint]);

  return state;
}
