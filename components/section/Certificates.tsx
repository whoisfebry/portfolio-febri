"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight} from "lucide-react";
import certificates from "@/constants/certificates";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface CertificatesProps {
    language: Language;
}

export default function Certificates({
    language,
}: CertificatesProps) {
    const t = language === "ID" ? id : en;

    const [selectedCertificate, setSelectedCertificate] = useState<
        (typeof certificates)[number] | null
    >(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const total = certificates.length;
    const getIndex = (offset: number) => {
        if (total === 0) return 0;
        return (
            (activeIndex + offset + total) % total
        );
    };

    const nextCertificate = () => {
        if (total <= 1) return;
        setDirection(1);
        setActiveIndex(
            (prev) => (prev + 1) % total
        );
    };

    const previousCertificate = () => {
        if (total <= 1) return;
        setDirection(-1);
        setActiveIndex(
            (prev) =>
                (prev - 1 + total) % total
        );
    };

    const selectCertificate = (index: number) => {
        if (index === activeIndex) return;
        setDirection(
            index > activeIndex ? 1 : -1
        );
        setActiveIndex(index);
    };

    const handleDragEnd = (
        _: unknown,
        info: {
            offset: {
                x: number;
            };
        }
    ) => {
        if (info.offset.x < -80) {
            nextCertificate();
        } else if (info.offset.x > 80) {
            previousCertificate();
        }
    };

    const getCardStyle = (offset: number) => {
        const positions = {
            "-2": {
                x: "-105%",
                scale: 0.72,
                opacity: 0.35,
                zIndex: 10,
                rotate: -8,
            },
            "-1": {
                x: "-58%",
                scale: 0.84,
                opacity: 0.65,
                zIndex: 20,
                rotate: -5,
            },
            "0": {
                x: "0%",
                scale: 1,
                opacity: 1,
                zIndex: 50,
                rotate: 0,
            },
            "1": {
                x: "58%",
                scale: 0.84,
                opacity: 0.65,
                zIndex: 20,
                rotate: 5,
            },
            "2": {
                x: "105%",
                scale: 0.72,
                opacity: 0.35,
                zIndex: 10,
                rotate: 8,
            },
        };

        return positions[
            offset.toString() as keyof typeof positions
        ];
    };

    return (
        <section
            id="certificate"
            className="relative z-0 isolate scroll-mt-20 overflow-hidden py-20"
        >
            <div className="mx-auto max-w-7xl px-4">
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
                        {t.certificate.title}
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                        {t.certificate.heading}
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            {" "}
                            {t.certificate.accent}
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        {t.certificate.description}
                    </p>
                </motion.div>

                <div className="relative mx-auto mt-10 hidden h-[500px] max-w-6xl items-center justify-center md:flex">
                    <button
                        type="button"
                        onClick={previousCertificate}
                        aria-label="Previous certificate"
                        className="absolute left-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:text-white lg:left-10">
                        <ChevronLeft size={22} />
                    </button>
                    <div className="relative flex h-full w-full items-center justify-center">
                        {[-2, -1, 0, 1, 2].map(
                            (offset) => {
                                const index =
                                    getIndex(offset);
                                const certificate =
                                    certificates[
                                        index
                                    ];
                                const style =
                                    getCardStyle(
                                        offset
                                    );
                                return (
                                    <motion.div
                                        key={`${index}-${offset}`}
                                        animate={{
                                            x: style.x,
                                            scale: style.scale,
                                            opacity:
                                                style.opacity,
                                            rotate:
                                                style.rotate,
                                            zIndex:
                                                style.zIndex,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        onClick={() => {
                                            if (
                                                offset ===
                                                0
                                            ) {
                                                setSelectedCertificate(
                                                    certificate
                                                );
                                            } else {
                                                selectCertificate(
                                                    index
                                                );
                                            }
                                        }}
                                        className="absolute h-[410px] w-[290px] cursor-pointer rounded-3xl border border-gray-200 bg-white shadow-2xl transition-shadow hover:shadow-3xl">
                                        <div className="p-4">
                                            <div className="overflow-hidden rounded-2xl bg-gray-100">
                                                <img
                                                    src={
                                                        certificate.image
                                                    }
                                                    alt={
                                                        certificate.title
                                                    }
                                                    className="h-[230px] w-full object-cover object-top"/>
                                            </div>
                                        </div>
                                        <div className="px-5 pb-5">
                                            <span className="text-xs text-blue-600">
                                                {
                                                    certificate.issuer
                                                }
                                            </span>
                                            <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900">
                                                {
                                                    certificate.title
                                                }
                                            </h3>
                                            <div className="mt-4 flex items-center justify-between">
                                                <span className="text-xs text-gray-500">
                                                    {
                                                        certificate.year
                                                    }
                                                </span>
                                                {offset ===
                                                    0 && (
                                                    <span className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                                                        {
                                                            t
                                                                .certificate
                                                                .view
                                                        }
                                                        <ExternalLink
                                                            size={
                                                                13
                                                            }
                                                        />
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            }
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={nextCertificate}
                        aria-label="Next certificate"
                        className="absolute right-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:text-white lg:right-10">
                        <ChevronRight size={22} />
                    </button>
                </div>
                <div className="relative mx-auto mt-5 flex h-[460px] w-full max-w-[340px] items-center justify-center px-2 sm:mt-12 sm:max-w-[380px] md:hidden">
                    {/* LEFT */}
                    <button
                        type="button"
                        onClick={previousCertificate}
                        aria-label="Previous certificate"
                        className="absolute left-0 z-[100] flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:text-white sm:left-1 sm:h-10 sm:w-10"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* MOBILE CARD */}
                    <AnimatePresence
                        mode="popLayout"
                        initial={false}
                        custom={direction}
                    >
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            initial={{
                                opacity: 0,
                                x: direction * 120,
                                scale: 0.9,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                x: direction * -120,
                                scale: 0.9,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            drag="x"
                            dragConstraints={{
                                left: 0,
                                right: 0,
                            }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            onClick={() =>
                                setSelectedCertificate(
                                    certificates[activeIndex]
                                )
                            }
                            className="absolute w-[260px] rounded-3xl border border-gray-200 bg-white p-3 shadow-2xl sm:w-[280px]"
                        >
                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-2xl bg-gray-100">
                                <img
                                    src={certificates[activeIndex].image}
                                    alt={certificates[activeIndex].title}
                                    className="h-[220px] w-full object-cover object-top sm:h-[235px]"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="px-1 pt-3 sm:pt-4">
                                <span className="block text-[11px] font-semibold leading-5 text-blue-600 sm:text-xs">
                                    {certificates[activeIndex].issuer}
                                </span>

                                <h3 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-gray-900 sm:mt-2 sm:text-lg">
                                    {certificates[activeIndex].title}
                                </h3>

                                <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                                    <span className="text-xs text-gray-500">
                                        {certificates[activeIndex].year}
                                    </span>

                                    <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1.5 text-[11px] font-semibold text-white sm:px-3 sm:text-xs">
                                        {t.certificate.view}
                                        <ExternalLink size={12} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* RIGHT */}
                    <button
                        type="button"
                        onClick={nextCertificate}
                        aria-label="Next certificate"
                        className="absolute right-0 z-[100] flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:text-white sm:right-1 sm:h-10 sm:w-10"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
                {total > 1 && (
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {certificates.map(
                            (_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Go to certificate ${
                                        index + 1
                                    }`}
                                    onClick={() =>
                                        selectCertificate(
                                            index
                                        )
                                    }
                                    className={`
                                        h-2 rounded-full transition-all duration-300
                                        ${
                                            index ===
                                            activeIndex
                                                ? "w-8 bg-blue-600"
                                                : "w-2 bg-gray-300 hover:bg-blue-400"
                                        }
                                    `}
                                />
                            )
                        )}
                    </div>
                )}
            </div>

            {selectedCertificate && (
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
                        setSelectedCertificate(null)
                    }
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        className="relative inline-block"
                    >
                        {/* CLOSE */}
                        <button
                            type="button"
                            onClick={() =>
                                setSelectedCertificate(
                                    null
                                )
                            }
                            aria-label="Close certificate"
                            className="absolute -right-2 -top-2 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 hover:bg-blue-600 hover:text-white sm:h-9 sm:w-9"
                        >
                            <X size={16} />
                        </button>

                        {/* CERTIFICATE */}
                        <div className="rounded-2xl bg-[#DAE3F1] p-2 shadow-xl sm:p-3">
                            <img
                                src={
                                    selectedCertificate.image
                                }
                                alt={
                                    selectedCertificate.title
                                }
                                className="block max-h-[55vh] max-w-[82vw] rounded-xl object-contain sm:max-h-[60vh] sm:max-w-[65vw] lg:max-h-[65vh] lg:max-w-[55vw]"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}