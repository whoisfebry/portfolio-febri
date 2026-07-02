"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import CountUp from "react-countup";
import TextReveal from "./TextReveal";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface AboutProps {
    language: Language;
}

export default function About({ language }: AboutProps) {
    const t = language === "ID" ? id : en;
    return (
        <section id="about" className="scroll-mt-20 py-20">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 lg:flex-row lg:gap-20">
                {/* FOTO */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-[280px] shrink-0 sm:max-w-sm"
                    >
                    {/* Background Accent */}
                    <motion.div
                        initial={{
                            x: 20,
                            y: 20,
                            rotate: -3,
                        }}
                        whileHover={{
                            x: 20,
                            y: 10,
                            rotate: -3,
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="absolute inset-0 rounded-[32px] bg-blue-500/10"
                    />
                    {/* Frame */}
                    <motion.div
                        whileHover={{
                            y: -10,
                            boxShadow: "0px 25px 60px rgba(37,99,235,0.18)",
                        }}
                        transition={{ duration: 0.35 }}
                        className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-gray-200 bg-white"
                        >
                        <img
                            src="/images/hero2.webp"
                            alt="Muhammad Febri Hermansyah"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>
                </motion.div>
                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex-1 text-center lg:text-left"
                >
                    {/* Section */}
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 sm:text-sm">
                        {t.about.title}
                    </span>
                    {/* Bio */}
                    <div className="mt-6 border-l-4 border-blue-600 pl-4 lg:mt-8 lg:pl-6">
                        <TextReveal className="mx-auto max-w-xl text-[15px] leading-7 text-gray-600 sm:text-[16px] lg:mx-0 lg:text-[17px] lg:leading-8">
                            {t.about.description}
                        </TextReveal>
                    </div>
                    {/* Statistics */}
                    <div className="mt-8 grid grid-cols-3 gap-3 border-y border-gray-200 py-6 text-center lg:mt-10 lg:gap-8">
                        <div className="px-1">
                            <h3 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                                <CountUp
                                    end={2}
                                    duration={2}
                                />
                                +
                            </h3>
                            <p className="mt-2 text-[10px] leading-4 font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                                {t.about.experience}
                            </p>
                        </div>
                        <div className="px-1">
                            <h3 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                                <CountUp
                                    end={12}
                                    duration={2}
                                />
                                +
                            </h3>
                            <p className="mt-2 text-[10px] leading-4 font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                                {t.about.projects}
                            </p>
                        </div>
                        <div className="px-1">
                            <h3 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                                <CountUp
                                    end={20}
                                    duration={2}
                                />
                                +
                            </h3>
                            <p className="mt-2 text-[10px] leading-4 font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                                {t.about.technologies}
                            </p>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="mt-6 flex w-full justify-center lg:justify-start">
                        <a
                            href="/CV MUHAMMAD FEBRI HERMANSYAH.pdf"
                            download="CV MUHAMMAD FEBRI HERMANSYAH.pdf"
                            className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                        >
                            <Download size={18} />
                            {t.about.downloadCV}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}