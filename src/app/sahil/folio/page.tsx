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
} from "lucide-react";

const GITHUB_URL = "https://github.com/sahilgundecha";

const projects = [
  {
    id: 1,
    title: "GrowthPilot",
    description:
      "AI-powered SaaS dashboard for e-commerce sellers with real-time analytics, revenue tracking, and an intelligent AI Copilot that provides actionable business insights.",
    longDescription:
      "A comprehensive analytics platform built for modern e-commerce businesses. Features include real-time revenue tracking, order management, product performance analytics, geographic sales distribution, and an AI-powered copilot that analyzes your data and provides strategic recommendations.",
    image: "/projects/growthpilot.png",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Clerk Auth",
      "OpenAI API",
      "Recharts",
      "Zustand",
      "TanStack Query",
    ],
    features: [
      "Real-time analytics dashboard",
      "AI Copilot with GPT-4 integration",
      "Revenue & order tracking",
      "Product performance insights",
      "Geographic sales heatmap",
      "Custom date range filters",
    ],
    liveUrl: "https://growthpilot-eta.vercel.app/",
    githubUrl: GITHUB_URL + "/growthpilot",
    color: "from-blue-500 to-purple-600",
    icon: TrendingUp,
    category: "SaaS / AI",
  },
  {
    id: 2,
    title: "Crypter",
    description:
      "A modern NFT marketplace UI where users can discover, buy, sell, and auction unique digital collectibles with a sleek and intuitive interface.",
    longDescription:
      "Beautifully crafted NFT marketplace frontend showcasing modern UI/UX design patterns. Features include wallet connection flows, NFT browsing with filters, auction interfaces, collection galleries, and detailed NFT pages with bidding UI. Built with a focus on responsive design and smooth animations.",
    image: "/projects/crypter.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    features: [
      "Wallet connection UI (MetaMask, WalletConnect)",
      "NFT gallery with filters & search",
      "Auction & bidding interface",
      "Collection showcase pages",
      "Responsive mobile-first design",
      "Smooth animations & transitions",
    ],
    liveUrl: "https://crypterapp.netlify.app/",
    githubUrl: GITHUB_URL + "/crypter",
    color: "from-orange-500 to-pink-600",
    icon: Palette,
    category: "Web3 UI / Frontend",
  },
  {
    id: 3,
    title: "Eventelligence",
    description:
      "Enterprise event management platform for associations and large organizations to create, manage, and publish webinars, conferences, and corporate events.",
    longDescription:
      "Comprehensive event management solution designed for enterprise scale. Allows organizations to create events from scratch or templates, manage registrations, handle multiple event types (webinars, conferences, workshops), and publish to attendees with custom branding.",
    image: "/projects/eventellisense.png",
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
    features: [
      "Event creation & templates",
      "Registration management",
      "Multi-event type support",
      "Custom branding & themes",
      "Email notifications",
      "Analytics & reporting",
    ],
    liveUrl: "https://eventelligence.netlify.app/",
    githubUrl: GITHUB_URL + "/eventelligence",
    color: "from-emerald-500 to-teal-600",
    icon: Calendar,
    category: "Enterprise / SaaS",
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
  ],
  backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "REST APIs",
  ],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD", "VS Code"],
  other: [
    "React Query",
    "Recharts",
    "Clerk Auth",
    "OpenAI API",
    "GraphQL",
    "Agile",
  ],
};

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Remote",
    period: "2023 - Present",
    description:
      "Building production-ready web applications for clients worldwide. Specializing in React, Next.js, and modern full-stack development.",
  },
];

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("about");

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
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
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
              Hire Me
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open to opportunities
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Sahil Gundecha
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                A passionate{" "}
                <span className="text-white font-medium">
                  Frontend-Heavy Full Stack Developer
                </span>{" "}
                crafting modern web experiences with React, Next.js, and
                cutting-edge technologies. I build products that users love.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 9881133878</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Code Editor Style Card */}
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
                      portfolio.tsx
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
                        &quot;Full Stack Developer&quot;
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
                      <span className="text-white">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-400">passion:</span>{" "}
                      <span className="text-green-400">
                        &quot;Building amazing products&quot;
                      </span>
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

      {/* Projects Section */}
      <section id="projects" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-4">
              <Rocket className="w-4 h-4" />
              Featured Projects
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Things I&apos;ve Built
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Header with Gradient */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.color} p-6 flex items-center justify-between`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <project.icon className="relative w-10 h-10 text-white/90" />
                  <span className="relative px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.color} rounded-lg text-sm font-medium hover:opacity-90 transition-opacity`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My Tech Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm text-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">Other</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-lg text-sm text-orange-400"
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
      <section className="relative py-32">
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
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-400">
                I ship production-ready code quickly without compromising on
                quality or best practices.
              </p>
            </div>

            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 text-center hover:border-blue-500/20 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Player</h3>
              <p className="text-gray-400">
                Excellent communication skills, comfortable with async work, and
                experienced in remote collaboration.
              </p>
            </div>

            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 text-center hover:border-purple-500/20 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Results Driven</h3>
              <p className="text-gray-400">
                Focused on delivering business value and building products that
                users actually want to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-32 bg-gradient-to-b from-transparent to-purple-500/5"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Let&apos;s Work Together
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Got a project in mind?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or partnerships. Let&apos;s build something great
            together!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:gundechasahil@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium text-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              gundechasahil@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/sahilgundecha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium text-lg hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-medium text-lg hover:bg-white/10 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
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
                href="https://github.com/sahilgundecha25"
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
