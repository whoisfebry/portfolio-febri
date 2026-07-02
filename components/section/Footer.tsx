"use client";

import { motion } from "framer-motion";

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

    return (
        <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-blue-50/40">
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
                <div className="flex justify-center text-center">
                    <p className="text-sm leading-7 text-gray-600">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-gray-900">
                            MFH.
                        </span>{" "}
                        {t.footer.copyright}
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}