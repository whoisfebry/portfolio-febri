"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    CalendarDays,
    MapPin,
    Building2,
    ImageIcon,
    X,
    ChevronLeft,
    ChevronRight,
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

    const [activeExperience, setActiveExperience] = useState(0);
    const [selectedExperience, setSelectedExperience] = useState<any>(null);
    const [currentImage, setCurrentImage] = useState(0);
    const currentExperience = experiences[activeExperience];
    const nextExperience = () => {
        setActiveExperience((prev) =>
            prev === experiences.length - 1 ? 0 : prev + 1
        );
    };

    const prevExperience = () => {
        setActiveExperience((prev) =>
            prev === 0 ? experiences.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        if (!selectedExperience) return;

        setCurrentImage((prev) =>
            prev === selectedExperience.photos.length - 1
                ? 0
                : prev + 1
        );
    };

    const prevImage = () => {
        if (!selectedExperience) return;

        setCurrentImage((prev) =>
            prev === 0
                ? selectedExperience.photos.length - 1
                : prev - 1
        );
    };

    const jobdesk = currentExperience.jobdesk[language];
    const middle = Math.ceil(jobdesk.length / 2);
    const leftColumn = jobdesk.slice(0, middle);
    const rightColumn = jobdesk.slice(middle);

    return (
        <section id="experience" className="scroll-mt-20 py-20">
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
                        duration: 0.6,
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
                <div className="mt-14">
                    {/* Single Experience Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeExperience}
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -30,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl md:p-8"
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
                                            {
                                                currentExperience
                                                    .position[language]
                                            }
                                        </h3>
                                        <p className="mt-1 text-sm font-semibold text-blue-600 sm:text-base">
                                            {currentExperience.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="space-y-3 text-sm text-gray-500 sm:text-base">
                                    <div className="flex items-center gap-3">
                                        <CalendarDays size={18} />
                                        <span className="font-medium">
                                            {
                                                currentExperience
                                                    .period[language]
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin size={18} />
                                        <span className="font-medium">
                                            {
                                                currentExperience
                                                    .location[language]
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mt-6 border-t border-gray-100 pt-6 md:mt-8 md:pt-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Left Column */}
                                    <div className="space-y-5">
                                        {leftColumn.map((job, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                                <p className="text-left text-sm leading-7 text-gray-600 sm:text-base">
                                                    {job}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-5">
                                        {rightColumn.map((job, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                                <p className="text-left text-sm leading-7 text-gray-600 sm:text-base">
                                                    {job}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Gallery Button */}
                            <div className="mt-8 flex justify-start">
                                <button
                                    onClick={() => {
                                        setSelectedExperience(
                                            currentExperience
                                        );
                                        setCurrentImage(0);
                                    }}
                                    className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                >
                                    <ImageIcon size={18} />
                                    {language === "ID"
                                        ? "Lihat Dokumentasi"
                                        : "View Gallery"}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider Navigation - OUTSIDE CARD */}
                    {experiences.length > 1 && (
                        <div className="mt-7 flex items-center justify-center gap-5">
                            {/* Previous */}
                            <button
                                onClick={prevExperience}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                aria-label="Previous experience"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Indicator */}
                            <div className="flex items-center gap-2">
                                {experiences.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setActiveExperience(index)
                                        }
                                        aria-label={`Go to experience ${
                                            index + 1
                                        }`}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            activeExperience === index
                                                ? "w-8 bg-blue-600"
                                                : "w-2 bg-gray-300 hover:bg-blue-300"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Next */}
                            <button
                                onClick={nextExperience}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                aria-label="Next experience"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Modal Gallery */}
                <AnimatePresence>
                    {selectedExperience && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() =>
                                setSelectedExperience(null)
                            }
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-5"
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.96,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.96,
                                    y: 20,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                                className="relative max-h-[90vh] w-full max-w-[95vw] overflow-y-auto rounded-2xl border border-blue-300 bg-[#DDE6F5] shadow-2xl ring-2 ring-blue-500/50 sm:max-w-[650px] lg:max-w-[760px]"
                            >

                                {/* Modal Header */}
                                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-5">
                                    <div>
                                        <h2 className="break-words text-sm font-bold leading-tight text-gray-900 sm:text-2xl">
                                            {selectedExperience.company}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600 sm:text-base">
                                            {
                                                selectedExperience
                                                    .position[language]
                                            }
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setSelectedExperience(null)
                                        }
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-10 sm:w-10"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Modal Image */}
                                <div className="px-4 pb-8 pt-5 sm:px-6 sm:pb-8 sm:pt-6">
                                    <div className="relative flex justify-center">
                                        <motion.img
                                            key={currentImage}
                                            initial={{
                                                opacity: 0,
                                                x: 15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            src={
                                                selectedExperience
                                                    .photos[
                                                    currentImage
                                                ]
                                            }
                                            alt=""
                                            className="max-h-[180px] w-auto rounded-xl object-contain sm:max-h-[240px] lg:max-h-[260px]"
                                        />
                                        {selectedExperience.photos
                                            .length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:left-0 sm:h-10 sm:w-10"
                                                >
                                                    <ChevronLeft
                                                        size={18}
                                                    />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:right-0 sm:h-10 sm:w-10"
                                                >
                                                    <ChevronRight
                                                        size={18}
                                                    />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* Thumbnail */}
                                    {selectedExperience.photos
                                        .length > 1 && (
                                        <div className="mt-5 flex justify-center gap-3 px-4">
                                            {selectedExperience.photos.map(
                                                (
                                                    photo: string,
                                                    index: number
                                                ) => (
                                                    <button
                                                        key={index}
                                                        onClick={() =>
                                                            setCurrentImage(
                                                                index
                                                            )
                                                        }
                                                        className={`overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                                                            currentImage ===
                                                            index
                                                                ? "border-blue-600 shadow-lg"
                                                                : "border-transparent opacity-70 hover:opacity-100"
                                                        }`}
                                                    >
                                                        <img
                                                            src={photo}
                                                            alt={`Thumbnail ${
                                                                index + 1
                                                            }`}
                                                            className="h-12 w-16 object-cover sm:h-16 sm:w-24"
                                                        />
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}