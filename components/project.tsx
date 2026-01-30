"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags?: readonly string[];
  imageUrl: StaticImageData;
  githubUrl: string;
};

export default function Project({
  title,
  description,
  tags = [],
  imageUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      data-cursor="view"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-white/70 dark:bg-white/10
          border border-black/5 dark:border-white/10
          shadow-[0_18px_45px_rgba(0,0,0,0.10)]
          transition-all duration-300
          hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]
        "
      >
        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-black/55 opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
          >
            <span className="text-white text-sm font-semibold tracking-wide">
              Ver no GitHub →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-3 text-gray-700 dark:text-white/70 leading-relaxed">
            {description}
          </p>

          {tags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  className="
                    rounded-full px-3 py-1.5 text-[0.72rem]
                    uppercase tracking-wider
                    bg-[#101c3d] text-white
                    dark:bg-white/10 dark:text-white
                  "
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Light effect */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]
            dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]
          "
        />
      </div>
    </motion.a>
  );
}
