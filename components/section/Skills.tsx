"use client";

import { motion } from "framer-motion";
import id from "@/locales/id";
import en from "@/locales/en";
import { Language } from "@/types";

const topRowSkills = [
  {
    name: "Microsoft Excel",
    img: "https://img.icons8.com/color/96/microsoft-excel-2019.png",
  },
  {
    name: "Microsoft Word",
    img: "https://img.icons8.com/color/96/microsoft-word-2019.png",
  },
  {
    name: "Microsoft PowerPoint",
    img: "https://img.icons8.com/color/96/microsoft-powerpoint-2019.png",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "XAMPP",
    img: "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg",
  },
  {
    name: "Power BI",
    img: "https://img.icons8.com/color/96/power-bi.png",
  },
  {
    name: "Tableau",
    img: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  {
    name: "Postman",
    img: "https://cdn.simpleicons.org/postman/FF6C37",
  },
  {
    name: "Visual Studio Code",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const bottomRowSkills = [
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Bootstrap",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "CodeIgniter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  },
  {
    name: "Laravel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

interface SkillsProps {
  language: Language;
}

export default function Skills({ language }: SkillsProps) {
  const t = language === "ID" ? id : en;
  // Dibuat 4x agar marquee benar-benar mulus
  const multipliedTop = [
    ...topRowSkills,
    ...topRowSkills,
    ...topRowSkills,
    ...topRowSkills,
  ];

  const multipliedBottom = [
    ...bottomRowSkills,
    ...bottomRowSkills,
    ...bottomRowSkills,
    ...bottomRowSkills,
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {t.skills.title}
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:mt-4 sm:text-4xl md:text-5xl">
            {t.skills.heading}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              {t.skills.accent}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-base leading-7 text-gray-600 sm:mt-5 sm:px-0 sm:text-lg sm:leading-8">
            {t.skills.description}
          </p>
        </motion.div>

        {/* Container */}
        <div className="relative mt-10 overflow-hidden rounded-3xl sm:mt-16">
          {/* Fade kiri */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:block" />

          {/* Fade kanan */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:block" />

          {/* ================= ROW 1 ================= */}
          <div className="flex overflow-hidden py-4">
            <div className="animate-marquee flex shrink-0 items-center gap-5">
              {multipliedTop.map((skill, index) => (
                <SkillCard key={`top-${index}`} skill={skill} />
              ))}
            </div>

            <div className="animate-marquee flex shrink-0 items-center gap-5">
              {multipliedTop.map((skill, index) => (
                <SkillCard key={`top-copy-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* ================= ROW 2 ================= */}
          <div className="mt-4 flex overflow-hidden py-3 sm:mt-6 sm:py-4">
            <div className="animate-marquee-reverse flex shrink-0 items-center gap-5">
              {multipliedBottom.map((skill, index) => (
                <SkillCard key={`bottom-${index}`} skill={skill} />
              ))}
            </div>

            <div className="animate-marquee-reverse flex shrink-0 items-center gap-5">
              {multipliedBottom.map((skill, index) => (
                <SkillCard key={`bottom-copy-${index}`} skill={skill} />
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              from {
                transform: translate3d(0,0,0);
              }

              to {
                transform: translate3d(-50%,0,0);
              }
            }

            @keyframes marqueeReverse {
              from {
                transform: translate3d(-50%,0,0);
              }

              to {
                transform: translate3d(0,0,0);
              }
            }

            .animate-marquee{
              animation: marquee 28s linear infinite;
              will-change: transform;
            }

            .animate-marquee-reverse{
              animation: marqueeReverse 28s linear infinite;
              will-change: transform;
            }

            .animate-marquee:hover,
            .animate-marquee-reverse:hover{
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
}: {
  skill: {
    name: string;
    img: string;
  };
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group flex min-w-fit cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all duration-300 hover:border-blue-500 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-4"
    >
      <img
        src={skill.img}
        alt={skill.name}
        className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
      />

      <span className="whitespace-nowrap text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-blue-600 sm:text-[15px]">
        {skill.name}
      </span>
    </motion.div>
  );
}
