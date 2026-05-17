// ---- Content (edit freely) ----
const projects = [
  {
    title: "Automated Kitchen Assistant Intelligent Software",
    description:
      "Built an automated kitchen inventory system using neural networks to forecast consumption and automate supply suggestions.",
    stack: ["Next.js", "NestJS", "Python", "PyTorch", "Docker"],
    github: "https://github.com/anacfrosa/automated-kitchen-software",
    demo: "https://youtu.be/NOFXAmX-5xs",
    image: "master-thesis.png",
  },
  {
    title: "Hospital Management System",
    description:
      "Hospital management database system designed to manage patients, staff, rooms, appointments, and medical operations efficiently.",
    stack: ["Visual Basic .NET", "SQL", "SQL Server Management Studio"],
    github: "https://github.com/anacfrosa/hospital-management-system",
    demo: "https://youtu.be/M-VJY6i3CjA",
    image: "hospital-management.png",
  },
];

const skills = [
  {
    group: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    group: "Backend",
    items: ["Java", "Python", "Django", "NestJS", "SQL", "REST APIs", "Redis"],
  },
  {
    group: "AI & Machine Learning",
    items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "RabbitMQ", "MQTT"],
  },
];

const experience = [
  {
    role: "Full Stack Software Developer",
    company: "Wish and Cook",
    period: "Jul 2025 - Present",
    points: [
      "Build and maintain scalable platforms for autonomous kitchen systems.",
      "Develop full stack applications with Django, Next.js, and NestJS.",
      "Developed recommendation systems using scikit-learn and LLM tools, including OpenAI and Ollama.",
      "Design and manage secure infrastructure, including network architecture (UniFi, TP-Link) and data protection (Synology NAS).",
    ],
  },
  {
    role: "Professional Internship",
    company: "Wish and Cook",
    period: "Jan 2025 - Jun 2025",
    points: [
      "Worked as a Software and Telematics Engineer in a production environment.",
      "Built backend services and frontend features using Django and Next.js.",
      "Managed development workflows with Docker and supported network setup and troubleshooting.",
    ],
  },
  {
    role: "Summer Intern",
    company: "Apside Portugal (CGI)",
    period: "Jul 2023 - Aug 2023",
    points: [
      "Built an IoT-based meeting room scheduling system with real-time display.",
      "Worked with .NET, React, Arduino, and Raspberry Pi.",
      "Collaborated in an agile team across the full project lifecycle.",
    ],
  },
];

// ---- Render ----
const projectsGrid = document.getElementById("projectsGrid");
projectsGrid.innerHTML = projects
  .map(
    (p) => `
  <article class="project-card reveal rounded-2xl border border-border bg-card shadow-card">
    <img
      src="assets/images/projects/${p.image}"
      alt="${p.title}"
      class="rounded-t-2xl aspect-radio w-full object-cover"
    />
    <div class="p-6 sm:p-7">
      <h3 class="text-xl font-semibold tracking-tight">${p.title}</h3>
      <p class="mt-2 text-sm text-muted-foreground leading-relaxed">${p.description}</p>
      <ul class="mt-4 flex flex-wrap gap-2">
        ${p.stack.map((s) => `<li class="rounded-full bg-background/60 border border-border px-2.5 py-1 text-xs text-muted-foreground">${s}</li>`).join("")}
      </ul>
      <div class="mt-6 flex gap-3">
        <a href="${p.github}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 text-sm rounded-full border border-border px-4 py-2 hover:border-primary hover:text-primary transition">GitHub →</a>
        <a href="${p.demo}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 text-sm rounded-full bg-gradient-primary px-4 py-2 font-medium shadow-elegant hover:scale-105 transition">Demo</a>
      </div>
    </div>
  </article>
`,
  )
  .join("");

const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills
  .map(
    (s) => `
  <div class="reveal rounded-2xl border border-border bg-card p-6 shadow-card">
    <h3 class="text-sm font-semibold uppercase tracking-widest text-primary">${s.group}</h3>
    <ul class="mt-4 flex flex-wrap gap-2">
      ${s.items.map((i) => `<li class="rounded-full bg-background/60 border border-border px-3 py-1.5 text-sm">${i}</li>`).join("")}
    </ul>
  </div>
`,
  )
  .join("");

const timeline = document.getElementById("timeline");
timeline.innerHTML = experience
  .map(
    (e) => `
  <li class="reveal relative">
    <span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-primary ring-4 ring-background"></span>
    <div class="flex flex-wrap items-baseline justify-between gap-2">
      <h3 class="text-lg font-semibold">${e.role} <span class="text-muted-foreground font-normal">· ${e.company}</span></h3>
      <span class="text-xs text-muted-foreground">${e.period}</span>
    </div>
    <ul class="mt-2 list-disc pl-5 space-y-1 text-muted-foreground text-sm leading-relaxed">
      ${e.points.map((p) => `<li>${p}</li>`).join("")}
    </ul>
  </li>
`,
  )
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();

// ---- Mobile menu ----
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
mobileMenu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.add("hidden")),
  );

// ---- Navbar scroll state ----
const navbar = document.getElementById("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---- Scroll reveal ----
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
