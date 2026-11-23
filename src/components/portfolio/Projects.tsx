import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import projectJustBookIt from "@/assets/project-justbookit.jpg";
import projectDineNow from "@/assets/project-dinenow.jpg";
import projectCredify from "@/assets/project-credify.jpg";
import projectSports from "@/assets/project-sports.jpg";
import projectCurtains from "@/assets/project-curtains.jpg";
import projectSessionPro from "@/assets/project-sessionpro.jpg";
import projectCoffeeShop from "@/assets/project-coffeeshop.jpg";
import projectGreenShadow from "@/assets/project-greenshadow.jpg";

interface Project {
  n: string;
  title: string;
  category: string;
  year: string;
  img: string;
  metric: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    n: "01",
    title: "JustBookIt",
    category: "Full Stack Hotel Reservation",
    year: "2025",
    img: projectJustBookIt,
    metric: "MERN Stack Engine",
    description:
      "Full-stack hotel reservation platform built with MongoDB, Express, React, and Node.js. Features hotel discovery, intuitive booking management, secure user authentication, and dedicated customer & admin dashboards.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth"],
  },
  {
    n: "02",
    title: "DineNow",
    category: "Food Delivery & Ordering",
    year: "2025",
    img: projectDineNow,
    metric: "Stripe Online Payments",
    description:
      "Full-stack food delivery web application allowing users to browse interactive restaurant menus, place orders, and pay securely via Stripe. Includes an administrative control center for menu and order lifecycle management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
  },
  {
    n: "03",
    title: "Credify",
    category: "AI Review Authentication",
    year: "2026",
    img: projectCredify,
    metric: "NLP AI Fake Review Detection",
    description:
      "Vibrant Angular UI and Java Spring Boot backend combating deceptive online reviews. Leverages Python NLP modules and MongoDB to authenticate consumer feedback, score trust, and filter fraudulent content in real time.",
    tags: ["Angular", "Spring Boot", "Python NLP", "MongoDB", "REST APIs"],
  },
  {
    n: "04",
    title: "Sports Facilities Booking",
    category: "Municipal Resource Management",
    year: "2025",
    img: projectSports,
    metric: "Conflict-Free Scheduling",
    description:
      "Web-based database application designed for municipal sports councils to streamline bookings across tennis courts, soccer pitches, and basketball gyms, eliminating scheduling conflicts via a centralized portal.",
    tags: ["Web Database", "Resource Booking", "Management Portal", "SQL"],
  },
  {
    n: "05",
    title: "Liyanage Curtains",
    category: "Bespoke Business Portfolio",
    year: "2025",
    img: projectCurtains,
    metric: "High-Conversion Showcase",
    description:
      "Modern and responsive business portfolio website for Liyanage Curtain. Features bespoke drapery showcases, interactive product galleries, client testimonials, and a streamlined customer consultation inquiry system.",
    tags: ["React", "UI/UX Design", "Product Gallery", "Tailwind CSS"],
  },
  {
    n: "06",
    title: "SessionPRO Backend",
    category: "Conference & Event API",
    year: "2025",
    img: projectSessionPro,
    metric: "JWT Auth & Live Telemetry",
    description:
      "Scalable backend architecture for conference session coordination built with Node.js, Express, and MySQL. Implements JWT security, attendee tracking, speaker scheduling, live notifications, and attendee feedback aggregation.",
    tags: ["Node.js", "Express.js", "MySQL", "JWT Auth", "REST API"],
  },
  {
    n: "07",
    title: "Coffee Shop POS",
    category: "Retail Point of Sale",
    year: "2024",
    img: projectCoffeeShop,
    metric: "Touchscreen Order Billing",
    description:
      "Comprehensive Coffee Shop Point of Sale system developed with Java EE and responsive web technologies. Connects frontend interfaces with backend REST APIs and MySQL for high-speed CRUD operations, menu management, and receipt billing.",
    tags: ["Java EE", "JavaScript", "MySQL", "REST APIs", "CRUD Engine"],
  },
  {
    n: "08",
    title: "Green Shadow Farm Management",
    category: "Agricultural Crop Monitoring",
    year: "2025",
    img: projectGreenShadow,
    metric: "Enterprise Agriculture ERP",
    description:
      "Comprehensive agricultural management system built for Green Shadow (Pvt) Ltd. Tracks root crops and cereals, field mapping, staff workforce logs, machinery fleet telemetry, and monitoring logs for scalable international operations.",
    tags: ["Crop Monitoring", "Fleet Telemetry", "Staff Logs", "Enterprise ERP"],
  },
];

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(projects.length);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap() + 1);
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  // Enable horizontal swipe with trackpad / mouse scroll
  // Enable horizontal swipe with trackpad / standard mouse scroll
  useEffect(() => {
    if (!api) return;

    const root = api.rootNode();
    if (!root) return;

    let accumulatedDelta = 0;
    let isScrolling = false;
    let resetTimer: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      // Prioritize deltaX for trackpads/Shift+scroll, fallback to deltaY for standard mouse wheels
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (Math.abs(delta) > 4) {
        accumulatedDelta += delta;

        // Prevent standard vertical page scroll only if the carousel has room to swipe
        if (
          (delta > 0 && api.canScrollNext()) ||
          (delta < 0 && api.canScrollPrev())
        ) {
          e.preventDefault();
        }

        if (!isScrolling && Math.abs(accumulatedDelta) >= 18) {
          if (accumulatedDelta > 0 && api.canScrollNext()) {
            api.scrollNext();
          } else if (accumulatedDelta < 0 && api.canScrollPrev()) {
            api.scrollPrev();
          }
          isScrolling = true;
          accumulatedDelta = 0;

          // Adjust timeout to make consecutive scrolling feel smooth
          setTimeout(() => {
            isScrolling = false;
          }, 240);
        }

        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          accumulatedDelta = 0;
        }, 250);
      }
    };

    root.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      root.removeEventListener("wheel", onWheel);
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, [api]);

  return (
    <section id="projects" className="overflow-hidden px-6 py-20 md:px-12">
      <SectionHeader index="02" label="Creative Development" right="Featured Works" />

      {/* Header and Controls */}
      <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end reveal-on-scroll">
        <div>
          <span className="label-mono uppercase text-muted-foreground">
            Curated Portfolio // 2024 - 2026
          </span>
          <h2 className="mt-3 text-5xl leading-none font-extrabold uppercase md:text-7xl lg:text-8xl">
            Latest
            <br />
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:max-w-md md:items-end">
          <p className="text-base leading-snug text-muted-foreground md:text-right">
            From concept to code, I build high-performance web applications, scalable enterprise systems, and custom digital platforms engineered for growth.
          </p>

          {/* Trendy Carousel Controls */}
          <div className="flex items-center gap-4">
            {/* Slide Counter badge */}
            <div className="flex items-center gap-1.5 rounded-full border border-foreground/20 px-4 py-2 font-mono text-xs">
              <span className="font-bold text-foreground">
                {String(current).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">
                {String(count).padStart(2, "0")}
              </span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                className="flex size-11 items-center justify-center rounded-full border border-foreground/25 bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30"
                aria-label="Previous project"
              >
                <ArrowLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="flex size-11 items-center justify-center rounded-full border border-foreground/25 bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30"
                aria-label="Next project"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trendy Carousel Showcase */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
          containScroll: "trimSnaps",
          dragFree: true,
        }}
        data-lenis-prevent="true"
        className="mt-14 w-full reveal-scale"
      >
        <CarouselContent className="-ml-6 cursor-grab active:cursor-grabbing select-none">
          {projects.map((p) => (
            <CarouselItem
              key={p.title}
              className="basis-[88%] pl-6 sm:basis-[72%] md:basis-[55%] lg:basis-[46%] xl:basis-[42%]"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2.5 hover:border-foreground hover:shadow-2xl">
                {/* Top accent glow line on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />
                {/* Project Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

                  {/* Project Index Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-foreground/20 bg-background/85 px-3 py-1 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-accent" />
                    <span className="label-mono font-bold text-foreground">
                      ({p.n})
                    </span>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="absolute top-4 right-4 rounded-full border border-foreground/20 bg-background/85 px-3 py-1 font-mono text-[0.7rem] font-semibold text-foreground backdrop-blur-md">
                    {p.metric}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    {/* Category & Year */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="label-mono">{p.category}</span>
                      <span className="label-mono">{p.year}</span>
                    </div>

                    {/* Title with Interactive Arrow */}
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                        {p.title}
                      </h3>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-foreground group-hover:text-background">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 border-t border-foreground/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="label-mono rounded-md border border-foreground/15 bg-foreground/[0.03] px-2.5 py-1 text-[0.65rem]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom Progress Bar & Pagination */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-foreground/15 pt-6 sm:flex-row">
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === i + 1
                  ? "w-8 bg-foreground"
                  : "w-2 bg-foreground/25 hover:bg-foreground/50"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <p className="label-mono text-muted-foreground">
          Swipe or drag to explore all {projects.length} projects • Chamith Studio
        </p>
      </div>
    </section>
  );
}