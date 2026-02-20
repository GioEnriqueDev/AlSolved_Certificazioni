"use client";

import { useState, useEffect } from "react";
import { LoadingProvider } from "@/lib/LoadingContext";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";

interface ClientWrapperProps {
    children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
    const [showPreloader, setShowPreloader] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Check if preloader has already been shown this session
        const hasSeenPreloader = sessionStorage.getItem("alsolved_preloader_shown");

        if (hasSeenPreloader) {
            // Skip preloader, show content immediately
            setTimeout(() => {
                setShowPreloader(false);
                setShowContent(true);
            }, 0);
        } else {
            // Show preloader for first visit
            setTimeout(() => {
                setShowPreloader(true);
            }, 0);
        }
    }, []);

    const handleLoadingComplete = () => {
        // Mark preloader as shown for this session
        sessionStorage.setItem("alsolved_preloader_shown", "true");
        setShowContent(true);
        setShowPreloader(false);
    };

    return (
        <LoadingProvider>
            <SmoothScroll>
                {/* Preloader - only shows on first visit */}
                {showPreloader && (
                    <Preloader onLoadingComplete={handleLoadingComplete} />
                )}

                {/* Main Content */}
                <div
                    className={`transition-opacity duration-300 ${showContent ? "opacity-100" : "opacity-0"}`}
                >
                    <Navbar />
                    <main>{children}</main>
                </div>
            </SmoothScroll>
        </LoadingProvider >
    );
}
