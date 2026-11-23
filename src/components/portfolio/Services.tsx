import { SectionHeader } from "./SectionHeader";

const services = [
  {
    n: "01",
    title: "Web Development",
    line: "Building responsive, scalable, and high-performance web applications with modern frontend and backend technologies.",
    tags: ["Angular", "React.js", "Java", "Spring Boot", "Node.js"],
  },
  {
    n: "02",
    title: "Mobile App Development",
    line: "Developing cross-platform mobile applications with smooth performance and seamless user experiences.",
    tags: ["React Native", "Expo", "Swift", "Flutter"],
  },
  {
    n: "03",
    title: "UI/UX Design",
    line: "Designing intuitive, user-friendly, and visually appealing digital experiences focused on usability and accessibility.",
    tags: ["Wireframing", "Prototyping", "Figma", "Responsive Design"],
  },
];

export function Services() {
  return (
    <section
      className="px-6 py-20 md:px-12"
      style={{ backgroundImage: "var(--gradient-accent)" }}
    >
      <SectionHeader index="03" label="Services" right="Vision to Victory™" />

      <h2 className="mt-12 max-w-3xl text-5xl md:text-8xl reveal-on-scroll">FROM CONCEPT TO CODE.</h2>

      <div className="mt-16 space-y-4">
        {services.map((s) => (
          <div
            key={s.n}
            className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-transparent p-6 transition-all duration-400 hover:border-foreground/20 hover:bg-card/70 hover:shadow-lg md:grid-cols-[80px_1fr_1fr] md:items-start reveal-on-scroll"
          >
            <span className="font-mono text-2xl font-extrabold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {s.n}
            </span>
            <h3 className="text-2xl font-bold normal-case transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
              {s.title}
            </h3>
            <div>
              <p className="text-lg leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {s.line}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground/10"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}