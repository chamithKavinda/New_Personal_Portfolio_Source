import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with smooth momentum physics
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Smooth scroll for hash links (#top, #projects, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        if (href === "#top") {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element as HTMLElement, { offset: -70, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Enable scroll reveal animations
    document.documentElement.classList.add("reveal-init");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const observeAll = () => {
      const elementsToReveal = document.querySelectorAll(
        ".reveal-on-scroll, .reveal-scale"
      );
      elementsToReveal.forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer.observe(el);
        }
      });
    };

    observeAll();

    const timer = setTimeout(observeAll, 200);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("click", handleAnchorClick);
      observer.disconnect();
      lenis.destroy();
      document.documentElement.classList.remove("reveal-init");
    };
  }, []);

  return null;
}
