import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Nebula UI",
    category: "Design System",
    year: "2026",
    description: "Sistema de componentes acessível para aplicações em escala.",
  },
  {
    id: 2,
    title: "Aurora FM",
    category: "Web App",
    year: "2025",
    description: "Dashboard para gestão de frequência de rádios comunitárias.",
  },
  {
    id: 3,
    title: "Mono Type",
    category: "Identidade Visual",
    year: "2025",
    description: "Direção artística e tipografia para marca de café especial.",
  },
];

const experiences = [
  {
    id: 1,
    role: "Desenvolvedor Criativo Sênior",
    company: "Estúdio Nomad",
    period: "2024 — Presente",
    description: "Liderança de projetos digitais interativos, unindo design e engenharia para marcas globais.",
  },
  {
    id: 2,
    role: "Designer de Produto",
    company: "Fintech Aura",
    period: "2022 — 2024",
    description: "Criação de sistemas de design e fluxos financeiros acessíveis para milhões de usuários.",
  },
  {
    id: 3,
    role: "Desenvolvedor Front-end",
    company: "Agência Verve",
    period: "2019 — 2022",
    description: "Desenvolvimento de sites e aplicações web com foco em performance, motion e UX.",
  },
];

const skills = [
  "React & TypeScript",
  "Tailwind & Design Tokens",
  "UX/UI Design",
  "Motion Design",
  "Acessibilidade",
  "Node.js",
];

export default function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      {/* Global animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/40 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_var(--indigo-muted)_0%,_transparent_30%,_transparent_70%,_var(--indigo-muted)_100%)] opacity-8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,_var(--indigo-muted)_0%,_transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_35%,_var(--indigo)_0%,_transparent_45%)] opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_100%,_var(--indigo-muted)_0%,_transparent_55%)] opacity-30" />
        <div className="absolute inset-0 gradient-mesh opacity-50 animate-pulse-slow" />

        <div className="absolute -left-[15%] -top-[15%] h-[60vh] w-[60vh] rounded-full bg-indigo/20 blur-[120px] animate-float" />
        <div className="absolute right-[0%] top-[20%] h-[65vh] w-[65vh] rounded-full bg-indigo-muted/25 blur-[140px] animate-float-delayed" />
        <div className="absolute left-[15%] top-[50%] h-[55vh] w-[55vh] rounded-full bg-indigo/20 blur-[120px] animate-float" style={{ animationDelay: "-6s" }} />
        <div className="absolute -right-[15%] bottom-[0%] h-[60vh] w-[60vh] rounded-full bg-indigo-muted/25 blur-[140px] animate-float-delayed" style={{ animationDelay: "-12s" }} />
        <div className="absolute left-[0%] bottom-[30%] h-[50vh] w-[50vh] rounded-full bg-indigo/20 blur-[100px] animate-float" style={{ animationDelay: "-18s" }} />

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      </div>




      {/* Hero — Split Screen */}
      <section className="relative grid min-h-screen lg:grid-cols-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,_var(--indigo-muted)_0%,_transparent_40%)] opacity-40" />


        <div className="relative z-10 flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
          <span className="mb-8 inline-block w-fit text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Disponível para projetos
          </span>
          <h1 className="text-balance text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl xl:text-8xl">
            Alex
            <br />
            <span className="font-light text-primary">Rivera</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvedor criativo que transforma ideias complexas em interfaces simples, acessíveis e com personalidade.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#projetos"
              className="group inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-7 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Falar comigo
            </a>
          </div>
        </div>

        <div className="relative min-h-[50vh] overflow-hidden lg:min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2/3 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>
        </div>

      </section>

      {/* Projects */}
      <section id="projetos" className="relative px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Selecionados</span>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">Projetos</h2>
            </div>
            <span className="hidden text-sm tabular-nums text-muted-foreground sm:inline">{String(projects.length).padStart(2, "0")}</span>
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
                    <span className="uppercase tracking-widest">{project.category}</span>
                    <span className="tabular-nums">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary">{project.title}</h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary sm:shrink-0">
                  <span className="text-muted-foreground transition-colors group-hover:text-primary">Ver</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-300 ${activeProject === project.id ? "translate-x-1" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experiencia" className="relative px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Trajetória</span>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">Experiências</h2>
            </div>
            <span className="hidden text-sm tabular-nums text-muted-foreground sm:inline">{String(experiences.length).padStart(2, "0")}</span>
          </div>

          <div className="relative max-w-3xl">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-16">
              {experiences.map((experience) => (
                <article key={experience.id} className="group relative pl-10">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/60 transition-colors group-hover:bg-primary" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {experience.company}
                    </span>
                    <span className="text-xs tabular-nums text-muted-foreground">{experience.period}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium tracking-tight transition-colors group-hover:text-primary">
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
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Habilidades</span>
          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">O que faço</h2>
          <div className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <div key={skill} className="group flex items-baseline gap-4">
                <span className="text-xs tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-light transition-colors group-hover:text-primary">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="relative px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contato</span>
          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">Vamos criar algo juntos?</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Aberto a colaborações, freelas e conversas sobre design e tecnologia.
          </p>
          <a
            href="mailto:oi@alexrivera.dev"
            className="mt-12 inline-block text-lg font-light text-primary transition-colors hover:text-primary-foreground"
          >
            oi@alexrivera.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-xs tracking-widest text-muted-foreground">© 2026 ALEX RIVERA</span>
          <div className="flex items-center gap-8 text-xs tracking-widest text-muted-foreground">
            <a href="https://github.com" className="transition-colors hover:text-foreground" target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href="https://linkedin.com" className="transition-colors hover:text-foreground" target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
            <a href="https://dribbble.com" className="transition-colors hover:text-foreground" target="_blank" rel="noreferrer">
              DRIBBBLE
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

