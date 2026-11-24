const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chamith-kavinda-880330282/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/chamithKavinda",
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/ChamithKavinda_",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:chamith13kavinda@gmail.com",
    external: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/94762106834",
    external: true,
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink px-6 pt-24 pb-10 text-background md:px-12">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-w-0 reveal-on-scroll">
          <p className="font-mono text-xs tracking-[0.18em] uppercase opacity-60">
            Lets talk
          </p>
          <a
            href="https://wa.me/94762106834"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block font-mono text-sm opacity-80 transition-opacity hover:opacity-100"
          >
            (+94) 76 210 6834
          </a>
          <a
            href="mailto:chamith13kavinda@gmail.com"
            className="mt-3 block break-all text-[clamp(12px,4.2vw,18px)] font-extrabold tracking-tight uppercase md:text-3xl lg:text-5xl"
          >
            chamith13kavinda@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-items-end reveal-on-scroll stagger-1">
          <ul className="space-y-3 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="opacity-80 transition-opacity hover:opacity-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-3 text-sm">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mt-24 text-[16vw] leading-[0.8] text-background reveal-scale">
        Chamith<sup className="align-super text-[0.15em]">®</sup>
      </h2>

      <div className="mt-10 flex flex-wrap justify-between gap-4 font-mono text-[0.65rem] tracking-[0.15em] uppercase opacity-60">
        <span>Created by : Chamith Kavinda</span>
        <span>©2026 Chamith. All rights reserved.</span>
      </div>
    </footer>
  );
}