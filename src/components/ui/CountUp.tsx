"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    suffix?: string;
    separator?: string;
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2,
    className = "",
    suffix = "",
    separator = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, { damping, stiffness });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    const formatValue = useCallback(
        (latest: number) => {
            const rounded = Math.round(latest);
            if (separator) {
                return rounded.toLocaleString("it-IT");
            }
            return String(rounded);
        },
        [separator]
    );

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = formatValue(direction === "down" ? to : from) + suffix;
        }
    }, [from, to, direction, formatValue, suffix]);

    useEffect(() => {
        if (isInView) {
            const timeoutId = setTimeout(() => {
                motionValue.set(direction === "down" ? from : to);
            }, delay * 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [isInView, motionValue, direction, from, to, delay]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest: number) => {
            if (ref.current) {
                ref.current.textContent = formatValue(latest) + suffix;
            }
        });

        return () => unsubscribe();
    }, [springValue, formatValue, suffix]);

    return <span className={className} ref={ref} />;
}
