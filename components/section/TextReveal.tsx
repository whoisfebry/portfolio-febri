"use client";

import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

interface Props {
    children: string;
    className?: string;
}

export default function TextReveal({
    children,
    className = "",
}: Props) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 85%", "end 40%"],
    });

    const words = children.split(" ");

    return (
        <p
            ref={container}
            className={`text-justify leading-relaxed ${className}`}
        >
            {words.map((word, index) => {
                const start = index / words.length;
                const end = start + 1 / words.length;

                return (
                    <Word
                        key={index}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: number[];
}

function Word({
    children,
    progress,
    range,
}: WordProps) {
    const opacity = useTransform(progress, range, [0.2, 1]);

    return (
        <>
            <span
                style={{
                    position: "relative",
                    display: "inline-block",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        color: "#d1d5db",
                        inset: 0,
                    }}
                >
                    {children}
                </span>

                <motion.span
                    style={{
                        opacity,
                        position: "relative",
                        color: "currentColor",
                    }}
                >
                    {children}
                </motion.span>
            </span>

            {" "}
        </>
    );
}