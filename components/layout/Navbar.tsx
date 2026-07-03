"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants/navItems";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

interface NavbarProps {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export default function Navbar({
    language, setLanguage, 
    }: NavbarProps) {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);
    const t = language === "ID" ? id : en;
    const getLabel = (key: keyof typeof t.navbar) => t.navbar[key];

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-80px 0px -60% 0px",
                threshold: 0,
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-6 left-1/2 z-50 w-full -translate-x-1/2 px-4">
            <div className="mx-auto max-w-6xl">
                {/* Navbar */}
                <nav className="flex h-[62px] items-center justify-between rounded-full border border-gray-200 bg-white px-6 shadow-lg">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-extrabold tracking-tight">
                        MFH<span className="text-blue-600">.</span>
                    </Link>
                    {/* Desktop Menu */}
                    <ul className="hidden items-center gap-2 lg:flex">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.key}>
                                    <a
                                        href={item.href}
                                        onClick={() => setActive(item.key)}
                                        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-medium transition-all duration-300 ${active === item.key
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Icon size={17} />
                                        {getLabel(item.key as keyof typeof t.navbar)}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    {/* Right */}
                    <div className="flex items-center gap-3">
                        {/* Desktop Language */}
                        <div className="hidden items-center rounded-full border border-gray-200 bg-gray-50 p-1 lg:flex">
                            <button
                                onClick={() => setLanguage("ID")}
                                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${language === "ID"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600 hover:text-black"
                                    }`}
                            >
                                ID
                            </button>
                            <button
                                onClick={() => setLanguage("EN")}
                                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${language === "EN"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600 hover:text-black"
                                    }`}
                            >
                                EN
                            </button>
                        </div>
                        {/* Mobile Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="rounded-full p-2 transition hover:bg-gray-100 lg:hidden"
                        >
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "mt-3 max-h-[500px]" : "max-h-0"
                        }`}
                >
                    <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-lg">
                        <ul className="space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.key}>
                                        <a
                                            href={item.href}
                                            onClick={() => {
                                                setActive(item.key);
                                                setOpen(false);
                                            }}
                                            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition ${active === item.key
                                                ? "bg-blue-600 text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            <Icon size={18} />
                                            {getLabel(item.key as keyof typeof t.navbar)}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="my-4 border-t border-gray-200"></div>
                        <div className="flex rounded-full border border-gray-200 p-1">
                            <button
                                onClick={() => setLanguage("ID")}
                                className={`flex-1 rounded-full py-2 text-sm font-medium transition ${language === "ID"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600"
                                    }`}
                            >
                                Indonesia
                            </button>
                            <button
                                onClick={() => setLanguage("EN")}
                                className={`flex-1 rounded-full py-2 text-sm font-medium transition ${language === "EN"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600"
                                    }`}
                            >
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}