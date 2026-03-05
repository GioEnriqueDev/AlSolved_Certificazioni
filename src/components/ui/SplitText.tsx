"use client";

import { motion, Variant } from "framer-motion";

type SplitTextProps = {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
};

export const SplitText = ({
    text,
    className = "",
    delay = 0.08,
    duration = 0.6,
}: SplitTextProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 1 },
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
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={container}
            className={`inline-flex flex-wrap ${className}`}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className="inline-block relative mr-[0.25em] last:mr-0"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};
