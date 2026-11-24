import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    week: "Week 1",
    title: "Discovery & Planning",
    body: "I understand project requirements, identify business needs, and define the right technical approach to build a successful solution.",
  },
  {
    week: "Week 2-4",
    title: "Design & Architecture",
    body: "I create intuitive UI/UX designs, plan application architecture, and structure databases to ensure a scalable and user-friendly experience.",
  },
  {
    week: "Week 5",
    title: "Development & Testing",
    body: "I transform designs into functional applications, develop frontend and backend systems, integrate APIs, and perform thorough testing.",
  },
  {
    week: "Week 6",
    title: "Deployment & Support",
    body: "I deploy applications, optimize performance, resolve issues, and provide ongoing maintenance to keep systems running smoothly.",
  },
];

export function Process() {
  return (
    <section className="px-6 py-20 md:px-12">
      <SectionHeader index="05" label="Methodology" right="How I Work" />

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_460px] md:items-end reveal-on-scroll">
        <h2 className="text-6xl md:text-8xl">
          My Development
          <br />
          Process
        </h2>
        <p className="hidden md:block text-lg leading-snug">
          From understanding your vision to delivering reliable digital solutions, I follow a structured development process focused on <b>quality, performance,</b> and user experience.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <article
            key={s.title}
            className={`group relative overflow-hidden rounded-2xl border border-foreground/15 bg-card/70 p-6 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:shadow-xl hover:shadow-foreground/5 reveal-on-scroll stagger-${i + 1}`}
          >
            {/* Top accent glow line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {steps.map((_, j) => (
                  <span
                    key={j}
                    className={`size-2 rounded-full transition-all duration-300 ${
                      j === i
                        ? "bg-foreground scale-110"
                        : "bg-foreground/20 group-hover:bg-foreground/35"
                    }`}
                  />
                ))}
              </div>
              <span className="label-mono font-bold transition-colors duration-300 group-hover:text-foreground">
                {s.week}
              </span>
            </div>
            <h3 className="mt-8 text-xl font-bold normal-case transition-transform duration-300 group-hover:translate-x-1">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              {s.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}