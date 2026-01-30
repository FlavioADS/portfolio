"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import SectionHeading from "./section-heading";
import { getProjectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useLanguage } from "@/context/language-context";

type ProjectItem = {
  title: string;
  description: string;
  tags?: readonly string[];
  imageUrl: StaticImageData;
  githubUrl: string;
};

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

function SpotlightCard({ item }: { item: ProjectItem }) {
  return (
    <a
      href={item.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative"
      data-cursor="view"
    >
      <div
        className="
          bg-gray-100 dark:bg-white/10
          border border-black/5 dark:border-white/10
          rounded-2xl shadow-xl overflow-hidden
          transition-all duration-300
          hover:shadow-2xl
        "
      >
        <div className="relative h-64 w-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-black/60 opacity-0
              group-hover:opacity-100
              transition
            "
          >
            <span className="text-white text-sm font-semibold tracking-wide">
              Ver no GitHub →
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-white/70">
            {item.description}
          </p>

          {item.tags && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <li
                  key={i}
                  className="text-xs px-3 py-1 rounded-full
                             bg-black/5 dark:bg-white/10
                             text-gray-700 dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const { ref: inViewRef } = useSectionInView("projects", 0.45);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { lang, t } = useLanguage();

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  const items = useMemo(
    () => getProjectsData(lang) as unknown as ProjectItem[],
    [lang]
  );

  const total = items.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 40,
    mass: 0.8,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useMotionValueEvent(p, "change", (latest) => {
    const idx = clamp(Math.floor(latest * total), 0, total - 1);
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  });

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const active = items[activeIndex];

  const labels = useMemo(
    () => ({
      project: t("projects.project"),
      active: t("projects.active"),
    }),
    [t]
  );

  return (
    <section
      ref={setRefs}
      id="projects"
      className="py-10 md:py-16 lg:py-20 scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <SectionHeading>{t("projects.heading")}</SectionHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Lista lateral */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex flex-col gap-2">
                {items.map((item, i) => {
                  const isActive = i === activeIndex;

                  return (
                    <motion.button
                      key={i}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      whileTap={{ scale: 0.98 }}
                      className={[
                        "text-left rounded-2xl px-4 py-4 transition border",
                        "bg-white/70 dark:bg-white/5",
                        "border-black/5 dark:border-white/10",
                        "hover:shadow-lg",
                        isActive
                          ? "shadow-lg ring-2 ring-black/10 dark:ring-white/15 opacity-100"
                          : "opacity-80 hover:opacity-100",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[0.72rem] uppercase tracking-widest text-gray-500 dark:text-white/40">
                            {labels.project}{" "}
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                            {item.title}
                          </h4>
                        </div>

                        <motion.span
                          animate={{ opacity: isActive ? 1 : 0 }}
                          className="text-xs font-semibold text-gray-700 dark:text-white/70"
                        >
                          {labels.active}
                        </motion.span>
                      </div>

                      <p className="mt-2 text-sm text-gray-600 dark:text-white/60 line-clamp-2">
                        {item.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card ativo */}
          <div className="lg:col-span-8">
            <div className="lg:sticky lg:top-28">
              {active && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <SpotlightCard item={active} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
