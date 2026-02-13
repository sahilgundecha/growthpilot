"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  TrendingUp,
  Palette,
  Calendar,
  ArrowRight,
  ChevronDown,
  Terminal,
  Database,
  Globe,
  Layers,
  Zap,
  Users,
  BarChart3,
  Rocket,
  MapPin,
  Phone,
  FileText,
  Download,
  Building2,
  Briefcase,
  Award,
  Server,
  Cloud,
  Copy,
  Check,
} from "lucide-react";

// Real projects - only the 3 actual ones
const projects = [
  {
    id: 1,
    title: "GrowthPilot",
    description:
      "AI-powered SaaS dashboard for e-commerce sellers with real-time analytics, revenue tracking, and an intelligent AI Copilot that provides actionable business insights.",
    image: "/projects/growthpilot.png",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Clerk Auth",
      "OpenAI API",
      "Recharts",
      "Zustand",
      "TanStack Query",
    ],
    highlights: [
      "Real-time analytics dashboard with multiple chart types",
      "AI Copilot integrated with GPT-4 for business insights",
      "Order management and product performance tracking",
      "Geographic sales distribution visualization",
    ],
    liveUrl: "https://growthpilot-eta.vercel.app/",
    githubUrl: "https://github.com/sahilgundecha/growthpilot",
    color: "from-blue-500 to-purple-600",
    icon: TrendingUp,
    category: "SaaS / AI",
  },
  {
    id: 2,
    title: "Crypter",
    description:
      "A modern NFT marketplace UI where users can discover, buy, sell, and auction unique digital collectibles with a sleek and intuitive interface.",
    image: "/projects/crypter.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    highlights: [
      "Wallet connection UI (MetaMask, WalletConnect)",
      "NFT gallery with filters & search functionality",
      "Auction & bidding interface design",
      "Responsive mobile-first design with animations",
    ],
    liveUrl: "https://crypterapp.netlify.app/",
    githubUrl: "https://github.com/sahilgundecha/crypter",
    color: "from-orange-500 to-pink-600",
    icon: Palette,
    category: "Web3 / Frontend",
  },
  {
    id: 3,
    title: "Eventelligence",
    description:
      "Enterprise event management platform for associations and organizations to create, manage, and publish webinars, conferences, and corporate events.",
    image: "/projects/eventelligent.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "Stripe",
      "SendGrid",
      "React Query",
    ],
    highlights: [
      "Event creation with templates and custom workflows",
      "Registration and attendee management",
      "Payment integration with Stripe",
      "Email notifications and analytics",
    ],
    liveUrl: "https://eventelligence.netlify.app/",
    githubUrl: "https://github.com/sahilgundecha/eventelligence",
    color: "from-emerald-500 to-teal-600",
    icon: Calendar,
    category: "Enterprise / SaaS",
  },
];

// Real work experience from resume
const experience = [
  {
    role: "Software Developer - Frontend",
    company: "Momentive Software",
    location: "Pune, India",
    period: "Dec 2023 - Present",
    type: "Full-time",
    description:
      "Leading frontend development for a micro-frontend widgets system. Associations can embed our products (Events, Jobs, Membership, Invoices) directly into their dashboards.",
    achievements: [
      "Designed and developed the embeddable widget architecture using React - now used by multiple associations",
      "Led SSO integration to ensure users stay authenticated across all product widgets",
      "Own the visual CMS module - admins can configure widget content and layouts without dev help",
      "Developed the theming engine that lets associations customize widgets to match their branding",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Micro-frontends",
      "SSO",
    ],
  },
  {
    role: "Software Developer",
    company: "CronJ IT Technology",
    location: "Remote, Bangalore",
    period: "Nov 2021 - Nov 2023",
    type: "Full-time",
    description:
      "Worked across multiple client projects with primary focus on frontend. Took ownership of features end-to-end and grew into full-stack responsibilities.",
    achievements: [
      "Delivered complete frontend solutions for client projects - e-commerce platforms, admin dashboards, marketing sites",
      "Set up a shared component library that became standard across team projects",
      "Owned API integration layer - worked closely with backend team to design contracts",
      "Mentored junior devs on React patterns and code review best practices",
    ],
    tech: ["React", "JavaScript", "Node.js", "MongoDB", "CSS/SCSS"],
  },
];

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "HTML/CSS",
    "Micro-frontends",
    "React Query",
  ],
  backend: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
  tools: ["Git", "VS Code", "Figma", "Postman", "Vercel", "Chrome DevTools"],
  other: [
    "Responsive Design",
    "SSO Integration",
    "Theming Systems",
    "Accessibility",
    "Agile/Scrum",
    "Performance Optimization",
  ],
};

