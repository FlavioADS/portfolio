"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useLanguage();

  const email = "flaviodearaujodosanjos1945@gmail.com";

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {t("contact.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          {t("contact.subtitle")}
        </p>

        <a
          href={`mailto:${email}`}
          className="
            inline-block mb-8 px-6 py-3
            bg-[#AA9D8D] text-white font-semibold
            rounded-xl shadow-lg
            hover:bg-[#977f70] transition
          "
        >
          {t("contact.sendEmail")}
        </a>

        <div className="flex justify-center gap-6 text-gray-700 dark:text-gray-300">
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-1">Flávio</span>
            <a href={`mailto:${email}`} className="underline hover:text-gray-900 dark:hover:text-white">
              {email}
            </a>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://github.com/FlavioADS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/flavioaraujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white mt-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/flavioaraujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white mt-2"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
