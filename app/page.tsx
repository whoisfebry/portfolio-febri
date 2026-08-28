"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Certificates from "@/components/section/Certificates";
import Experience from "@/components/section/Experience";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import ScrollToTop from "@/components/section/ScrollToTop";
import Preloader from "@/components/section/Preloader";
import ShapeGrid from "@/components/section/ShapeGrid";
import { Language } from "@/types";

export default function Home() {
    const [language, setLanguage] = useState<Language>("ID");

    return (
        <main className="portfolio-page">
            {/* BACKGROUND */}
            <div className="shapegrid-background">
                <ShapeGrid
                    squareSize={50}
                    borderColor="rgba(226, 232, 240, 0.65)"
                    hoverFillColor="rgba(255, 255, 255, 0.25)"
                />
            </div>

            {/* CONTENT */}
            <div className="portfolio-content">
                <Navbar language={language} setLanguage={setLanguage}/>
                <Hero language={language} />
                <About language={language} />
                <Skills language={language} />
                <Certificates language={language} />
                <Experience language={language} />
                <Projects language={language} />
                <Contact language={language} />
                <Footer language={language} />
                <Preloader />
                <ScrollToTop />
            </div>
        </main>
    );
}