"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  type: "Full Stack" | "Frontend" | "Mobile";
  achievements: string[];
  skills: string[];
}

const experiences: Job[] = [
  {
    company: "Virtual Spirit",
    location: "Selangor, Malaysia (remote)",
    role: "Frontend Developer",
    period: "Jul 2025 – Jan 2026",
    type: "Frontend",
    achievements: [
      "Architected and maintained the core admin web application (Membership Ninja) using TypeScript, Handlebars, and Metronic.",
      "Developed complex UI workflows (drawers, modals) and advanced DataTables features including custom grouping, selection, and dynamic rendering.",
      "Built and deployed end-to-end features for Kohbus Web App, bridging UI components with robust API integrations with a focus on performance, long-term maintainability, and clean code."
    ],
    skills: ["TypeScript", "Handlebars", "Metronic", "API Integration", "DataTables"]
  },
  {
    company: "Ifabula",
    location: "Jakarta, Indonesia (remote)",
    role: "Full Stack Developer",
    period: "Jan 2023 – Jul 2025",
    type: "Full Stack",
    achievements: [
      "Cross-functionally led a high-performing agile team consisting of Developers, QA Engineers, Business Analysts, and Project Managers to ensure timely and smooth project delivery.",
      "Developed and scaled cross-platform mobile applications for Prudential Indonesia using React Native, strictly adhering to the rigorous enterprise code architecture and compliance standards of Prudential Hong Kong.",
      "Engineered robust CI/CD platform backend (Amplio) using Node.js, Express.js, and TypeScript, designing scalable relational data models with PostgreSQL and Sequelize ORM.",
      "Developed responsive frontend portals for Amplio using Next.js with Material-UI.",
      "Scaled, modernized, and optimized client-side features for the Toyota Official Store Solution utilizing Next.js, React.js, Bootstrap, and SASS."
    ],
    skills: ["Next.js", "React JS", "React Native", "Node.js", "Express.js", "PostgreSQL", "Sequelize ORM", "TypeScript", "SASS", "Bootstrap", "Agile Leadership"]
  },
  {
    company: "Nadi Health",
    location: "Malaysia (remote)",
    role: "Mobile Developer",
    period: "May 2022 - Dec 2022",
    type: "Mobile",
    achievements: [
      "Developed and deployed cross-platform health-tech mobile applications for iOS and Android platforms utilizing the Ionic Framework (Cordova & Capacitor), Angular, and TypeScript.",
      "Seamlessly interconnected three foundational application ecosystems: myPharma, myDoctor, and myHappiness.",
      "Built secure user Authentication, Push Notifications, Transaction History tracking, Geolocation services, LiveChat, advanced search indexing, and Billplz payment gateway integration.",
      "Partnered closely with the cybersecurity team to identify vulnerabilities, mitigate risk vectors, and fortify the application against security threats."
    ],
    skills: ["Angular", "TypeScript", "Ionic", "Cordova", "Capacitor", "Payment Integration", "Mobile Security", "Push Notifications"]
  },
  {
    company: "PT. Elektronik Distribusi Otomatisasi Terkemuka (eDOT)",
    location: "Bandung, Indonesia (remote)",
    role: "Mobile Developer",
    period: "Feb 2022 – May 2022",
    type: "Mobile",
    achievements: [
      "Built and shipped an internal management system website from scratch using Next.js to automate and broadcast WhatsApp messages to large customer segments.",
      "Created and deployed highly interactive features for the main commercial eDOT mobile application using React Native.",
      "Translated complex Figma design specifications into reusable, pixel-perfect, and highly responsive components, guaranteeing design system uniformity.",
      "Collaborated with back-end engineers to troubleshoot critical bugs and proactively refactored code to prevent regressions, increasing application stability."
    ],
    skills: ["Next.js", "React Native", "Figma to Code", "API Integration", "Refactoring", "WhatsApp APIs"]
  },
  {
    company: "PT. Klabat Tekno Perkasa",
    location: "Manado, Indonesia",
    role: "Full Stack Developer",
    period: "Jan 2021 – Dec 2021",
    type: "Full Stack",
    achievements: [
      "Led the end-to-end development (UI/UX design, frontend, and backend) for an Android application designed for local citizens to check vehicle taxes, built utilizing Figma, React Native, and Firebase."
    ],
    skills: ["React Native", "Firebase", "UI/UX Design", "Figma", "Android Development"]
  }
];

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Frontend" | "Mobile">("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredExperiences = experiences.filter(
    (exp) => filter === "All" || exp.type === filter
  );

  return (
    <div className="space-y-8">
      {/* Timeline List */}
      <div className="relative pl-6 md:pl-8 border-l border-border/80 space-y-10">
        {filteredExperiences.map((job, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={job.company + job.period}
              className="relative group reveal-on-scroll"
            >
              {/* Glowing Timeline Marker */}
              <div
                className={`absolute -left-[35px] md:-left-[43px] top-1 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 bg-background flex items-center justify-center transition-all duration-500 ${isExpanded
                  ? "border-primary shadow-[0_0_12px_var(--primary)]"
                  : "border-border group-hover:border-primary/70"
                  }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isExpanded ? "bg-primary scale-110" : "bg-muted group-hover:bg-primary/70"
                    }`}
                />
              </div>

              {/* Card Container */}
              <div
                className={`p-5 md:p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${isExpanded
                  ? "glass shadow-md border-primary/30"
                  : "bg-card/30 border-border/40 hover:bg-card/60 hover:border-border/80 hover:shadow-sm"
                  }`}
                onClick={() => toggleExpand(index)}
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase mb-2 bg-primary/10 text-primary border border-primary/20">
                      {job.type}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold font-display text-foreground tracking-tight">
                      {job.role}
                    </h3>
                    <div className="flex items-center text-sm font-semibold text-primary mt-0.5">
                      <Briefcase className="w-4 h-4 mr-1.5 shrink-0" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-muted md:items-end font-medium">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/50 pt-4 space-y-3">
                      {/* Achievements List */}
                      <ul className="space-y-2.5 text-sm leading-relaxed text-muted pl-4 list-disc marker:text-primary">
                        {job.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="pt-3">
                        <span className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                          Technologies Used:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-background border border-border/60 text-[11px] font-medium text-foreground/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand Chevron indicator */}
                <div className="flex justify-center mt-3 text-muted/60 group-hover:text-primary/70 transition-colors">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 animate-bounce" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
