"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import projects from "@/constants/projects";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";


interface ProjectsProps {
    language: Language;
}

type Category = "data-analyst" | "programmer" | "uiux";

export default function Projects({
    language,
}: ProjectsProps) {
    const t = language === "ID" ? id : en;

    const [activeCategory, setActiveCategory] =
        useState<Category>("data-analyst");

    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[number] | null
    >(null);

    const filteredProjects = useMemo(() => {
        return projects.filter(
            (project) =>
                project.category === activeCategory
        );
    }, [activeCategory]);

    const categories = [
        {
            label: "Data Analyst",
            value: "data-analyst",
        },
        {
            label: "Programmer",
            value: "programmer",
        },
        {
            label: "UI/UX Design",
            value: "uiux",
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <section
            id="projects"
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
                        duration: 0.6,
                    }}
                    className="text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        {t.project.title}
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                        {t.project.heading}
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            {" "}
                            {t.project.accent}
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        {t.project.description}
                    </p>
                </motion.div>

                {/* Category */}
                <div className="mt-12 flex justify-center">
                    <div className="flex w-full max-w-md overflow-x-auto rounded-full border border-gray-200 bg-gray-100 p-1 shadow-sm sm:inline-flex">
                        {categories.map((category) => {
                            const active =
                                activeCategory ===
                                category.value;
                            return (
                                <button
                                    key={category.value}
                                    onClick={() =>
                                        setActiveCategory(
                                            category.value as Category
                                        )
                                    }
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-7 sm:py-3 ${
                                    active
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "text-gray-600 hover:text-blue-600"
                                    }`}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -25,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredProjects.map(
                            (item, index) => (
                                <motion.div
                                    key={item.title[language === "ID" ? "id" : "en"]}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay:
                                            index *
                                            0.08,
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    onClick={() => {
                                        setSelectedProject(
                                            item
                                        );
                                        setCurrentImage(
                                            0
                                        );
                                    }}
                                    className="group cursor-pointer rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:border-blue-500"
                                >
                                    {/* Image */}
                                    <div className="p-4 pb-0">
                                        <div className="overflow-hidden rounded-2xl bg-gray-100">
                                            <img
                                                src={
                                                    item
                                                        .images[0]
                                                }
                                                alt={
                                                    item.title[language === "ID" ? "id" : "en"]
                                                }
                                                className="h-48 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 pb-6 pt-5">
                                        <h3 className="mt-2 text-xl font-bold text-gray-900">
                                            {
                                                item.title[language === "ID" ? "id" : "en"]
                                            }
                                        </h3>
                                        <p className="mt-3 line-clamp-2 text-gray-600">
                                            {
                                                item.description[language === "ID" ? "id" : "en"]
                                            }
                                        </p>
                                        <div className="mt-6 flex items-center justify-between">
                                            <div className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                                                {t.project.view}
                                                <ExternalLink
                                                    size={
                                                        15
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
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
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-[95vw] sm:max-w-[650px] lg:max-w-[760px] overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-300 bg-[#DDE6F5] shadow-2xl ring-2 ring-blue-500/50"
                        >
                            {/* HEADER */}
                            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-5">
                                <h2 className="text-lg font-bold text-gray-900 sm:text-2xl">
                                    {selectedProject.title[language === "ID" ? "id" : "en"]}
                                </h2>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-10 sm:w-10"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* IMAGE */}
                            <div className="px-4 pt-5 sm:px-6 sm:pt-6">
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
                                        src={selectedProject.images[currentImage]}
                                        alt={selectedProject.title[language === "ID" ? "id" : "en"]}
                                        className="max-h-[180px] sm:max-h-[240px] lg:max-h-[260px] w-auto rounded-xl object-contain"
                                    />
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setCurrentImage((prev) =>
                                                        prev === 0
                                                            ? selectedProject.images.length - 1
                                                            : prev - 1
                                                    )
                                                }
                                                className="absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:left-0 sm:h-10 sm:w-10"
                                            >
                                                <ChevronLeft size={18} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setCurrentImage((prev) =>
                                                        prev === selectedProject.images.length - 1
                                                            ? 0
                                                            : prev + 1
                                                    )
                                                }
                                                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:right-0 sm:h-10 sm:w-10"
                                            >
                                                <ChevronRight size={18} />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* THUMBNAIL */}
                                {selectedProject.images.length > 1 && (
                                    <div className="mt-5 flex justify-center gap-2 overflow-x-auto pb-1">
                                        {selectedProject.images.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`overflow-hidden rounded-xl border-2 transition-all ${currentImage === index
                                                        ? "border-blue-600"
                                                        : "border-gray-200 hover:border-blue-400"
                                                    }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="h-10 w-16 sm:h-12 sm:w-20 object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="px-4 py-5 sm:px-6 sm:py-6">
                                {/* TECHNOLOGY */}
                                <div className="mb-5 flex flex-wrap gap-3">
                                    {selectedProject.technologies.map((tech) => {
                                        const icons: Record<string, string> = {
                                            "Power BI": "https://cdn.jsdelivr.net/gh/microsoft/PowerBI-Icons@main/SVG/Power-BI.svg",
                                            "Microsoft Excel": "https://cdn.jsdelivr.net/gh/sempostma/office365-icons@master/svg/excel.svg",
                                            "Microsoft Word": "https://cdn.jsdelivr.net/gh/sempostma/office365-icons@master/svg/word.svg",
                                            "Microsoft PowerPoint": "https://cdn.jsdelivr.net/gh/sempostma/office365-icons@master/svg/powerpoint.svg",
                                            "Tableau": "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
                                            "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                                            "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                                            "CodeIgniter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
                                            "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                                            "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                                            "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                                            "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                                            "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                                            "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                                            "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
                                            "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                                        };
                                        return (
                                            <div
                                                key={tech}
                                                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 transition-all duration-300 hover:border-blue-500"
                                            >
                                                <img
                                                    src={
                                                        icons[tech] ??
                                                        "https://img.icons8.com/color/96/source-code.png"
                                                    }
                                                    alt={tech}
                                                    className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                                                />
                                                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {tech}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-sm sm:text-[15px] leading-7 sm:leading-8 text-justify text-gray-900">
                                    {selectedProject.description[language === "ID" ? "id" : "en"]}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}