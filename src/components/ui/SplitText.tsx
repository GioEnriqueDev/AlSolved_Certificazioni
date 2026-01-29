"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

type SplitTextProps = {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
};

export const SplitText = ({
    text,
    className = "",
    delay = 0.1,
    duration = 0.5,
}: SplitTextProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const words = text.split(" ");

    const container: { hidden: Variant; visible: Variant } = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: delay,
            },
        },
    };

    const child: { hidden: Variant; visible: Variant } = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
            className={`inline-block overflow-hidden ${className}`}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className="inline-block mr-[0.25em] last:mr-0"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
