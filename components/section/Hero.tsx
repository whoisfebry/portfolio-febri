"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Briefcase } from "lucide-react";

import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import { Mail } from "lucide-react";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface HeroProps {
    language: Language;
}

export default function Hero({ language }: HeroProps) {
    const t = language === "ID" ? id : en;
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-100, 100], [12, -12]), {
    stiffness: 200,
    damping: 20,
    });

    const rotateY = useSpring(useTransform(x, [-100, 100], [-12, 12]), {
    stiffness: 200,
    damping: 20,
    });

    const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
    };

    const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    };
    return (
        <section
            id="home"
            className="relative flex min-h-dvh items-center bg-white pt-24 sm:pt-28"
        >
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 text-center lg:order-1 lg:text-left"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 sm:mb-4 sm:text-sm">
                        {t.hero.greeting}
                    </p>
                    <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Muhammad Febri
                        <br />
                        <span className="text-blue-600">
                            Hermansyah.
                        </span>
                    </h1>
                    <div className="mt-4 text-xl font-bold text-gray-800 sm:mt-5 sm:text-2xl">
                        <TypeAnimation
                            sequence={[
                                t.hero.job1,
                                2000,
                                t.hero.job2,
                                2000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </div>
                    {/* Social */}
                    <div className="mt-5 flex justify-center gap-4 text-xl text-gray-500 sm:gap-5 sm:text-2xl lg:justify-start">
                        <a
                            href="https://github.com/whoisfebry"
                            className="transition hover:-translate-y-1 hover:text-black"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://instagram.com/fbrybme"
                            className="transition hover:-translate-y-1 hover:text-pink-500"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com/in/mfebrih"
                            className="transition hover:-translate-y-1 hover:text-blue-600"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-[17px] sm:leading-8 lg:mx-0">
                        {t.hero.description}
                    </p>
                    {/* Button */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                        <a
                            href="#projects"
                            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-700"
                        >
                            <Briefcase size={18} />
                            {t.hero.viewProjects}
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-[15px] font-semibold text-gray-700 transition duration-300 hover:border-blue-600 hover:text-blue-600"
                        >
                            <Mail size={18} />
                            {t.hero.contact}
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 relative mt-1 flex justify-center lg:order-2 lg:mt-0 lg:justify-end"
                >
                    {/* Glow */}
                    <div className="absolute -z-10 h-[260px] w-[260px] rounded-full bg-blue-500/20 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />
                    <motion.div
                        className="group relative"
                        style={{
                            rotateX,
                            rotateY,
                            transformPerspective: 1200,
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        >
                        {/* Card */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-[30px] border border-white/20 bg-[#081229] shadow-2xl"
                            >
                            {/* Foto */}
                            <Image
                                src="/images/hero1.png"
                                alt="Profile"
                                width={380}
                                height={520}
                                priority
                                className="h-[420px] w-[300px] object-cover sm:h-[520px] sm:w-[380px]"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                            {/* Nama */}
                            <div className="absolute left-0 right-0 top-5 px-4 text-center text-white sm:top-7 sm:px-6">
                                <h2 className="text-xl font-bold sm:text-2xl">
                                    {t.hero.title}
                                </h2>
                                <p className="mt-2 text-sm text-white/70">
                                    {t.hero.subtitle}
                                </p>
                            </div>
                            {/* Bottom Card */}
                            <div className="absolute bottom-4 left-3 right-3 flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:px-5 sm:py-3">
                                <div className="flex items-center gap-3">
                                    {/* Avatar Bulat */}
                                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-white/20 sm:h-12 sm:w-12">
                                        <Image
                                            src="/images/profil.webp"
                                            alt="avatar"
                                            width={48}
                                            height={48}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white sm:text-base">
                                            @fbrybme
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-xs text-white/80 sm:block">
                                                {t.hero.availableForWork}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#contact"
                                    className="rounded-full bg-white/20 px-3 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-white/30 sm:px-4 sm:text-sm"
                                >
                                    {t.hero.contact}
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}