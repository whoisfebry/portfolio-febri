"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface ContactProps {
    language: Language;
}

export default function Contact({
    language,
}: ContactProps) {
    const t = language === "ID" ? id : en;
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.message
        ) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Semua field wajib diisi!",
                confirmButtonColor: "#2563eb",
                customClass: {
                    popup: "swal-popup",
                    title: "swal-title",
                    htmlContainer: "swal-text",
                    confirmButton: "swal-button",
                },
            });
            return;
        }

        setLoading(true);

        try {
            // Simpan ke Supabase
            const { error } = await supabase
                .from("contact_messages")
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    },
                ]);

            if (error) throw error;

            // Kirim EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Pesan berhasil dikirim.",
                confirmButtonColor: "#2563eb",
                customClass: {
                    popup: "swal-popup",
                    title: "swal-title",
                    htmlContainer: "swal-text",
                    confirmButton: "swal-button",
                },
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (err: any) {
            console.error(err);

            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: err.message || "Terjadi kesalahan.",
                confirmButtonColor: "#2563eb",
                customClass: {
                    popup: "swal-popup",
                    title: "swal-title",
                    htmlContainer: "swal-text",
                    confirmButton: "swal-button",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
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
                        {t.contact.title}
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                        {t.contact.heading}
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            {" "}
                            {t.contact.accent}
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        {t.contact.description}
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {t.contact.information}
                        </h3>
                        <p className="mt-5 leading-7 text-justify text-gray-600 sm:leading-8">
                            {t.contact.infoDescription}
                        </p>
                        <div className="mt-10 space-y-7">
                            {/* Email */}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg sm:h-14 sm:w-14">
                                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {t.contact.email}
                                    </p>
                                    <p className="break-all font-semibold text-gray-900">
                                        febryibme@gmail.com
                                    </p>
                                </div>
                            </div>
                            {/* WhatsApp */}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg sm:h-14 sm:w-14">
                                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {t.contact.phone}
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        +62 895 3321 30219
                                    </p>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg sm:h-14 sm:w-14">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {t.contact.location}
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        Jakarta, Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Social */}
                        <div className="mt-12">
                            <h4 className="font-semibold text-gray-900">
                                {t.contact.follow}
                            </h4>
                            <div className="mt-5 flex gap-4">
                                {[
                                    {
                                        icon: <FaGithub size={20} />,
                                        link: "https://github.com/whoisfebry",
                                    },
                                    {
                                        icon: <FaLinkedin size={20} />,
                                        link: "https://linkedin.com/in/mfebrih",
                                    },
                                    {
                                        icon: <FaInstagram size={20} />,
                                        link: "https://instagram.com/fbrybme",
                                    },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            >
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    {t.contact.form.name}
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder={t.contact.form.placeholderName}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-300 focus:border-blue-600 sm:px-5 sm:py-4"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    {t.contact.form.email}
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    placeholder={t.contact.form.placeholderEmail}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-300 focus:border-blue-600 sm:px-5 sm:py-4"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    {t.contact.form.message}
                                </label>
                                <textarea
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    placeholder={t.contact.form.placeholderMessage}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-300 focus:border-blue-600 sm:px-5 sm:py-4"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:py-4"
                                >
                                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                                {loading
                                ? language === "ID"
                                    ? "Mengirim..."
                                    : "Sending..."
                                : t.contact.form.button}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}