export default function PortfolioPage() {
  const [expandedDesc, setExpandedDesc] = useState<number | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard
      .writeText("gundechasahil@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/sahil/folio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-lg">
              S
            </div>
            <span className="font-semibold text-lg">Sahil Gundecha</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sahilgundecha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sahilgundecha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gundechasahil@gmail.com"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center pt-16"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-400 text-2xl lg:text-3xl font-normal block mb-2">
                  Hi, I&apos;m
                </span>
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-white-foreground">
                  Sahil Gundecha
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-300">
                  <span className="text-white font-semibold">
                    Frontend Developer
                  </span>{" "}
                  with 4+ years of experience
                </p>
                <p className="text-gray-400 leading-relaxed max-w-lg">
                  I specialize in building modern, responsive web applications
                  with <span className="text-white">React</span>,{" "}
                  <span className="text-white">Next.js</span>, and{" "}
                  <span className="text-white">TypeScript</span>. I focus on
                  creating great user experiences with clean, performant code.
                  Can work with backend when needed.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  View Experience
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  India
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9881133878
                </div>
              </div>
            </div>

            {/* Hero Visual - Code Editor */}
            <div className="hidden lg:block">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      developer.ts
                    </span>
                  </div>
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm space-y-2">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">developer</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-yellow-400">{"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">name:</span>{" "}
                      <span className="text-green-400">
                        &quot;Sahil Gundecha&quot;
                      </span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">role:</span>{" "}
                      <span className="text-green-400">
                        &quot;Frontend Dev&quot;
                      </span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">experience:</span>{" "}
                      <span className="text-green-400">
                        &quot;4+ years&quot;
                      </span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">skills:</span>{" "}
                      <span className="text-yellow-400">[</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">&quot;React&quot;</span>
                      <span className="text-white">,</span>{" "}
                      <span className="text-green-400">
                        &quot;Next.js&quot;
                      </span>
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">
                        &quot;TypeScript&quot;
                      </span>
                      <span className="text-white">,</span>{" "}
                      <span className="text-green-400">
                        &quot;Node.js&quot;
                      </span>
                    </p>
                    <p className="pl-4">
                      <span className="text-yellow-400">]</span>
                    </p>
                    <p>
                      <span className="text-yellow-400">{"}"}</span>
                      <span className="text-white">;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-500">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              4+ years of building web applications and growing as a developer
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className="relative bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                {/* Current job indicator */}
                {index === 0 && (
                  <div className="w-25 px-3 py-1 mb-4 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
                    Current Role
                  </div>
                )}

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium text-white/80">
                        {exp.company}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Award
                        className="w-4 h-4 text-blue-400 mt-0.5"
                        style={{ flexShrink: 0 }}
                      />
                      {achievement}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-4">
              <Rocket className="w-4 h-4" />
              Featured Projects
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Things I&apos;ve Built
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of projects showcasing my frontend skills and
              full-stack capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                {/* Project Header */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.color} p-6 flex items-center justify-between`}
                  style={{ flexShrink: 0 }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <project.icon className="relative w-10 h-10 text-white/90" />
                  <span className="relative px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col" style={{ flexGrow: 1 }}>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                  {/* Description with See more */}
                  <div className="mb-4">
                    <p
                      className={`text-gray-400 text-sm ${expandedDesc === project.id ? "" : "line-clamp-2"}`}
                    >
                      {project.description}
                    </p>
                    {project.description.length > 100 && (
                      <button
                        onClick={() =>
                          setExpandedDesc(
                            expandedDesc === project.id ? null : project.id,
                          )
                        }
                        className="text-purple-400 hover:text-purple-300 text-xs mt-1 transition-colors"
                      >
                        {expandedDesc === project.id ? "See less" : "See more"}
                      </button>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-400"
                      >
                        <Zap
                          className="w-3 h-3 text-yellow-500 mt-0.5"
                          style={{ flexShrink: 0 }}
                        />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Spacer to push buttons to bottom */}
                  <div style={{ flexGrow: 1 }} />

                  {/* Actions - Consistent for all cards */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-4">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My Tech Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Frontend-focused with backend capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-green-500/20 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-lg text-xs text-green-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Other</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-4">
              <Zap className="w-4 h-4" />
              Why Choose Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What I Bring to Your Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 text-center hover:border-emerald-500/20 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Learner</h3>
              <p className="text-gray-400 text-sm">
                Adaptable and eager to learn new technologies. I pick up new
                tools and frameworks quickly and apply them effectively.
              </p>
            </div>

            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 text-center hover:border-blue-500/20 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Player</h3>
              <p className="text-gray-400 text-sm">
                Good communication skills, comfortable with remote/async work. I
                collaborate well with designers, backend devs, and PMs.
              </p>
            </div>

            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 text-center hover:border-purple-500/20 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Focused</h3>
              <p className="text-gray-400 text-sm">
                I write clean, maintainable code and care about user experience.
                I believe in doing things right, not just getting them done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-24 bg-gradient-to-b from-transparent to-purple-500/5"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I&apos;m open to new opportunities and interesting projects.
            Let&apos;s chat about how I can help!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {/* Email with Copy Button */}
            <div className="inline-flex items-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-medium text-lg">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:gundechasahil@gmail.com"
                className="hover:underline"
              >
                gundechasahil@gmail.com
              </a>
              <button
                onClick={handleEmailCopy}
                className="ml-2 p-1.5 rounded-lg bg-black/10 hover:bg-black/20 transition-colors"
                title={emailCopied ? "Copied!" : "Copy email"}
              >
                {emailCopied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/sahilgundecha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-medium text-lg hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            {/* GitHub Button */}
            <a
              href="https://github.com/sahilgundecha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#24292e] text-white rounded-xl font-medium text-lg hover:bg-[#1b1f23] transition-colors border border-white/10"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium text-lg hover:bg-white/10 transition-colors"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <a
              href="tel:+919881133878"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9881133878
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sahil Gundecha. Built with Next.js &
              Tailwind CSS.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/sahilgundecha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sahilgundecha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gundechasahil@gmail.com"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919881133878"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
