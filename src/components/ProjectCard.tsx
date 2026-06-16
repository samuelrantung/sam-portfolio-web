"use client";

import { ExternalLink, Code, Sparkles, Users, Smartphone } from "lucide-react";
import { Github } from "@/components/BrandIcons";

interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  iconType: "ml" | "web" | "mobile";
}

const projects: Project[] = [
  {
    title: "WhatsApp Blast Customer Retention Engine",
    period: "March 2026 - Present",
    description:
      "A Machine Learning-powered churn prediction pipeline integrated with automated messaging channels to improve customer retention.",
    highlights: [
      "Random Forest classifier trained on RFM features achieving 80.18% accuracy & 0.88 ROC-AUC.",
      "Automated retention flow from transaction data to personalized WhatsApp dispatch via Meta Cloud API.",
      "FastAPI REST layer for backend inference and orchestration."
    ],
    tech: ["Python", "FastAPI", "Machine Learning", "Random Forest", "RFM Analysis", "Meta Cloud API"],
    githubUrl: "#", // Placeholder
    demoUrl: "#", // Placeholder
    iconType: "ml"
  },
  {
    title: "Manado Adventist Hospital Systems",
    period: "Jan 2025 - Present",
    description:
      "Full hospital information management web suite. Spearheaded frontend development architecture and project delivery.",
    highlights: [
      "Led and directed a cross-functional team of 7 developers.",
      "Designed and set front-end codebase architecture and coding patterns.",
      "Conducted rigorous code reviews and quality assurance check points."
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Team Leadership"],
    githubUrl: "#",
    iconType: "web"
  },
  {
    title: "Manado Post Mobile Application Revamp",
    period: "Nov 2022",
    description:
      "Comprehensive UI/UX design overhaul and development of the official Manado Post mobile publication app.",
    highlights: [
      "Sliced and developed high-performance screens from modern Figma design specs.",
      "Implemented modular and highly reusable custom UI components.",
      "Ensured pixel-perfect rendering and native-level scrolling performance."
    ],
    tech: ["React Native", "JavaScript", "Mobile UI/UX", "Figma to Code", "Android & iOS"],
    githubUrl: "#",
    iconType: "mobile"
  }
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        return (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-border/40 bg-card/20 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg relative overflow-hidden reveal-on-scroll"
          >
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-secondary/50" />

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Header Icon & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    {project.iconType === "ml" && <Sparkles className="w-5 h-5" />}
                    {project.iconType === "web" && <Users className="w-5 h-5" />}
                    {project.iconType === "mobile" && <Smartphone className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-semibold text-muted">{project.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Achievements/Bullet Highlights */}
                <ul className="mb-6 space-y-1.5 text-xs text-muted/90 pl-3 list-disc marker:text-primary">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-normal">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Footer Actions */}
              <div>
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-background border border-border/50 text-[10px] font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/40 text-xs">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 font-semibold text-muted hover:text-foreground transition-colors cursor-pointer"
                    aria-label={`View code for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1.5 font-semibold text-primary hover:text-secondary transition-colors cursor-pointer"
                      aria-label={`View demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
