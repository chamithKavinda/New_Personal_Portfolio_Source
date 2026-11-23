import { SectionHeader } from "./SectionHeader";
import testimonial from "@/assets/testimonial.jpg";

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:px-12">
      <SectionHeader index="06" label="Testimonial" right="Our Value" />

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_460px] md:items-start">
        <h2 className="text-6xl md:text-8xl">
          Client
          <br />
          Experience
        </h2>
        <p className="text-lg leading-snug">
          Hear directly from clients who achieved remarkable results.{" "}
          <span className="text-muted-foreground">Trusted</span> by innovators who turned
          bold visions into successful products.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <img
          src={testimonial}
          alt="Client portrait"
          loading="lazy"
          width={900}
          height={1200}
          className="h-full w-full object-cover"
        />

        <div className="flex flex-col gap-6">
          <div className="flex-1 bg-card p-6">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="size-7 rounded-full border-2 border-card bg-foreground/25"
                />
              ))}
            </div>
            <h3 className="mt-6 text-lg leading-tight">
              Real brands. Real impact. Zero compromises.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pixel-perfect design, lightning-fast performance, and seamless scalability —
              every project delivered on time. No fluff. Just results.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-extrabold">99%</p>
                <p className="label-mono">Uptime guarantee</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">&lt;1S</p>
                <p className="label-mono">Average load time</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 bg-card p-6">
            <div>
              <p className="text-3xl font-extrabold">+62%</p>
              <p className="label-mono">Lead increase rate</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">+48%</p>
              <p className="label-mono">Average conversions</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 bg-card p-6">
            <div>
              <p className="text-3xl font-extrabold">+2%</p>
              <p className="label-mono">Client revenue</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">+87%</p>
              <p className="label-mono">Active launches</p>
            </div>
          </div>
          <blockquote
            className="flex flex-1 flex-col justify-between p-6"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            <p className="text-lg leading-snug">
              <span className="mb-4 block text-3xl leading-none text-muted-foreground">
                ”
              </span>
              Our old website was slow and confusing. Chamith stepped in, completely
              reimagined our UX, and built a lightning-fast site. Our bounce rate dropped
              instantly and engagement{" "}
              <span className="text-muted-foreground">skyrocketed</span>.
            </p>
            <footer className="mt-10 flex items-center gap-3">
              <span className="size-9 rounded-full bg-foreground/25" />
              <div>
                <p className="text-sm font-semibold">Emma Rodriguez</p>
                <p className="label-mono">Founder &amp; CEO @ Lumora</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}