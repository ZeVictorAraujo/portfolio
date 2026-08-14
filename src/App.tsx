import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sistema de Controle de Finanças",
    category: "Sistema",
    year: "2026",
    description: "Criado com o objetivo de melhorar o controle sobre seus gastos mensais.",
    language: "Java, Spring Boot, Angular"
  }
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

const skills = [
  "React & TypeScript",
  "Tailwind",
  "Node.js",
];

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
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Biblioteca
              </span>

              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Projetos
              </h2>
            </div>

            <span className="hidden text-sm tabular-nums text-muted-foreground sm:inline">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="divide-y divide-border">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between gap-6 py-10 transition-colors sm:flex-row sm:items-center"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex flex-col gap-2 sm:w-1/2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="uppercase tracking-widest">
                      {project.category}
                    </span>

                    <span className="tabular-nums">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-[#7c3aed]">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-[#7c3aed] sm:shrink-0">
                  <span className="text-muted-foreground transition-colors group-hover:text-[#7c3aed]">
                    Ver
                  </span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      activeProject === project.id
                        ? "translate-x-1"
                        : ""
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

              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
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
                <article
                  key={experience.id}
                  className="group relative pl-10"
                >
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
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Habilidades
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            O que faço
          </h2>

          <div className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className="group flex items-baseline gap-4"
              >
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
            Aberto a colaborações, freelas e conversas sobre design e tecnologia.
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
              className="transition-colors hover:text-[#7c3aed]"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/zevictoraraujo/"
              className="transition-colors hover:text-[#7c3aed]"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}