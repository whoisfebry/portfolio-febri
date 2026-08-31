"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface FooterProps {
    language: Language;
}

export default function Footer({
    language,
}: FooterProps) {
    const t = language === "ID" ? id : en;

    // Menandakan bahwa component sudah berjalan di browser
    const [mounted, setMounted] = useState(false);

    // Real-time clock
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setMounted(true);
        setCurrentTime(new Date());

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format WIB
    const time = currentTime
        ? currentTime.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Jakarta",
        })
        : "--:--:--";

    return (
        <footer className="border-t border-gray-200 bg-transparent">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="mx-auto max-w-7xl px-4 py-8"
            >
                <div className="flex items-center justify-between gap-2 sm:gap-6">
                    {/* Copyright */}
                    <p className="ml-0 whitespace-nowrap text-xs leading-7 text-gray-600 sm:ml-16 sm:text-sm">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-gray-900">
                            MFH.
                        </span>{" "}
                        {t.footer.copyright}
                    </p>

                    {/* Real-time Clock */}
                    <div className="mr-0 flex shrink-0 items-center gap-1.5 sm:mr-18 sm:gap-2">
                        {/* Green Live Indicator */}
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                        </span>
                        {/* Time */}
                        <p className="whitespace-nowrap font-mono text-xs font-semibold text-gray-900 sm:text-sm">
                            {mounted ? time : "--:--:--"}
                            {/* WIB hanya muncul di desktop */}
                            <span className="hidden sm:inline"> WIB</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}