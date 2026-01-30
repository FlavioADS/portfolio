"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const { t } = useLanguage();

  const email = "flaviodearaujodosanjos1945@gmail.com";

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-24 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading>{t("contact.heading")}</SectionHeading>
          <p className="text-gray-600 dark:text-white/70 mt-2">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-2xl shadow-black/[0.08] dark:shadow-black/40 backdrop-blur-xl p-7 sm:p-10 lg:p-12">
          {/* Botão para enviar email */}
          <div className="flex justify-center mb-8">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold border border-black/10 dark:border-white/10 bg-black/90 dark:bg-white/10 text-white dark:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
            >
              {t("contact.sendEmail")}
            </a>
          </div>

          <div className="my-10 h-px bg-black/10 dark:bg-white/10" />

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-white/70">{t("contact.find")}</p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/flavioads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/flavioads/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/f_araaujo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm border border-black/10 dark:border-white/10 bg-white/5 text-black/70 dark:text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.06] dark:hover:shadow-black/40"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
