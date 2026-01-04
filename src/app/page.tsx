const skills = [
  "System Design",
  "REST APIs",
  "Testing",
  "Python", "C++", "SQL", "JSONata", "C", "JavaScript", "Rust",
  "AWS", "Docker", "Git", "CI/CD","OAuth"
];

const links = [
  { label: "Email", href: "mailto:arsenii@arseniigulevich.com" },
  { label: "GitHub", href: "https://github.com/arseniigulevich" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arsenii-gulevich-79611926b/",
  },
];

export default function Home() {
  return (
    <main className="bg-grid">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 md:py-16">
        <section className="pixel-card overflow-hidden p-8 md:p-10">
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-lg border border-sky-400/60 bg-sky-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100 shadow-[3px_3px_0_0_#020617]">
                Available for projects
              </span>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div
                  className="pixel-avatar flex-shrink-0"
                  aria-label="Portrait"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(56,189,248,0.16), rgba(165,180,252,0.16)), url('/assets/face.jpeg')",
                  }}
                />
                <div className="space-y-2 sm:flex-1 sm:min-w-0">
                  <h1 className="pixel-font text-2xl text-sky-200 md:text-3xl">Arsenii Gulevich</h1>
                  <p className="text-lg font-semibold text-slate-100 md:text-xl">
                    Software Developer with interest in system design crafting performant apps.
                  </p>
                </div>
              </div>
              <div className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Software Engineer and Data Analyst experienced in LLMs and classical ML, Cloud Computing, Docker, Agile Software Development, and Data/Knowledge Management Visualisation, Observability.
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="pixel-chip">Remote-friendly</span>
                <span className="pixel-chip">Fast iterations</span>
                <span className="pixel-chip">Full-stack capable</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="pixel-button" href="mailto:arsenii@arseniigulevich.com">
                  Email
                </a>
                <a
                  className="pixel-button"
                  href="https://github.com/arseniigulevich"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="pixel-button"
                  href="https://www.linkedin.com/in/arsenii-gulevich-79611926b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-5 rounded-xl border border-sky-400/30 bg-slate-900/60 p-6 shadow-[4px_4px_0_0_#020617] backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="pixel-font text-xs text-sky-100">Toolkit</p>
                <span className="rounded-md bg-sky-400/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100">
                  Build ready
                </span>
              </div>
              <div className="pixel-divider" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill} className="pixel-chip justify-center text-slate-100">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="pixel-divider" />
              <div className="space-y-2 text-sm text-slate-200">
                <p className="pixel-font text-xs text-sky-200">Highlights</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="pixel-font text-[10px] text-sky-200">01</span>
                    <span>Ship production-grade features with polish and tests.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="pixel-font text-[10px] text-sky-200">02</span>
                    <span>Experienced with ML and Natural Language Processing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="pixel-font text-[10px] text-sky-200">03</span>
                    <span>A team player with a passion for clear docs, fast feedback loops.</span>
                  </li>
                                    <li className="flex items-start gap-2">
                    <span className="pixel-font text-[10px] text-sky-200">04</span>
                    <span>Advocate for "Care Personally while Challenging Directly".</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


      </div>
    </main>
  );
}
