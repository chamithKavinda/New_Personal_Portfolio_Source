import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", n: "01", href: "#top" },
  { label: "Projects", n: "02", href: "#projects" },
  { label: "Journal", n: "03", href: "#journal" },
  { label: "Contact", n: "04", href: "#contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ease-in-out md:px-12",
        isScrolled
          ? "border-b border-border/50 bg-background/75 py-4 shadow-xs backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent py-6"
      )}
    >
      <a href="#top" className="flex items-center gap-2">
        <span className="inline-block size-4 rounded-full border-4 border-foreground" />
        <span className="text-lg font-extrabold tracking-tight uppercase">Chamith</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="group flex items-start gap-1 text-[0.95rem] font-medium transition-opacity hover:opacity-60"
          >
            {l.label}
            <sup className="label-mono text-[0.55rem]">{l.n}</sup>
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden md:flex items-center gap-2 rounded-full bg-ink py-1.5 pr-5 pl-1.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
          +
        </span>
        Book a Call
      </a>
    </header>
  );
}