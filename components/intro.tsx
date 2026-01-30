"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import Magnetic from "@/components/magnetic";

function shouldFloat() {
  if (typeof window === "undefined") return false;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const small = window.matchMedia("(max-width: 640px)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !coarse && !small && !reduced;
}

export default function Intro() {
  const { lang, t } = useLanguage();
  const { ref } = useSectionInView("home", 0.5);
  const [float, setFloat] = useState(false);

  useEffect(() => {
    const update = () => setFloat(shouldFloat());
    update();

    const mq1 = window.matchMedia("(pointer: coarse)");
    const mq2 = window.matchMedia("(max-width: 640px)");
    const mq3 = window.matchMedia("(prefers-reduced-motion: reduce)");

    mq1.addEventListener("change", update);
    mq2.addEventListener("change", update);
    mq3.addEventListener("change", update);

    return () => {
      mq1.removeEventListener("change", update);
      mq2.removeEventListener("change", update);
      mq3.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 scroll-mt-[100rem] flex flex-col sm:flex-row items-center justify-between gap-8 px-4 sm:px-16"
    >
      <motion.div
        className="flex-1 flex justify-center sm:justify-start"
        initial={{ opacity: 0, y: 0 }}
        animate={float ? { opacity: 1, y: ["0%", "-5%", "0%"] } : { opacity: 1, y: 0 }}
        transition={
          float
            ? {
                opacity: { duration: 0.45, delay: 0.08 },
                y: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
              }
            : { opacity: { duration: 0.45, delay: 0.08 } }
        }
      >
        <Image
          src="/flavio.png"
          alt="Flávio"
          width={400}
          height={400}
          quality={85}
          priority
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
          className="rounded-full object-cover shadow-2xl"
        />
      </motion.div>

      <motion.div
        className="flex-1 text-center sm:text-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.45 }}
      >
        <h1 className="mb-6 text-2xl sm:text-4xl font-medium !leading-[1.5]">
          {lang === "pt" ? (
            <>
              <span className="font-bold">Olá!</span> Sou <span className="font-bold">Flávio de Araújo Silva</span>.
            </>
          ) : (
            <>
              <span className="font-bold">Hi!</span> I&apos;m <span className="font-bold">Flávio de Araújo Silva</span>.
            </>
          )}
        </h1>

        <h2 className="mb-6 text-2xl sm:text-2xl font-medium !leading-[1.5]">
          {lang === "pt" ? (
            <>
              Desenvolvedor em formação, com foco em <span className="font-bold">análise, lógica de programação e desenvolvimento de sistemas</span>.
            </>
          ) : (
            <>
              Developer in training, focused on <span className="font-bold"> problem solving, programming logic, and system development</span>.
            </>
          )}
        </h2>

        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-lg font-medium mt-4">
  <Magnetic strength={0.35}>
    <a
      className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      href="/cv.pdf"
      download
    >
      {t("intro.download")} <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>
  </Magnetic>

  <Magnetic strength={0.22}>
    <a
      className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://github.com/flavioADS"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  </Magnetic>

  <Magnetic strength={0.22}>
    <a
      className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://www.linkedin.com/in/flavioads"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin />
    </a>
  </Magnetic>
</div>

      </motion.div>
    </section>
  );
}