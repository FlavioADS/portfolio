import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import demoImg from "@/public/demo.png";
import honnepayImg from "@/public/honnepay.png";
import type { StaticImageData } from "next/image";

export type Lang = "pt" | "en";

export type SectionId = "home" | "about" | "projects" | "skills" | "experience" | "community" | "contact";

type Section = {
  id: SectionId;
  hash: string;
  label: { pt: string; en: string };
};

export const sections: readonly Section[] = [
  { id: "home", hash: "#home", label: { pt: "Início", en: "Home" } },
  { id: "about", hash: "#about", label: { pt: "Sobre", en: "About" } },
  { id: "projects", hash: "#projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "skills", hash: "#skills", label: { pt: "Skills", en: "Skills" } },
  { id: "experience", hash: "#experience", label: { pt: "Experiência", en: "Experience" } },
  { id: "contact", hash: "#contact", label: { pt: "Contato", en: "Contact" } },
];

export function getLinks(lang: Lang): Array<{ id: SectionId; hash: string; name: string }> {
  return sections.map((s) => ({ id: s.id, hash: s.hash, name: s.label[lang] }));
}

export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
};

export function getExperiencesData(lang: Lang): ExperienceItem[] {
  const pt: ExperienceItem[] = [
    {
      title: "Atendimento e Vendas – Comércio",
      location: "São Paulo, BR",
      description:
        "Atuação em comércio varejista (Luciene de Araujo Lima – Papelaria – ME), realizando atendimento direto ao cliente, vendas, precificação de produtos, controle e baixa de estoque no sistema, além da organização e manutenção do ambiente. Essa experiência desenvolveu habilidades de comunicação, responsabilidade e visão prática de negócio.",
      icon: React.createElement(CgWorkAlt),
      date: "2020",
    },
    {
      title: "Assistente Administrativo",
      location: "São Paulo, BR",
      description:
        "Atuei como Assistente Administrativo na Leite, Tosto e Barros Advogados, auxiliando em rotinas administrativas, controle de boletos, organização de documentos e apoio a processos internos. A experiência fortaleceu minhas habilidades organizacionais, trabalho em equipe e atenção aos detalhes.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2022 - Jun 2025",
    },
    {
      title: "Formação Acadêmica",
      location: "São Paulo, BR",
      description:
        "Estudante de Análise e Desenvolvimento de Sistemas no Senac Santo Amaro, com foco em lógica de programação, desenvolvimento de sistemas e fundamentos de tecnologia aplicados a soluções práticas.",
      icon: React.createElement(LuGraduationCap),
      date: "Ago 2024 - Atualmente",
    },
    {
      title: "Estagiário – Santander (URA)",
      location: "São Paulo, BR",
      description:
        "Atuo como estagiário no Santander, na Unidade de Resposta Audível (URA), apoiando operações de atendimento automatizado, análise de fluxos de atendimento e utilização de sistemas internos, com foco na eficiência operacional e na experiência do usuário.",
      icon: React.createElement(FaReact),
      date: "Jun 2025 - Atualmente",
    },
  ];

  const en: ExperienceItem[] = [
    {
      title: "Sales & Customer Service – Retail",
      location: "São Paulo, BR",
      description:
        "Worked in retail at Luciene de Araujo Lima – Papelaria – ME, handling direct customer service, sales, product pricing, inventory control through internal systems, and store organization. This experience strengthened my communication skills, responsibility, and business awareness.",
      icon: React.createElement(CgWorkAlt),
      date: "2020",
    },
    {
      title: "Administrative Assistant",
      location: "São Paulo, BR",
      description:
        "Worked as an Administrative Assistant at Leite, Tosto e Barros Advogados, supporting administrative routines, billing control, document organization, and internal process support. This role strengthened my organizational skills, teamwork, and attention to detail.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2022 - Jun 2025",
    },
    {
      title: "Academic Background",
      location: "São Paulo, BR",
      description:
        "Student of Analysis and Systems Development at Senac Santo Amaro, focused on programming logic, system development, and technology fundamentals applied to practical solutions.",
      icon: React.createElement(LuGraduationCap),
      date: "Aug 2024 - Present",
    },
    {
      title: "Intern – Santander (IVR)",
      location: "São Paulo, BR",
      description:
        "I work as an intern at Santander in the Interactive Voice Response (IVR) unit, supporting automated customer service operations, service flow analysis, and internal system usage, with a focus on operational efficiency and user experience.",
      icon: React.createElement(CgWorkAlt),
      date: "Jun 2025 - Present",
    },
  ];

  return lang === "pt" ? pt : en;
}

export type ProjectItem = {
  title: string;
  description: string;
  tags?: readonly string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  isExternal?: boolean;
};

export function getProjectsData(lang: Lang): ProjectItem[] {
  const pt: ProjectItem[] = [
    {
      title: "HonnePay",
      description:
        "Plataforma interativa de pagamentos instantâneos via Pix criada em equipa, que permite os usuários receberem contribuições de forma prática e visualmente envolvente. Com layouts personalizáveis, notificações em tempo real e suporte a mensagens, o projeto combina design moderno e tecnologia web para uma experiência dinâmica e divertida.",
      tags: ["EJS", "Tailwind CSS", "JavaScript"],
      imageUrl: honnepayImg,
      liveUrl: "https://honnepay.com/",
      isExternal: false,
    },
    {
      title: "Em Desenvolvimento",
      description: "Em Breve",
      imageUrl: demoImg,
      githubUrl: "https://github.com/flavioADS",
      liveUrl: "/demo",
      isExternal: false,
    },
    {
      title: "Em Desenvolvimento",
      description: "Em Breve",
      imageUrl: demoImg,
      githubUrl: "https://github.com/flavioADS",
      liveUrl: "/demo",
      isExternal: false,
    },
  ];

  const en: ProjectItem[] = [
    {
      title: "HonnePay",
      description:
        "An interactive instant-payment platform (Pix) built as a team project that lets users receive contributions in a practical and visually engaging way. With customizable layouts, real-time notifications, and message support, it blends modern design with web tech for a dynamic, fun experience.",
      tags: ["EJS", "Tailwind CSS", "JavaScript"],
      imageUrl: honnepayImg,
      liveUrl: "https://honnepay.com/",
      isExternal: false,
    },
    {
      title: "In Development",
      description: "Coming Soon",
      imageUrl: demoImg,
      githubUrl: "https://github.com/flavioADS",
      liveUrl: "/demo",
      isExternal: false,
    },
    {
      title: "In Development",
      description: "Coming Soon",
      imageUrl: demoImg,
      githubUrl: "https://github.com/flavioADS",
      liveUrl: "/demo",
      isExternal: false,
    },
  ];

  return lang === "pt" ? pt : en;
}

export function getSkillsData(lang: Lang): string[] {
  const common = [
    "Java",
    "JavaScript",
    "SQL",
    "APIs REST",
    "JDBC",
    "JUnit 5",
    "Cucumber",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "Jenkins",
    "Postman",
  ];

  const pt = [
    ...common,
    "Lógica de Programação",
    "Testes Automatizados",
    "Integração Contínua (CI/CD)",
    "Versionamento de Código",
    "Análise de Sistemas",
    "Ambientes Linux/Windows",
  ];

  const en = [
    ...common,
    "Programming Logic",
    "Automated Testing",
    "Continuous Integration (CI/CD)",
    "Code Versioning",
    "Systems Analysis",
    "Linux/Windows Environments",
  ];

  return lang === "pt" ? pt : en;
}