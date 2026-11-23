import { SectionHeader } from "./SectionHeader";

const stats = [
  {
    value: "Full Stack",
    label: "Web Application Development",
  },
  {
    value: "React & Angular",
    label: "Frontend Development & UI Engineering",
  },
  {
    value: "REST APIs",
    label: "Backend Development & System Integration",
  },
];

export function Stats() {
  return (
    <section
      className="px-6 py-16 md:px-12"
      style={{ backgroundImage: "var(--gradient-sky)" }}
    >
      <SectionHeader index="01" label="Brand Excellence" right="© 2026" />

      <div className="mt-14 grid gap-10 md:grid-cols-[280px_1fr] md:gap-16 reveal-on-scroll">
        <div className="flex flex-col items-start">
          <p className="text-[5.5rem] font-extrabold leading-none tracking-tighter md:text-[7rem]">
            DEV<span className="text-primary">.</span>
          </p>

          <p className="label-mono mt-4 uppercase">
            Design • Develop • Deploy
          </p>

          <div className="mt-8 h-px w-20 bg-foreground/30" />

          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base">
            Passionate about building modern digital
            experiences through clean code, thoughtful
            design, and practical software engineering.
          </p>
        </div>
        <h2 className="text-3xl md:text-6xl">
          3+ YEARS OF BUILDING SCALABLE WEB APPLICATIONS, CUSTOM APPS, AND 
          <span className="text-muted-foreground">
              {" "}HIGH PERFORMANCE 
            </span> DIGITAL PRODUCTS.
        </h2>
      </div>

      {/* Skills Statistics */}
      <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`group relative overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 p-7 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:bg-card hover:shadow-xl reveal-on-scroll stagger-${index + 1}`}
          >
            {/* Top accent glow line on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Number */}
            <span className="label-mono font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              0{index + 1} / EXPERTISE
            </span>

            {/* Main Value */}
            <p className="mt-6 text-3xl font-extrabold tracking-tight transition-transform duration-300 group-hover:-translate-y-1 md:text-4xl">
              {stat.value}
            </p>

            {/* Description */}
            <p className="label-mono mt-4 uppercase text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 flex flex-col justify-between gap-4 border-t border-foreground/20 pt-6 md:mt-20 md:flex-row md:items-center">
        <p className="label-mono uppercase text-muted-foreground">
          Always Learning. Always Building.
        </p>

        <p className="label-mono uppercase text-muted-foreground">
          Developer • Sri Lanka
        </p>
      </div>
    </section>
  );
}