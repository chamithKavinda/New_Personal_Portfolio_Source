import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Stats } from "@/components/portfolio/Stats";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Faq } from "@/components/portfolio/Faq";
import { Journal } from "@/components/portfolio/Journal";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chamith Kavinda — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Chamith Kavinda: brand identity, art direction and high-performance web design for marketing and B2B teams.",
      },
      { property: "og:title", content: "Chamith Kavinda — Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Chamith Kavinda: brand identity, art direction and high-performance web design for marketing and B2B teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full overflow-x-clip">
      <SmoothScroll />
      <Nav />
      <div style={{ backgroundImage: "var(--gradient-hero)" }}>
        <Hero />
      </div>
      <Marquee />
      <Stats />
      <Projects />
      <Services />
      <Process />
      {/* <Testimonials /> */}
      <Faq />
      <Journal />
      <Footer />
    </main>
  );
}
