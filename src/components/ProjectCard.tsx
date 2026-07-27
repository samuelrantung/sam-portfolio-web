"use client";

import { ExternalLink, Sparkles, Users, Smartphone } from "lucide-react";
import { Github } from "@/components/BrandIcons";

interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
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
    iconType: "mobile"
  }
];

export default function ProjectList() {
  return (
    <div className="space-y-6">
      {projects.map((project) => {
        return (
          <div
            key={project.title}
            className="py-6 border-t border-line reveal-on-scroll"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {project.iconType === "ml" && <Sparkles className="w-5 h-5 text-ink" />}
                {project.iconType === "web" && <Users className="w-5 h-5 text-ink" />}
                {project.iconType === "mobile" && <Smartphone className="w-5 h-5 text-ink" />}
                <h3 className="fk text-xl font-semibold text-ink">
                  {project.title}
                </h3>
              </div>
              <span className="idx">{project.period}</span>
            </div>

            <p className="muted text-base mb-4 leading-relaxed max-w-[65ch]">
              {project.description}
            </p>

            <ul className="mb-4 space-y-1.5 text-sm text-gray-1 pl-4 list-disc marker:text-ink">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tag) => (
                <span key={tag} className="tag text-xs py-0.5 px-2">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2 text-sm">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="link-cta"
                  aria-label={`View code for ${project.title}`}
                >
                  <Github className="w-4 h-4 inline mr-1" /> Source <span className="arw">&rarr;</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="link-cta"
                  aria-label={`View demo for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4 inline mr-1" /> Live Demo <span className="arw">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
