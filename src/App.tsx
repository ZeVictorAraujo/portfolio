import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import financeDashboard from "./assets/personal-finance-home.png";

function Github({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>;
}
function Linkedin({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
}

const skills = [
  ["Desenvolvimento", "React, TypeScript, Next.js, Node.js e C#"],
  ["Banco de dados", "MySQL, PostgreSQL e Supabase"],
  ["Servidores", "Windows Server: AD, GPO, DNS e DHCP; Linux: SSH, permissões e serviços"],
  ["Redes e segurança", "TCP/IP, VLANs, Wi-Fi, firewall, NAT e VPN"],
  ["Infraestrutura", "Hyper-V, VMware, backup e recuperação de dados"],
  ["Suporte e gestão", "Chamados N1/N2, AGHUSE, Power BI, Excel, Kanban e Scrum"],
];

export default function App() {
  const imageDialog = useRef<HTMLDialogElement>(null);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Navegação principal">
          <a href="#inicio" className="font-mono text-xl font-bold" aria-label="Ir ao início">
            VA<span className="text-primary">.</span>
          </a>
          <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground sm:gap-8 sm:text-sm">
            <a className="hidden transition-colors hover:text-foreground sm:block" href="#inicio">Início</a>
            <a className="transition-colors hover:text-foreground" href="#projetos">Projetos</a>
            <a className="hidden transition-colors hover:text-foreground sm:block" href="#experiencia">Trajetória</a>
            <a className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground" href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <dialog ref={imageDialog} aria-labelledby="image-dialog-title" className="image-dialog" onClick={(event) => {
        if (event.target === event.currentTarget) imageDialog.current?.close();
      }}>
        <div className="image-dialog-panel">
          <div className="image-dialog-header">
            <h2 id="image-dialog-title">Home do Personal.fin</h2>
            <button type="button" onClick={() => imageDialog.current?.close()} className="image-dialog-close">Fechar ×</button>
          </div>
          <img src={financeDashboard} alt="Home do Personal.fin ampliada, com dados de demonstração" width={1440} height={1301} className="image-dialog-image" />
        </div>
      </dialog>
      <main id="conteudo">
        <section id="inicio" className="mx-auto flex min-h-[92svh] max-w-6xl items-center px-5 pb-16 pt-28 sm:px-8">
          <div className="min-w-0 w-full max-w-5xl animate-enter">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-primary">
              <span className="size-2 rounded-full bg-primary shadow-status" />
              Disponível para projetos
            </div>
            <h1 className="text-balance text-[clamp(1.75rem,8vw,3rem)] font-bold leading-[1.05] sm:text-7xl lg:text-8xl">
              Victor Araújo
              <span className="mt-2 block text-[0.75em] leading-tight text-gradient">Desenvolvimento & TI</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Atuo com suporte e infraestrutura de TI e desenvolvo aplicações web. Conecto a experiência com servidores, redes e sistemas às soluções que construo com código.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ["01/", "Desenvolvimento web"],
                ["02/", "Infraestrutura"],
                ["03/", "Suporte e sistemas"],
              ].map(([number, label]) => (
                <div key={number} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
                  <span className="font-mono text-sm text-secondary">{number}</span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
            <a href="#projetos" className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              Explorar trabalho <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="projetos" className="scroll-mt-24 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 font-mono text-xs font-bold uppercase text-primary">Projeto em destaque / 2026</p>
                <h2 className="text-3xl font-bold sm:text-4xl">Personal.fin — Controle financeiro</h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">01 — Projeto pessoal</span>
            </div>

            <article className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-panel lg:grid-cols-[1.15fr_0.85fr]">
              <figure className="flex min-w-0 flex-col justify-center bg-surface p-4 sm:p-6">
                <button type="button" onClick={() => imageDialog.current?.showModal()} aria-haspopup="dialog" aria-label="Ampliar captura da Home do Personal.fin" className="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-border transition-opacity hover:opacity-90">
                  <img src={financeDashboard} alt="Home do Personal.fin com saldo mensal, total das faturas, gráficos de entradas e saídas e tabela de resumo mensal" width={1440} height={1301} loading="lazy" className="block h-auto w-full" />
                </button>
                <figcaption className="mt-3 text-center text-xs text-muted-foreground">Home do Personal.fin · Dados de demonstração · Clique para ampliar</figcaption>
              </figure>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="mb-7 flex flex-wrap gap-2">
                  {["Next.js", "Material UI", "Supabase", "TypeScript"].map((tech) => (
                    <span key={tech} className="rounded border border-border px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground">{tech}</span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Aplicação pessoal para acompanhar receitas, despesas e faturas em um só lugar. Desenvolvida com Next.js e Supabase, com autenticação e permissões de acesso validadas no banco de dados.
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {["Visão mensal e gráficos comparativos de 3, 6 ou 12 meses", "Movimentações com categorias, filtros e exportação CSV", "Faturas com divisão de gastos por responsável", "Compartilhamento com permissões de leitura e edição"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-secondary" />{item}
                    </li>
                  ))}
                </ul>
                <a href="https://personalfin.zevictoraraujo.com.br/" target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-primary hover:text-primary-foreground">
                  Acessar projeto <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a href="https://github.com/ZeVictorAraujo/personal-finance" target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Github className="size-4" aria-hidden="true" /> Ver código no GitHub</a>
              </div>
            </article>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-24 border-y border-border bg-section px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-20 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="mb-10 font-mono text-xs font-bold uppercase text-primary">Experiência profissional</p>
              <div className="relative border-l border-border pl-8">
                <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <p className="font-mono text-xs uppercase text-muted-foreground">Policlínica Regional de Saúde de Alagoinhas</p>
                    <h3 className="mt-2 text-2xl font-bold">Técnico de TI</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">Out. 2025 — Atual</span>
                </div>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  Atuação pela Master Serviços na administração de servidores e redes, políticas de segurança, monitoramento de sistemas e CFTV. Atendimento N2 e resolução de incidentes, manutenção de estações e apoio à implantação, operação e suporte do AGHUSE em ambiente hospitalar.
                </p>
              </div>
              <div className="mt-12 rounded-xl border border-border bg-card p-6">
                <h2 className="font-mono text-xs font-bold uppercase text-primary">Formação acadêmica</h2>
                <h3 className="mt-5 font-semibold">Análise e Desenvolvimento de Sistemas</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tecnólogo · UNOPAR / Anhanguera · Cursando</p>
                <h3 className="mt-5 font-semibold">Técnico em Desenvolvimento de Sistemas</h3>
                <p className="mt-1 text-sm text-muted-foreground">SENAI Alagoinhas · Fev. 2023 — Dez. 2024 · Concluído</p>
              </div>
            </div>

            <div className="md:col-span-5">
              <p className="mb-10 font-mono text-xs font-bold uppercase text-primary">Habilidades técnicas</p>
              <div className="divide-y divide-border border-y border-border">
                {skills.map(([skill, detail], index) => (
                  <div key={skill} className="flex items-center justify-between py-5">
                    <div className="pr-5"><h3 className="font-semibold">{skill}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p></div>
                    <span className="font-mono text-xs text-secondary">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-16">
            <p className="font-mono text-xs font-bold uppercase opacity-75">Contato</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">Vamos criar algo juntos?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg opacity-80">Aberto a oportunidades, projetos e conversas sobre desenvolvimento, infraestrutura e tecnologia.</p>
            <a href="mailto:josearaujo.ba@hotmail.com" className="mx-auto mt-9 inline-flex max-w-full items-center justify-center gap-2 break-all rounded-lg bg-background px-4 sm:px-6 py-3.5 font-bold text-foreground transition-transform hover:-translate-y-0.5">
              <Mail className="size-4" aria-hidden="true" /> josearaujo.ba@hotmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p>© 2026 Victor Araújo</p>
          <div className="flex gap-6 font-mono text-xs uppercase">
            <a href="https://github.com/ZeVictorAraujo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Github className="size-4" aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/zevictoraraujo/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin className="size-4" aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}