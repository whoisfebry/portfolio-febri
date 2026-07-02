"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("home");
            if (!hero) return;
            const heroHeight = hero.offsetHeight;
            setIsVisible(window.scrollY > heroHeight - 100);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-6 right-6 z-50"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                    }}
                >
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to Top"
                        className="fixed bottom-[3%] right-[30px] z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-white/20 bg-blue-600 text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-4 focus:ring-blue-200"
                    >
                        <ChevronUp className="h-7 w-7" strokeWidth={3} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
