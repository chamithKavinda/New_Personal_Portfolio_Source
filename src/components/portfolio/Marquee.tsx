const items = [
  "Web Development",
  "Angular",
  "Java",
  "MERN Stack",
  "Next.js",
  "AWS",
  "MySql",
  "Firebase",
  "Figma",
  "GitHub",
  "GitLab",
  "MongoDB",
  "Spring Boot",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-foreground bg-ink py-3 text-background">
      <div className="marquee-track flex w-max gap-12 pr-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[0.18em] uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}