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
    period: "Jul 2025 - Jan 2026",
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
    period: "Jan 2023 - Jul 2025",
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
    period: "Feb 2022 - May 2022",
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
    period: "Jan 2021 - Dec 2021",
    type: "Full Stack",
    achievements: [
      "Led the end-to-end development (UI/UX design, frontend, and backend) for an Android application designed for local citizens to check vehicle taxes, built utilizing Figma, React Native, and Firebase."
    ],
    skills: ["React Native", "Firebase", "UI/UX Design", "Figma", "Android Development"]
  }
];

export default function ExperienceTimeline() {
  const [filter] = useState<"All" | "Full Stack" | "Frontend" | "Mobile">("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredExperiences = experiences.filter(
    (exp) => filter === "All" || exp.type === filter
  );

  return (
    <div className="space-y-6">
      <div className="relative pl-6 md:pl-8 border-l border-line space-y-6">
        {filteredExperiences.map((job, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={job.company + job.period}
              className="relative group reveal-on-scroll"
            >
              {/* Timeline Marker */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border border-ink bg-white flex items-center justify-center`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isExpanded ? "bg-ink" : "bg-gray-2"
                  }`}
                />
              </div>

              {/* Item Block */}
              <div
                className="py-4 border-t border-line cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <span className="tag text-[10px] py-0.5 px-2 mb-2">
                      {job.type}
                    </span>
                    <h3 className="fk text-lg md:text-xl font-semibold text-ink">
                      {job.role}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-ink mt-1">
                      <Briefcase className="w-4 h-4 mr-1.5 shrink-0" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-gray-1 md:items-end font-medium">
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
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-line space-y-3">
                    <ul className="space-y-2 text-sm text-gray-1 pl-4 list-disc marker:text-ink">
                      {job.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <span className="idx block mb-2">Technologies Used:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {job.skills.map((skill) => (
                          <span key={skill} className="tag text-[11px] py-0.5 px-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-center mt-2 text-gray-1">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
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
