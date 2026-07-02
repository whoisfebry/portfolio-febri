"use client";

import { motion } from "framer-motion";
import {
    CalendarDays,
    MapPin,
    Building2,
} from "lucide-react";

import experiences from "@/constants/experience";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface ExperienceProps {
    language: Language;
}

export default function Experience({
    language,
}: ExperienceProps) {

    const t = language === "ID" ? id : en;
    return (
        <section
            id="experience"
            className="scroll-mt-20 py-20"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: .6,
                    }}
                    className="text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        {t.experience.title}
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                        {t.experience.heading}
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            {" "}
                            {t.experience.accent}
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        {t.experience.description}
                    </p>
                </motion.div>

                {/* Experience */}
                <div className="mt-14 space-y-8">
                    {experiences.map((item, index) => {
                        const jobdesk = item.jobdesk[language];
                        const middle = Math.ceil(jobdesk.length / 2);
                        const leftColumn = jobdesk.slice(0, middle);
                        const rightColumn = jobdesk.slice(middle);
                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: .5,
                                    delay: index * .1,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl md:p-8"
                            >
                                {/* Header */}
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                    {/* Left */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-100 md:h-16 md:w-16">
                                            <Building2
                                                className="h-7 w-7 text-blue-600 md:h-8 md:w-8"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl md:text-2xl">
                                                {item.position[language]}
                                            </h3>
                                            <p className="mt-1 text-sm font-semibold text-blue-600 sm:text-base">
                                                {item.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="space-y-3 text-sm text-gray-500 sm:text-base">
                                        <div className="flex items-center gap-3">
                                            <CalendarDays
                                                size={18}
                                            />
                                            <span className="font-medium">
                                                {item.period[language]}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin
                                                size={18}
                                            />
                                            <span className="font-medium">
                                                {item.location[language]}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mt-6 border-t border-gray-100 pt-6 md:mt-8 md:pt-8">
                                    <div className="grid gap-8 md:grid-cols-2">
                                        {/* Left */}
                                        <div className="space-y-5">
                                            {leftColumn.map((job, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                                    <p className="text-justify text-sm leading-7 text-gray-600 sm:text-base">
                                                        {job}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right */}
                                        <div className="space-y-5">
                                            {rightColumn.map((job, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                                    <p className="text-justify text-sm leading-7 text-gray-600 sm:text-base">
                                                        {job}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}