import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as ArrowLeft, i as ArrowRight, n as Plus, r as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DETgz1-x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.25,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 1.6
		});
		let animationFrameId;
		function raf(time) {
			lenis.raf(time);
			animationFrameId = requestAnimationFrame(raf);
		}
		animationFrameId = requestAnimationFrame(raf);
		const handleAnchorClick = (e) => {
			const target = e.target.closest("a");
			if (!target) return;
			const href = target.getAttribute("href");
			if (href && href.startsWith("#")) {
				e.preventDefault();
				if (href === "#top") lenis.scrollTo(0, { duration: 1.2 });
				else {
					const element = document.querySelector(href);
					if (element) lenis.scrollTo(element, {
						offset: -70,
						duration: 1.2
					});
				}
			}
		};
		document.addEventListener("click", handleAnchorClick);
		document.documentElement.classList.add("reveal-init");
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-revealed");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: .08,
			rootMargin: "0px 0px -50px 0px"
		});
		const observeAll = () => {
			document.querySelectorAll(".reveal-on-scroll, .reveal-scale").forEach((el) => {
				if (!el.classList.contains("is-revealed")) observer.observe(el);
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
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var links = [
	{
		label: "Home",
		n: "01",
		href: "#top"
	},
	{
		label: "Projects",
		n: "02",
		href: "#projects"
	},
	{
		label: "Journal",
		n: "03",
		href: "#journal"
	},
	{
		label: "Contact",
		n: "04",
		href: "#contact"
	}
];
function Nav() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ease-in-out md:px-12", isScrolled ? "border-b border-border/50 bg-background/75 py-4 shadow-xs backdrop-blur-md supports-[backdrop-filter]:bg-background/60" : "border-b border-transparent bg-transparent py-6"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-4 rounded-full border-4 border-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-extrabold tracking-tight uppercase",
					children: "Chamith"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden items-center gap-8 md:flex",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: l.href,
					className: "group flex items-start gap-1 text-[0.95rem] font-medium transition-opacity hover:opacity-60",
					children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
						className: "label-mono text-[0.55rem]",
						children: l.n
					})]
				}, l.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				className: "flex items-center gap-2 rounded-full bg-ink py-1.5 pr-5 pl-1.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground",
					children: "+"
				}), "Book a Call"]
			})
		]
	});
}
var services$1 = [
	"Full Stack Web Development",
	"Frontend Development",
	"Backend & API Development",
	"Cloud Deployment & SEO Optimization"
];
var clients = [
	"Enterprise Systems",
	"POS & Retail",
	"FinTech Solutions",
	"Business Automation",
	"Management Systems",
	"Web Applications"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "px-6 pt-28 pb-16 md:px-12 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-mono",
					children: "(©2023 - ©2026)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-mono",
					children: "Based in Sri Lanka"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-10 text-[15vw] leading-[0.82] md:text-[11.5vw] reveal-on-scroll",
				children: ["Developer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
					className: "align-super text-[0.2em]",
					children: "®"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-10 md:grid-cols-2 reveal-on-scroll stagger-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-md text-lg leading-snug md:text-xl",
					children: [
						"I design,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "develop"
						}),
						", and deploy scalable web applications that help businesses launch faster, automate workflows, and grow online."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3 md:justify-self-end",
					children: services$1.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "label-mono",
							children: [
								"0",
								i + 1,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base",
							children: s
						})]
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-6",
				children: clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-center text-xl font-extrabold tracking-tight uppercase",
					children: c
				}, c))
			})
		]
	});
}
var items = [
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
	"Spring Boot"
];
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-foreground bg-ink py-3 text-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-12 pr-12",
			children: [...items, ...items].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tracking-[0.18em] uppercase",
				children: item
			}, i))
		})
	});
}
function SectionHeader({ index, label, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 border-b border-foreground/20 pb-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "label-mono",
				children: [
					"[",
					index,
					"]"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "label-mono",
				children: ["// ", label]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label-mono",
				children: right
			})
		]
	});
}
var stats = [
	{
		value: "Full Stack",
		label: "Web Application Development"
	},
	{
		value: "React & Angular",
		label: "Frontend Development & UI Engineering"
	},
	{
		value: "REST APIs",
		label: "Backend Development & System Integration"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-6 py-16 md:px-12",
		style: { backgroundImage: "var(--gradient-sky)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "01",
				label: "Brand Excellence",
				right: "© 2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 md:grid-cols-[280px_1fr] md:gap-16 reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[5.5rem] font-extrabold leading-none tracking-tighter md:text-[7rem]",
							children: ["DEV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono mt-4 uppercase",
							children: "Design • Develop • Deploy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-20 bg-foreground/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Passionate about building modern digital experiences through clean code, thoughtful design, and practical software engineering."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-6xl",
					children: [
						"3+ YEARS OF BUILDING SCALABLE WEB APPLICATIONS, CUSTOM APPS, AND",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [" ", "HIGH PERFORMANCE"]
						}),
						" DIGITAL PRODUCTS."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:mt-24 md:grid-cols-3",
				children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `group relative overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 p-7 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:bg-card hover:shadow-xl reveal-on-scroll stagger-${index + 1}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "label-mono font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground",
							children: [
								"0",
								index + 1,
								" / EXPERTISE"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-3xl font-extrabold tracking-tight transition-transform duration-300 group-hover:-translate-y-1 md:text-4xl",
							children: stat.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono mt-4 uppercase text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
							children: stat.label
						})
					]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col justify-between gap-4 border-t border-foreground/20 pt-6 md:mt-20 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-mono uppercase text-muted-foreground",
					children: "Always Learning. Always Building."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-mono uppercase text-muted-foreground",
					children: "Developer • Sri Lanka"
				})]
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var projects = [
	{
		n: "01",
		title: "JustBookIt",
		category: "Full Stack Hotel Reservation",
		year: "2025",
		img: "/assets/project-justbookit-CGQARFQ8.jpg",
		metric: "MERN Stack Engine",
		description: "Full-stack hotel reservation platform built with MongoDB, Express, React, and Node.js. Features hotel discovery, intuitive booking management, secure user authentication, and dedicated customer & admin dashboards.",
		tags: [
			"MongoDB",
			"Express.js",
			"React.js",
			"Node.js",
			"JWT Auth"
		]
	},
	{
		n: "02",
		title: "DineNow",
		category: "Food Delivery & Ordering",
		year: "2025",
		img: "/assets/project-dinenow-BtclKY79.jpg",
		metric: "Stripe Online Payments",
		description: "Full-stack food delivery web application allowing users to browse interactive restaurant menus, place orders, and pay securely via Stripe. Includes an administrative control center for menu and order lifecycle management.",
		tags: [
			"React.js",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Stripe API"
		]
	},
	{
		n: "03",
		title: "Credify",
		category: "AI Review Authentication",
		year: "2026",
		img: "/assets/project-credify-D6jq2Toq.jpg",
		metric: "NLP AI Fake Review Detection",
		description: "Vibrant Angular UI and Java Spring Boot backend combating deceptive online reviews. Leverages Python NLP modules and MongoDB to authenticate consumer feedback, score trust, and filter fraudulent content in real time.",
		tags: [
			"Angular",
			"Spring Boot",
			"Python NLP",
			"MongoDB",
			"REST APIs"
		]
	},
	{
		n: "04",
		title: "Sports Facilities Booking",
		category: "Municipal Resource Management",
		year: "2025",
		img: "/assets/project-sports-D49a0OGt.jpg",
		metric: "Conflict-Free Scheduling",
		description: "Web-based database application designed for municipal sports councils to streamline bookings across tennis courts, soccer pitches, and basketball gyms, eliminating scheduling conflicts via a centralized portal.",
		tags: [
			"Web Database",
			"Resource Booking",
			"Management Portal",
			"SQL"
		]
	},
	{
		n: "05",
		title: "Liyanage Curtains",
		category: "Bespoke Business Portfolio",
		year: "2025",
		img: "/assets/project-curtains-BuCvACS1.jpg",
		metric: "High-Conversion Showcase",
		description: "Modern and responsive business portfolio website for Liyanage Curtain. Features bespoke drapery showcases, interactive product galleries, client testimonials, and a streamlined customer consultation inquiry system.",
		tags: [
			"React",
			"UI/UX Design",
			"Product Gallery",
			"Tailwind CSS"
		]
	},
	{
		n: "06",
		title: "SessionPRO Backend",
		category: "Conference & Event API",
		year: "2025",
		img: "/assets/project-sessionpro-Bj3YgPru.jpg",
		metric: "JWT Auth & Live Telemetry",
		description: "Scalable backend architecture for conference session coordination built with Node.js, Express, and MySQL. Implements JWT security, attendee tracking, speaker scheduling, live notifications, and attendee feedback aggregation.",
		tags: [
			"Node.js",
			"Express.js",
			"MySQL",
			"JWT Auth",
			"REST API"
		]
	},
	{
		n: "07",
		title: "Coffee Shop POS",
		category: "Retail Point of Sale",
		year: "2024",
		img: "/assets/project-coffeeshop-CRyONR8Z.jpg",
		metric: "Touchscreen Order Billing",
		description: "Comprehensive Coffee Shop Point of Sale system developed with Java EE and responsive web technologies. Connects frontend interfaces with backend REST APIs and MySQL for high-speed CRUD operations, menu management, and receipt billing.",
		tags: [
			"Java EE",
			"JavaScript",
			"MySQL",
			"REST APIs",
			"CRUD Engine"
		]
	},
	{
		n: "08",
		title: "Green Shadow Farm Management",
		category: "Agricultural Crop Monitoring",
		year: "2025",
		img: "/assets/project-greenshadow-BtUITLny.jpg",
		metric: "Enterprise Agriculture ERP",
		description: "Comprehensive agricultural management system built for Green Shadow (Pvt) Ltd. Tracks root crops and cereals, field mapping, staff workforce logs, machinery fleet telemetry, and monitoring logs for scalable international operations.",
		tags: [
			"Crop Monitoring",
			"Fleet Telemetry",
			"Staff Logs",
			"Enterprise ERP"
		]
	}
];
function Projects() {
	const [api, setApi] = (0, import_react.useState)();
	const [current, setCurrent] = (0, import_react.useState)(1);
	const [count, setCount] = (0, import_react.useState)(projects.length);
	const [canScrollPrev, setCanScrollPrev] = (0, import_react.useState)(false);
	const [canScrollNext, setCanScrollNext] = (0, import_react.useState)(true);
	const onSelect = (0, import_react.useCallback)((carouselApi) => {
		if (!carouselApi) return;
		setCurrent(carouselApi.selectedScrollSnap() + 1);
		setCanScrollPrev(carouselApi.canScrollPrev());
		setCanScrollNext(carouselApi.canScrollNext());
	}, []);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const root = api.rootNode();
		if (!root) return;
		let accumulatedDelta = 0;
		let isScrolling = false;
		let resetTimer = null;
		const onWheel = (e) => {
			const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			if (Math.abs(delta) > 4) {
				accumulatedDelta += delta;
				if (delta > 0 && api.canScrollNext() || delta < 0 && api.canScrollPrev()) e.preventDefault();
				if (!isScrolling && Math.abs(accumulatedDelta) >= 18) {
					if (accumulatedDelta > 0 && api.canScrollNext()) api.scrollNext();
					else if (accumulatedDelta < 0 && api.canScrollPrev()) api.scrollPrev();
					isScrolling = true;
					accumulatedDelta = 0;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "overflow-hidden px-6 py-20 md:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "02",
				label: "Creative Development",
				right: "Featured Works"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-mono uppercase text-muted-foreground",
					children: "Curated Portfolio // 2024 - 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-5xl leading-none font-extrabold uppercase md:text-7xl lg:text-8xl",
					children: [
						"Latest",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Projects"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:max-w-md md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-snug text-muted-foreground md:text-right",
						children: "From concept to code, I build high-performance web applications, scalable enterprise systems, and custom digital platforms engineered for growth."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 rounded-full border border-foreground/20 px-4 py-2 font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: String(current).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: String(count).padStart(2, "0")
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => api?.scrollPrev(),
								disabled: !canScrollPrev,
								className: "flex size-11 items-center justify-center rounded-full border border-foreground/25 bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30",
								"aria-label": "Previous project",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => api?.scrollNext(),
								disabled: !canScrollNext,
								className: "flex size-11 items-center justify-center rounded-full border border-foreground/25 bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30",
								"aria-label": "Next project",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				setApi,
				opts: {
					align: "start",
					loop: false,
					containScroll: "trimSnaps",
					dragFree: true
				},
				"data-lenis-prevent": "true",
				className: "mt-14 w-full reveal-scale",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "-ml-6 cursor-grab active:cursor-grabbing select-none",
					children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "basis-[88%] pl-6 sm:basis-[72%] md:basis-[55%] lg:basis-[46%] xl:basis-[42%]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2.5 hover:border-foreground hover:shadow-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/10] overflow-hidden bg-foreground/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.img,
											alt: p.title,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute top-4 left-4 flex items-center gap-2 rounded-full border border-foreground/20 bg-background/85 px-3 py-1 backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "label-mono font-bold text-foreground",
												children: [
													"(",
													p.n,
													")"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-4 right-4 rounded-full border border-foreground/20 bg-background/85 px-3 py-1 font-mono text-[0.7rem] font-semibold text-foreground backdrop-blur-md",
											children: p.metric
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col justify-between p-6 md:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label-mono",
												children: p.category
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label-mono",
												children: p.year
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-bold tracking-tight md:text-3xl",
												children: p.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-foreground group-hover:text-background",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
											children: p.description
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 border-t border-foreground/10 pt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label-mono rounded-md border border-foreground/15 bg-foreground/[0.03] px-2.5 py-1 text-[0.65rem]",
												children: t
											}, t))
										})
									})]
								})
							]
						})
					}, p.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col items-center justify-between gap-4 border-t border-foreground/15 pt-6 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: projects.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => api?.scrollTo(i),
						className: cn("h-1.5 rounded-full transition-all duration-300", current === i + 1 ? "w-8 bg-foreground" : "w-2 bg-foreground/25 hover:bg-foreground/50"),
						"aria-label": `Go to slide ${i + 1}`
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-mono text-muted-foreground",
					children: [
						"Swipe or drag to explore all ",
						projects.length,
						" projects • Chamith Studio"
					]
				})]
			})
		]
	});
}
var services = [
	{
		n: "01",
		title: "Web Development",
		line: "Building responsive, scalable, and high-performance web applications with modern frontend and backend technologies.",
		tags: [
			"Angular",
			"React.js",
			"Java",
			"Spring Boot",
			"Node.js"
		]
	},
	{
		n: "02",
		title: "Mobile App Development",
		line: "Developing cross-platform mobile applications with smooth performance and seamless user experiences.",
		tags: [
			"React Native",
			"Expo",
			"Swift",
			"Flutter"
		]
	},
	{
		n: "03",
		title: "UI/UX Design",
		line: "Designing intuitive, user-friendly, and visually appealing digital experiences focused on usability and accessibility.",
		tags: [
			"Wireframing",
			"Prototyping",
			"Figma",
			"Responsive Design"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-6 py-20 md:px-12",
		style: { backgroundImage: "var(--gradient-accent)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "03",
				label: "Services",
				right: "Vision to Victory™"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 max-w-3xl text-5xl md:text-8xl reveal-on-scroll",
				children: "FROM CONCEPT TO CODE."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-4",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative grid grid-cols-1 gap-6 rounded-2xl border border-transparent p-6 transition-all duration-400 hover:border-foreground/20 hover:bg-card/70 hover:shadow-lg md:grid-cols-[80px_1fr_1fr] md:items-start reveal-on-scroll",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-2xl font-extrabold text-muted-foreground transition-colors duration-300 group-hover:text-foreground",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold normal-case transition-transform duration-300 group-hover:translate-x-2 md:text-3xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-foreground",
							children: s.line
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground/10",
								children: t
							}, t))
						})] })
					]
				}, s.n))
			})
		]
	});
}
var steps = [
	{
		week: "Week 1",
		title: "Discovery & Planning",
		body: "I understand project requirements, identify business needs, and define the right technical approach to build a successful solution."
	},
	{
		week: "Week 2-4",
		title: "Design & Architecture",
		body: "I create intuitive UI/UX designs, plan application architecture, and structure databases to ensure a scalable and user-friendly experience."
	},
	{
		week: "Week 5",
		title: "Development & Testing",
		body: "I transform designs into functional applications, develop frontend and backend systems, integrate APIs, and perform thorough testing."
	},
	{
		week: "Week 6",
		title: "Deployment & Support",
		body: "I deploy applications, optimize performance, resolve issues, and provide ongoing maintenance to keep systems running smoothly."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-6 py-20 md:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "05",
				label: "Methodology",
				right: "How I Work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[1fr_460px] md:items-end reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-6xl md:text-8xl",
					children: [
						"My Development",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Process"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg leading-snug",
					children: [
						"From understanding your vision to delivering reliable digital solutions, I follow a structured development process focused on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "quality, performance," }),
						" and user experience."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `group relative overflow-hidden rounded-2xl border border-foreground/15 bg-card/70 p-6 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:shadow-xl hover:shadow-foreground/5 reveal-on-scroll stagger-${i + 1}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1.5",
								children: steps.map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full transition-all duration-300 ${j === i ? "bg-foreground scale-110" : "bg-foreground/20 group-hover:bg-foreground/35"}` }, j))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-mono font-bold transition-colors duration-300 group-hover:text-foreground",
								children: s.week
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-xl font-bold normal-case transition-transform duration-300 group-hover:translate-x-1",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
							children: s.body
						})
					]
				}, s.title))
			})
		]
	});
}
var faq_default = "/assets/faq-u8NG5vlP.jpg";
var faqs = [
	{
		q: "What is your typical turnaround time?",
		a: "Timelines depend on the project's complexity and scope. A standard web application MVP typically takes 4–6 weeks, while enterprise-level systems or complex API integrations may require a few months. I always provide a clear, phased roadmap before development begins."
	},
	{
		q: "Do you offer custom design solutions?",
		a: "Yes. I build custom, from-scratch applications tailored specifically to your business logic. Instead of relying on rigid templates, I design scalable databases and robust backends (using technologies like ASP.NET Core and Entity Framework) to ensure your system performs exactly how you need it to."
	},
	{
		q: "What industries do you specialize in?",
		a: "I develop solutions across a variety of domains, including health and fitness platforms, business management systems, and SaaS products. My full-stack expertise allows me to adapt quickly to the unique technical requirements and regulatory needs of any industry."
	},
	{
		q: "Can you handle both design and development?",
		a: "Absolutely. As a full-stack developer, I manage the entire application lifecycle. I build secure, high-performance APIs and databases on the backend, and connect them to responsive, intuitive user interfaces on the frontend for a complete, end-to-end solution."
	},
	{
		q: "Do you provide post-launch support?",
		a: "Yes, deployment is just the beginning. I offer ongoing maintenance, server monitoring, bug fixes, and feature scaling to ensure your application remains secure and performs optimally as your user base grows."
	}
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setOpen(null);
		};
		if (open !== null) window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative px-6 py-20 md:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setOpen(null),
				className: `fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${open !== null ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "06",
				label: "FAQ",
				right: "Got Questions?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[340px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: faq_default,
						alt: "FAQ illustration",
						loading: "lazy",
						width: 900,
						height: 1e3,
						className: "aspect-[4/3] w-full rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-snug",
						children: "From concept to deployment. Clean code, scalable architecture, and seamless user experiences."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: faqs.map((f, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: `group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "z-50 border-foreground/30 bg-card p-7 shadow-2xl ring-2 ring-foreground/15 scale-[1.01]" : open !== null ? "z-10 border-foreground/10 bg-card/40 opacity-40 hover:opacity-60" : "z-10 border-foreground/15 bg-card/65 hover:border-foreground/35 hover:bg-card/90 hover:shadow-md"}`,
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full items-start justify-between gap-6 animate-in fade-in zoom-in-98 duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base md:text-lg leading-relaxed text-foreground font-normal",
									children: f.a
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.stopPropagation();
										setOpen(null);
									},
									className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all hover:bg-foreground hover:text-background hover:scale-110 cursor-pointer",
									"aria-label": "Close answer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4.5" })
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(i),
								"aria-expanded": false,
								className: "flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left transition-colors duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg font-medium text-foreground/95 transition-colors duration-200 group-hover:text-foreground",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground/10 group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4.5" })
								})]
							})
						}, f.q);
					})
				})]
			})
		]
	});
}
var posts = [
	{
		n: "001",
		title: "Optimizing Database Performance",
		description: "How to identify bottlenecks, use efficient caching, and design data models that handle high traffic without breaking.",
		tag: "Database & Cloud",
		img: "/assets/journal-scale-B3WTWbRY.jpg"
	},
	{
		n: "002",
		title: "Choosing the Right Architecture",
		description: "Deciding when to start simple and when to break your application into distributed services for optimal growth.",
		tag: "Architecture",
		img: "/assets/journal-architecture-GJzmbMZY.jpg"
	},
	{
		n: "003",
		title: "Building Seamless UX",
		description: "Best practices for turning complex designs into fast, accessible, and responsive user interfaces that delight users.",
		tag: "UI/UX & Frontend",
		img: "/assets/journal-frontend-DZ9BjbMW.jpg"
	}
];
function Journal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "journal",
		className: "px-6 py-20 md:px-12",
		style: { backgroundImage: "var(--gradient-accent)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				index: "07",
				label: "Journal",
				right: "Stay Informed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[1fr_460px] md:items-end reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-6xl md:text-8xl",
					children: [
						"Latest",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Insights"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-snug",
					children: "Dive into tech trends, development strategies, and industry insights to help you build scalable digital products."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3",
				children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-card/60 p-5 backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-foreground hover:shadow-2xl reveal-on-scroll stagger-${i + 1} ${i === 2 ? "md:-mt-12" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-foreground/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								loading: "lazy",
								width: 900,
								height: 1e3,
								className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3 right-3 rounded-full border border-foreground/20 bg-background/80 px-2.5 py-1 text-[0.65rem] font-mono uppercase text-foreground backdrop-blur-md",
								children: p.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex items-baseline justify-between gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-mono mr-2 text-muted-foreground",
									children: p.n
								}), p.title]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
							children: p.description
						})
					]
				}, p.n))
			})
		]
	});
}
var navLinks = [
	{
		label: "Home",
		href: "#top"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Journal",
		href: "#journal"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var socialLinks = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/chamith-kavinda-880330282/",
		external: true
	},
	{
		label: "GitHub",
		href: "https://github.com/chamithKavinda",
		external: true
	},
	{
		label: "X",
		href: "https://x.com/ChamithKavinda_",
		external: true
	},
	{
		label: "Email",
		href: "mailto:chamith13kavinda@gmail.com",
		external: false
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/94762106834",
		external: true
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "bg-ink px-6 pt-24 pb-10 text-background md:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal-on-scroll",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-[0.18em] uppercase opacity-60",
							children: "Lets talk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/94762106834",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 block font-mono text-sm opacity-80 transition-opacity hover:opacity-100",
							children: "(+94) 76 210 6834"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:chamith13kavinda@gmail.com",
							className: "mt-3 block text-3xl font-extrabold tracking-tight uppercase md:text-5xl",
							children: "chamith13kavinda@gmail.com"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-items-end reveal-on-scroll stagger-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm",
						children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: item.label
						}) }, item.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm",
						children: socialLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							...item.external ? {
								target: "_blank",
								rel: "noopener noreferrer"
							} : {},
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: item.label
						}) }, item.label))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-24 text-[16vw] leading-[0.8] text-background reveal-scale",
				children: ["Chamith", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
					className: "align-super text-[0.15em]",
					children: "®"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap justify-between gap-4 font-mono text-[0.65rem] tracking-[0.15em] uppercase opacity-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Created by : Chamith Kavinda" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "©2026 Chamith. All rights reserved." })]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { backgroundImage: "var(--gradient-hero)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
