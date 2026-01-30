import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import demoImg from "@/public/demo.png";
import bankSecureImg from "@/public/bankSecure.png";
import VelvetImg from "@/public/Velvet.png";
import type { StaticImageData } from "next/image";

export type Lang = "pt" | "en";

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "community"
  | "contact";

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

export function getLinks(lang: Lang) {
  return sections.map((s) => ({
    id: s.id,
    hash: s.hash,
    name: s.label[lang],
  }));
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
        "Atuação em comércio varejista, realizando atendimento ao cliente, vendas, precificação de produtos, controle de estoque e organização do ambiente.",
      icon: React.createElement(CgWorkAlt),
      date: "2020",
    },
    {
      title: "Assistente Administrativo",
      location: "São Paulo, BR",
      description:
        "Atuei como Assistente Administrativo na Leite, Tosto e Barros Advogados, auxiliando em rotinas administrativas, controle de boletos e organização de documentos.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2022 - Jun 2025",
    },
    {
      title: "Formação Acadêmica",
      location: "São Paulo, BR",
      description:
        "Estudante de Análise e Desenvolvimento de Sistemas no Senac Santo Amaro, com foco em lógica de programação e desenvolvimento de sistemas.",
      icon: React.createElement(LuGraduationCap),
      date: "Ago 2024 - Atualmente",
    },
    {
      title: "Estagiário – Santander (URA)",
      location: "São Paulo, BR",
      description:
        "Atuo como estagiário no Santander na Unidade de Resposta Audível (URA), apoiando operações de atendimento automatizado e análise de fluxos.",
      icon: React.createElement(FaReact),
      date: "Jun 2025 - Atualmente",
    },
  ];

  const en: ExperienceItem[] = [
    {
      title: "Sales & Customer Service – Retail",
      location: "São Paulo, BR",
      description:
        "Worked in retail handling customer service, sales, pricing, inventory control, and store organization.",
      icon: React.createElement(CgWorkAlt),
      date: "2020",
    },
    {
      title: "Administrative Assistant",
      location: "São Paulo, BR",
      description:
        "Worked as an Administrative Assistant supporting billing control, document organization, and internal processes.",
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2022 - Jun 2025",
    },
    {
      title: "Academic Background",
      location: "São Paulo, BR",
      description:
        "Student of Analysis and Systems Development focused on programming logic and system development.",
      icon: React.createElement(LuGraduationCap),
      date: "Aug 2024 - Present",
    },
    {
      title: "Intern – Santander (IVR)",
      location: "São Paulo, BR",
      description:
        "Intern at Santander working with IVR systems, service flow analysis, and operational efficiency.",
      icon: React.createElement(FaReact),
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
  githubUrl: string;
};

export function getProjectsData(lang: Lang): ProjectItem[] {
  const pt: ProjectItem[] = [
    {
      title: "Bank Secure",
      description:
        "Projeto de seguros desenvolvido ao final de seis meses de capacitação em parceria entre F1RST Digital Services, Santander Brasil e FIAP, utilizando Java, testes automatizados, CI/CD e práticas modernas de desenvolvimento.",
      tags: ["Java", "JDBC", "JUnit5", "Docker", "CI/CD", "Cucumber", "Jenkins", "Git Hub Actions"],
      imageUrl: bankSecureImg,
      githubUrl: "https://github.com/FlavioADS/Bank-Secure",
    },
    {
      title: "Velvet-Slice",
      description:
        "Projeto de gestão de vendas de bolo desenvolvido em equipe durante o curso de Análise e Desenvolvimento de Sistemas no Senac, utilizando Java e Spring Boot e focando em boas práticas de programação backend.",
      tags: ["Java", "Spring Boot", "Maven", "H2 Database", "HTML", "CSS", "JavaScript"],
      imageUrl: VelvetImg,
      githubUrl: "https://github.com/FlavioADS/Velvet-Slice",
    },
    {
      title: "Em Desenvolvimento",
      description: "Em breve",
      imageUrl: demoImg,
      githubUrl: "https://github.com/FlavioADS",
    },
  ];

  const en: ProjectItem[] = [
    {
      title: "Bank Secure",
      description:
        "Insurance project developed after six months of training in partnership with F1RST Digital Services, Santander Brazil, and FIAP, using Java, automated testing, CI/CD, and modern development practices.",
      tags: ["Java", "JDBC", "JUnit5", "Docker", "CI/CD", "Cucumber", "Jenkins", "GitHub Actions"],
      imageUrl: bankSecureImg,
      githubUrl: "https://github.com/FlavioADS/Bank-Secure",
    },
    {
      title: "Velvet-Slice",
      description:
        "Cake sales management project developed as a team during the Systems Analysis and Development course at Senac, using Java and Spring Boot, with a focus on backend best practices.",
      tags: ["Java", "Spring Boot", "Maven", "H2 Database", "HTML", "CSS", "JavaScript"],
      imageUrl: VelvetImg,
      githubUrl: "https://github.com/FlavioADS/Velvet-Slice",
    },
    {
      title: "In Development",
      description: "Coming Soon",
      imageUrl: demoImg,
      githubUrl: "https://github.com/FlavioADS",
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
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "JUnit 5",
    "Jenkins",
  ];

  const pt = [
    ...common,
    "Lógica de Programação",
    "Testes Automatizados",
    "Integração Contínua (CI/CD)",
    "Análise de Sistemas",
  ];

  const en = [
    ...common,
    "Programming Logic",
    "Automated Testing",
    "Continuous Integration (CI/CD)",
    "Systems Analysis",
  ];

  return lang === "pt" ? pt : en;
}
