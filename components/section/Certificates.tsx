"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
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

    return (
        <section
            id="certificate"
            className="scroll-mt-20 py-20"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
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
                {/* Cards */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            onClick={() => setSelectedCertificate(item)}
                            className="group cursor-pointer rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:border-blue-500"
                        >
                            {/* Thumbnail */}
                            <div className="p-4 pb-0">
                                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-52 sm:h-56 lg:h-60 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            {/* Content */}
                            <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                                <span className="text-sm font-medium text-blue-600">
                                    {item.issuer}
                                </span>
                                <h3 className="mt-2 text-lg font-bold text-gray-900 transition-colors duration-300 sm:text-xl">
                                    {item.title}
                                </h3>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        {item.year}
                                    </span>
                                    <div className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-700 sm:px-4 sm:text-sm">
                                        {t.certificate.view}
                                        <ExternalLink size={15} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCertificate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCertificate(null)}
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
                        onClick={(e) => e.stopPropagation()}
                        className="relative inline-block"
                    >
                        {/* Close */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute -right-4 -top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110 hover:bg-blue-600 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                            <div className="rounded-3xl bg-[#DAE3F1] p-3 shadow-2xl sm:p-5">
                                <img
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                className="block max-h-[70vh] max-w-[90vw] rounded-2xl object-contain sm:max-h-[75vh] sm:max-w-[80vw]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}