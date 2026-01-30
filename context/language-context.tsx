"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/data";

type Dict = Record<string, { pt: string; en: string }>;

const dictionary: Dict = {
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.projects": { pt: "Projetos", en: "Projects" },
  "nav.skills": { pt: "Skills", en: "Skills" },
  "nav.experience": { pt: "Experiência", en: "Experience" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  "intro.download": { pt: "Download CV", en: "Download CV" },

  "about.heading": { pt: "Sobre mim", en: "About me" },
  "about.p1": {
  pt: "Sou estudante de Análise e Desenvolvimento de Sistemas, focado em aplicar meus conhecimentos em projetos práticos, com atenção à organização do código, lógica e boas práticas de desenvolvimento.",
  en: "I’m an Analysis and Systems Development student focused on applying my knowledge in practical projects, with attention to code organization, logic, and development best practices.",
},

"about.p2": {
  pt: "Tenho interesse em desenvolvimento de sistemas e soluções digitais que resolvam problemas reais. Busco evoluir constantemente, aprendendo novas tecnologias e aprimorando minhas habilidades técnicas.",
  en: "I’m interested in system development and digital solutions that solve real problems. I’m constantly improving my skills and learning new technologies.",
},

"about.p3": {
  pt: "Fora do código, gosto de consumir conteúdos variados como filmes, leitura e atividades fisicas. Valorizo o aprendizado contínuo e acredito que a curiosidade é essencial para crescer na área de TI.",
  en: "Outside of coding, I enjoy consuming diverse content such as movies, reading, and physical activities. I value continuous learning and believe curiosity is essential for growth in tech.",
},

"about.card1.title": { pt: "Desenvolvimento", en: "Development" },
"about.card1.desc": {
  pt: "Lógica, organização de código e boas práticas.",
  en: "Logic, clean code, and best practices.",
},

"about.card2.title": { pt: "Aprendizado", en: "Learning" },
"about.card2.desc": {
  pt: "Evolução constante e adaptação a novas tecnologias.",
  en: "Continuous growth and adaptability to new technologies.",
},

"about.card3.title": { pt: "Objetivo", en: "Goal" },
"about.card3.desc": {
  pt: "Criar soluções úteis e funcionais.",
  en: "Building useful and functional solutions.",
},

"about.cta": {
  pt: "Se você procura alguém comprometido em aprender e evoluir na área de tecnologia, vamos conversar!",
  en: "If you’re looking for someone committed to learning and growing in tech, let’s talk!",
},

  "projects.heading": { pt: "Projetos", en: "Projects" },
  "projects.project": { pt: "Projeto", en: "Project" },
  "projects.active": { pt: "Ativo", en: "Active" },
  "projects.github": { pt: "GitHub", en: "GitHub" },
  "projects.demo": { pt: "Demo", en: "Demo" },

  "skills.heading": { pt: "Skills", en: "Skills" },

  "experience.heading": { pt: "Experiência", en: "Experience" },


  "contact.heading": { pt: "Vamos Conversar", en: "Let’s Talk" },
  "contact.subtitle": {
    pt: "Preencha o formulário ou fale comigo por uma das plataformas abaixo.",
    en: "Fill out the form or reach out through one of the platforms below.",
  },
  "contact.success": { pt: "Mensagem enviada com sucesso!", en: "Message sent successfully!" },
  "contact.name": { pt: "Seu nome", en: "Your name" },
  "contact.email": { pt: "Seu e-mail", en: "Your email" },
  "contact.message": { pt: "Me conte suas ideias XD", en: "Tell me your ideas XD" },
  "contact.find": { pt: "Ou me encontre por aqui!", en: "Or find me here!" },

  "submit.send": { pt: "Enviar", en: "Send" },

  "footer.home": { pt: "Início", en: "Home" },
  "footer.about": { pt: "Sobre", en: "About" },
  "footer.projects": { pt: "Projetos", en: "Projects" },
  "footer.skills": { pt: "Skills", en: "Skills" },
  "footer.experience": { pt: "Experiência", en: "Experience" },
  "footer.contact": { pt: "Contato", en: "Contact" },
  "footer.navHeading": { pt: "Navegação", en: "Navigation" },
  "footer.statusHeading": { pt: "Status", en: "Status" },
  "footer.role": { pt: "Back End Developer.", en: "Back End Developer." },
  "footer.statusLine": { pt: "Aberta a oportunidades e colaborações.", en: "Open to opportunities and collaborations." },
  "footer.statusBody": { pt: "Se você tem uma ideia ou projeto, vamos conversar!", en: "If you have an idea or a project, let’s talk!" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  "footer.made": { pt: "Feito com dedicação e cuidado.", en: "Made with dedication and care." },
  "footer.email": { pt: "Email", en: "Email" },

};

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored === "pt" || stored === "en") {
      setLang(stored);
      document.documentElement.lang = stored;
      return;
    }

    const browser = (navigator.language || "").toLowerCase();
    const initial: Lang = browser.startsWith("pt") ? "pt" : "en";
    setLang(initial);
    document.documentElement.lang = initial;
    window.localStorage.setItem("lang", initial);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "pt" ? "en" : "pt";
      window.localStorage.setItem("lang", next);
      document.documentElement.lang = next;
      return next;
    });
  };

  const t = useMemo(() => {
    return (key: string) => {
      const entry = dictionary[key];
      if (!entry) return key;
      return entry[lang];
    };
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, toggleLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) throw new Error("useLanguage must be used within a LanguageContextProvider");
  return context;
}