const contactLinks = [
  { label: "musichound.ge@gmail.com", href: "mailto:musichound.ge@gmail.com" },
  {
    label: "linkedin.com/in/igor-chudnov",
    href: "https://linkedin.com/in/igor-chudnov/",
    external: true
  },
  { label: "+447735362677", href: "tel:+447735362677" }
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Sotheby's International Realty",
    description: "Luxury real estate company",
    period: "October 2023 - Present",
    tenure: "2 years 5 months",
    bullets: [
      "Led the development of three micro-frontend applications (for realty card, main page and search page).",
      "Introduced E2E testing practices with Playwright and integrated them into the CI/CD pipeline, reducing runtime errors by 37%.",
      "Designed and implemented a UI Kit library and Storybook, accelerating feature development by 40%.",
      "Implemented dynamic Open Graph preview generation using SSR, enabling seamless content sharing in WhatsApp, Facebook, Viber, and other social networks."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Bluebird International",
    description: "International IT solutions provider",
    period: "September 2020 - October 2023",
    tenure: "3 years 2 months",
    bullets: [
      "Led migration from legacy React SPA to Next.js SSR architecture, achieving scores in green zone across all Core Web Vitals, which contributed to a ~15% increase in CTR.",
      "Mentored a team of 2 Junior Frontend Developers, guiding them on task breakdown and establishing efficient workflows.",
      "Developed 20+ pixel-perfect UI components for a shared design system, actively collaborating with designers to improve UI/UX.",
      "Built and maintained frontend infrastructure, including internal npm modules, cutting code duplication by 20%."
    ]
  }
];

const skills = [
  "Languages: JavaScript, TypeScript, HTML, AJAX",
  "Frameworks & Libraries: React, Next.js, Vue, Vue Router, Tailwind CSS",
  "State & Data Management: Redux Toolkit, Pinia, GraphQL, REST API",
  "Tooling & Build Systems: Vite, Webpack, Docker, Git",
  "Testing: Jest, Cypress, Playwright",
  "Styling & Design: SCSS, CSS, Figma",
  "Concepts: Performance Optimization, SSR, SPA, PWA, CI/CD, Responsive Design, Micro Frontends, Agile (Scrum, Kanban)"
];

export default function App() {
  return (
    <main className="min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:flex md:justify-center md:px-6 md:py-12">
      <article className="resume-page w-full max-w-4xl rounded-2xl px-4 py-6 sm:px-5 sm:py-7 md:rounded-3xl md:px-12 md:py-11">
        <header className="border-b border-slate-200 pb-5 md:pb-6">
          <h1 className="resume-title text-[1.72rem] font-black uppercase leading-tight tracking-[0.05em] text-slate-900 md:text-4xl">
            Igor Chudnov
          </h1>
          <p className="mt-2 text-[0.95rem] font-semibold text-slate-700 md:text-lg">
            Senior Frontend Engineer | React, Vue
          </p>
          <ul className="mt-4 flex flex-col items-start gap-y-2 text-sm text-slate-600 md:flex-row md:flex-wrap md:items-center md:gap-x-3 md:gap-y-1 md:text-[15px]">
            {contactLinks.map((item, index) => (
              <li key={item.label} className="flex items-center gap-x-3 leading-tight">
                <a
                  className="resume-link break-all transition-colors hover:text-slate-900 md:break-normal"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {item.label}
                </a>
                {index < contactLinks.length ? <span className="hidden text-slate-400 md:inline">|</span> : null}
              </li>
            ))}
            <li className="font-medium text-slate-700">Georgia</li>
          </ul>
        </header>

        <section className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700 md:mt-7 md:text-base">
          <p>
            Frontend Developer with 5+ years of experience building scalable enterprise and business
            web applications.
          </p>
          <p>
            Strong expertise in JavaScript and TypeScript ecosystems, primarily working with React,
            Next.js, and Vue. Experienced in performance optimization, SSR migrations, and improving
            Core Web Vitals for high-traffic systems.
          </p>
          <p>Focused on scalable architecture, maintainability, and measurable product impact.</p>
        </section>

        <section className="mt-7 md:mt-9">
          <h2 className="resume-section-title">Experience</h2>
          <div className="mt-4 space-y-7 md:space-y-8">
            {experience.map((position) => (
              <article key={`${position.company}-${position.period}`}>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-base font-bold leading-snug text-slate-900 md:text-lg">
                    {position.role}, {position.company}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 md:text-sm">
                    {position.period} • {position.tenure}
                  </p>
                </div>
                <p className="mt-1 text-xs italic text-slate-500 md:text-sm">{position.description}</p>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-700 marker:text-slate-400 md:pl-5 md:text-[15px]">
                  {position.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 md:mt-9">
          <h2 className="resume-section-title">Education</h2>
          <div className="mt-4 space-y-1 text-sm text-slate-700 md:text-base">
            <p className="font-semibold text-slate-900">Aviation Institute of Maintenance</p>
            <p>Master&apos;s Degree, Automation Technology Engineer | 2015-2017</p>
          </div>
        </section>

        <section className="mt-7 md:mt-9">
          <h2 className="resume-section-title">Skills</h2>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-700 marker:text-slate-400 md:pl-5 md:text-[15px]">
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-7 md:mt-9">
          <h2 className="resume-section-title">Languages</h2>
          <p className="mt-4 text-sm text-slate-700 md:text-base">English C1</p>
        </section>
      </article>
    </main>
  );
}
