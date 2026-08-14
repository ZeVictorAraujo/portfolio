import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sistema de Controle de Finanças",
    category: "Sistema",
    year: "2026",
    description:
      "Criado com o objetivo de melhorar o controle sobre seus gastos mensais.",
    language: ["Java", "Spring Boot", "Angular"],
  },
  {
    id: 2,
    title: "Teste",
    category: "Teste",
    year: "2026",
    description: "hh",
    language: ["Java", "Spring Boot", "Angular"],
  },
];

const experiences = [
  {
    id: 1,
    role: "Técnico de TI",
    company: "Policlinica Regional de Saude de Alagoinhas",
    period: "2025 — Presente",
    description:
      "Suporte técnico, manutenção de hardware, redes, infraestrutura, controle de acessos, segurança da informação e gestão de ativos de TI.",
  },
];

const skills = ["React & TypeScript", "Tailwind", "Node.js"];

export default function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      {/* Hero — Split Screen */}
      <section className="relative flex min-h-screen items-center px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        {/* Fundo roxo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_#7c3aed_0%,_transparent_45%)] opacity-40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <span className="mb-8 inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#7c3aed]/80">
            Disponível para projetos
          </span>

          <h1 className="text-balance text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl xl:text-8xl">
            Victor
            <span className="font-light text-[#7c3aed]"> Araujo</span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvedor FullStack | DevOps | Analista de TI
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#projetos"
              className="group inline-flex items-center justify-center rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-7 py-3 text-sm font-medium text-[#7c3aed] transition-all hover:bg-[#7c3aed] hover:text-white"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 hover:text-[#7c3aed]"
            >
              Falar comigo
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projetos"
        className="relative px-6 py-28 sm:px-12 lg:px-16 xl:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex items-end justify-between gap-6">
            <div>
              <h2 className="mt-4 text-[#7c3aed] font-light tracking-tight sm:text-4xl ">
                Projetos
              </h2>
            </div>
          </div>

          <div className="divide-y divide-border">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group grid grid-cols-1 gap-6 py-10 transition-colors sm:grid-cols-[1fr_1fr_auto] sm:items-stretch"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Projeto */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="uppercase tracking-widest">
                      {project.category}
                    </span>

                    <span className="tabular-nums">{project.year}</span>
                  </div>

                  <h3 className="mt-2 text-2xl font-medium tracking-tight transition-colors group-hover:text-[#7c3aed]">
                    {project.title}
                  </h3>
                </div>

                {/* Descrição + tecnologias */}
                <div className="flex min-h-[82px] flex-col justify-between">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.language.map((language) => (
                      <span
                        key={language}
                        className="inline-flex items-center justify-center rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition-all hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 hover:text-[#7c3aed]"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ver projeto */}
                <div className="flex items-end justify-end text-sm font-medium text-[#7c3aed]">
                  <a
                    className="text-muted-foreground transition-colors group-hover:text-[#7c3aed] cursor-pointer"
                    href="https://controlese.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver
                  </a>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      activeProject === project.id ? "translate-x-1" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        id="experiencia"
        className="relative px-6 py-28 sm:px-12 lg:px-16 xl:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Trajetória
              </span>

              <h2 className="mt-4 text-[#7c3aed] font-light tracking-tight sm:text-4xl">
                Experiências
              </h2>
            </div>

            <span className="hidden text-sm tabular-nums text-muted-foreground sm:inline">
              {String(experiences.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative max-w-3xl">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-16">
              {experiences.map((experience) => (
                <article key={experience.id} className="group relative pl-10">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#7c3aed]/60 transition-colors group-hover:bg-[#7c3aed]" />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {experience.company}
                    </span>

                    <span className="text-xs tabular-nums text-muted-foreground">
                      {experience.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-medium tracking-tight transition-colors group-hover:text-[#7c3aed]">
                    {experience.role}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative border-y border-border px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mt-4 text-[#7c3aed] font-light tracking-tight sm:text-4xl">
            Habilidades
          </h2>

          <div className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <div key={skill} className="group flex items-baseline gap-4">
                <span className="text-xs tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-lg font-light transition-colors group-hover:text-[#7c3aed]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contato"
        className="relative px-6 py-28 sm:px-12 lg:px-16 xl:px-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contato
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            Vamos criar algo juntos?
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Aberto a colaborações, freelas e conversas sobre design e
            tecnologia.
          </p>

          <a
            href="mailto:josearaujo.ba@hotmail.com"
            className="mt-12 inline-block text-lg font-light text-[#7c3aed] transition-colors hover:text-white"
          >
            josearaujo.ba@hotmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-xs tracking-widest text-muted-foreground">
            © 2026 Victor Araujo
          </span>

          <div className="flex items-center gap-8 text-xs tracking-widest text-muted-foreground">
            <a
              href="https://github.com/zevictoraraujo"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#7c3aed]"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/zevictoraraujo/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#7c3aed]"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
