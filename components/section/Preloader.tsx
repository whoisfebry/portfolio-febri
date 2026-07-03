"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        transition: {
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <div className="loader-wrapper">
                        <motion.svg
                            className="svg-ring ring1"
                            viewBox="0 0 220 220"
                            animate={{
                                rotate: [0, 180, 90, 360, 180, 540]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <circle
                                cx="110"
                                cy="110"
                                r="93"
                                fill="none"
                                stroke="#1E3A8A"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="170 390"
                                transform="rotate(-70 110 110)"
                            />
                        </motion.svg>

                        <motion.svg
                            className="svg-ring ring2"
                            viewBox="0 0 220 220"
                            animate={{
                                rotate: [0, -120, -300, -180, -450]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <circle
                                cx="110"
                                cy="110"
                                r="80"
                                fill="none"
                                stroke="#2563EB"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="140 330"
                                transform="rotate(110 110 110)"
                            />
                        </motion.svg>

                        <motion.svg
                            className="svg-ring ring3"
                            viewBox="0 0 220 220"
                            animate={{
                                rotate: [0, 90, 270, 180, 360]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <circle
                                cx="110"
                                cy="110"
                                r="62"
                                fill="none"
                                stroke="#60A5FA"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="115 250"
                                transform="rotate(200 110 110)"
                            />
                        </motion.svg>

                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [1, 0.9, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            <Image
                                src="/images/logo.webp"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="loader-logo"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}