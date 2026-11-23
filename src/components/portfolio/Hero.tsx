const services = [
  "Full Stack Web Development",
  "Frontend Development",
  "Backend & API Development",
  "Cloud Deployment & SEO Optimization",
];

const clients = ["Enterprise Systems",
  "POS & Retail",
  "FinTech Solutions",
  "Business Automation",
  "Management Systems",
  "Web Applications",];

export function Hero() {
  return (
    <section id="top" className="px-6 pt-28 pb-16 md:px-12 md:pt-32">
      <div className="flex items-center justify-between">
        <span className="label-mono">(©2023 - ©2026)</span>
        <span className="label-mono">Based in Sri Lanka</span>
      </div>

      <h1 className="mt-10 text-[15vw] leading-[0.82] md:text-[11.5vw] reveal-on-scroll">
        Developer<sup className="align-super text-[0.2em]">®</sup>
      </h1>

      {/* <div className="mt-6 flex flex-wrap items-end justify-between gap-6 reveal-on-scroll stagger-1">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="size-7 rounded-full border-2 border-background bg-foreground/25"
              />
            ))}
          </div>
          <div>
            <p className="text-sm font-bold">50+ Projects Delivered</p>
            <p className="label-mono">100% Client Satisfaction</p>
          </div>
        </div>
        <p className="text-2xl font-extrabold tracking-tight uppercase md:text-4xl">
         BUILDING MODERN DIGITAL SOLUTIONS
        </p>
      </div> */}

      <div className="mt-20 grid gap-10 md:grid-cols-2 reveal-on-scroll stagger-2">
        <p className="max-w-md text-lg leading-snug md:text-xl">
          I design,{" "}
          <span className="text-muted-foreground">develop</span>, and deploy scalable web applications that help businesses launch faster, automate workflows, and grow online.
        </p>
        <ul className="space-y-3 md:justify-self-end">
          {services.map((s, i) => (
            <li key={s} className="flex items-baseline gap-3">
              <span className="label-mono">0{i + 1})</span>
              <span className="text-base">{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-6">
        {clients.map((c) => (
          <span
            key={c}
            className="text-center text-xl font-extrabold tracking-tight uppercase"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}