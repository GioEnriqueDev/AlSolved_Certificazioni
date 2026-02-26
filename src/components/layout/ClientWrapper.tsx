"use client";

import { useEffect, useState } from "react";
import { LoadingProvider } from "@/lib/LoadingContext";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";

interface ClientWrapperProps {
  children: React.ReactNode;
}

type BootState = "pending" | "preloader" | "content";

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [bootState, setBootState] = useState<BootState>("pending");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const hasSeenPreloader = sessionStorage.getItem("alsolved_preloader_shown") === "true";
        setBootState(hasSeenPreloader ? "content" : "preloader");
      } catch {
        setBootState("content");
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleLoadingComplete = () => {
    try {
      sessionStorage.setItem("alsolved_preloader_shown", "true");
    } catch {
      // Ignore storage failures (private mode / browser restrictions)
    }
    setBootState("content");
  };

  const showPreloader = bootState === "preloader";
  const showContent = bootState === "content";

  return (
    <LoadingProvider>
      <SmoothScroll>
        {showPreloader ? <Preloader onLoadingComplete={handleLoadingComplete} /> : null}

        <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
          <Navbar />
          <main>{children}</main>
        </div>
      </SmoothScroll>
    </LoadingProvider>
  );
}
