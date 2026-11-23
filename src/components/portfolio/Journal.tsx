import { SectionHeader } from "./SectionHeader";
import j1 from "@/assets/journal-scale.jpg";
import j2 from "@/assets/journal-architecture.jpg";
import j3 from "@/assets/journal-frontend.jpg";

const posts = [
  {
    n: "001",
    title: "Optimizing Database Performance",
    description:
      "How to identify bottlenecks, use efficient caching, and design data models that handle high traffic without breaking.",
    tag: "Database & Cloud",
    img: j1,
  },
  {
    n: "002",
    title: "Choosing the Right Architecture",
    description:
      "Deciding when to start simple and when to break your application into distributed services for optimal growth.",
    tag: "Architecture",
    img: j2,
  },
  {
    n: "003",
    title: "Building Seamless UX",
    description:
      "Best practices for turning complex designs into fast, accessible, and responsive user interfaces that delight users.",
    tag: "UI/UX & Frontend",
    img: j3,
  },
];

export function Journal() {
  return (
    <section
      id="journal"
      className="px-6 py-20 md:px-12"
      style={{ backgroundImage: "var(--gradient-accent)" }}
    >
      <SectionHeader index="07" label="Journal" right="Stay Informed" />

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_460px] md:items-end reveal-on-scroll">
        <h2 className="text-6xl md:text-8xl">
          Latest
          <br />
          Insights
        </h2>
        <p className="text-lg leading-snug">
          Dive into tech trends, development strategies, and industry insights to help you build scalable digital products.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {posts.map((p, i) => (
          <article
            key={p.n}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 p-5 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:shadow-2xl reveal-on-scroll stagger-${i + 1} ${
              i === 2 ? "md:-mt-12" : ""
            }`}
          >
            {/* Top accent glow line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image with zoom effect */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-foreground/5">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={900}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 rounded-full border border-foreground/20 bg-background/80 px-2.5 py-1 text-[0.65rem] font-mono uppercase text-foreground backdrop-blur-md">
                {p.tag}
              </div>
            </div>

            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-foreground">
                <span className="label-mono mr-2 text-muted-foreground">{p.n}</span>
                {p.title}
              </h3>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}