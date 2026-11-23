import { useState, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import faqImage from "@/assets/faq.jpg";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "What is your typical turnaround time?",
    a: "Timelines depend on the project's complexity and scope. A standard web application MVP typically takes 4–6 weeks, while enterprise-level systems or complex API integrations may require a few months. I always provide a clear, phased roadmap before development begins.",
  },
  {
    q: "Do you offer custom design solutions?",
    a: "Yes. I build custom, from-scratch applications tailored specifically to your business logic. Instead of relying on rigid templates, I design scalable databases and robust backends (using technologies like ASP.NET Core and Entity Framework) to ensure your system performs exactly how you need it to.",
  },
  {
    q: "What industries do you specialize in?",
    a: "I develop solutions across a variety of domains, including health and fitness platforms, business management systems, and SaaS products. My full-stack expertise allows me to adapt quickly to the unique technical requirements and regulatory needs of any industry.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Absolutely. As a full-stack developer, I manage the entire application lifecycle. I build secure, high-performance APIs and databases on the backend, and connect them to responsive, intuitive user interfaces on the frontend for a complete, end-to-end solution.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, deployment is just the beginning. I offer ongoing maintenance, server monitoring, bug fixes, and feature scaling to ensure your application remains secure and performs optimally as your user base grows.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  // Close active card on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
      }
    };
    if (open !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <section className="relative px-6 py-20 md:px-12">
      {/* Dimmed ambient backdrop overlay */}
      <div
        onClick={() => setOpen(null)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open !== null
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <SectionHeader index="06" label="FAQ" right="Got Questions?" />

      <div className="mt-12 grid gap-10 md:grid-cols-[340px_1fr]">
        <div className="relative z-50">
          <img
            src={faqImage}
            alt="FAQ illustration"
            loading="lazy"
            width={900}
            height={1000}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <p className="mt-6 text-lg leading-snug">
            From concept to deployment. Clean code, scalable architecture, and seamless user experiences.
          </p>
        </div>

        <ul className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "z-50 border-foreground/30 bg-card p-7 shadow-2xl ring-2 ring-foreground/15 scale-[1.01]"
                    : open !== null
                    ? "z-10 border-foreground/10 bg-card/40 opacity-40 hover:opacity-60"
                    : "z-10 border-foreground/15 bg-card/65 hover:border-foreground/35 hover:bg-card/90 hover:shadow-md"
                }`}
              >
                {isOpen ? (
                  /* Active state: Answer text + close X button */
                  <div className="flex w-full items-start justify-between gap-6 animate-in fade-in zoom-in-98 duration-200">
                    <p className="text-base md:text-lg leading-relaxed text-foreground font-normal">
                      {f.a}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(null);
                      }}
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all hover:bg-foreground hover:text-background hover:scale-110 cursor-pointer"
                      aria-label="Close answer"
                    >
                      <X className="size-4.5" />
                    </button>
                  </div>
                ) : (
                  /* Inactive state: Question text + Plus button */
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-expanded={false}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-foreground/95 transition-colors duration-200 group-hover:text-foreground">
                      {f.q}
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground/10 group-hover:scale-105">
                      <Plus className="size-4.5" />
                    </span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
