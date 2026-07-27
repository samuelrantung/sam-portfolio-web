// src/app/[lang]/tentang/samuel/page.tsx
import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectList from "@/components/ProjectCard";
import {
  Mail,
  Code2,
  Database,
  Brain,
  GraduationCap,
  Server
} from "lucide-react";
import { Github, Linkedin, Instagram } from "@/components/BrandIcons";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  return {
    title: "Samuel Rantung | Full Stack & Frontend Developer",
    description:
      "Samuel Rantung, founder of Imaginnative, Full Stack & Frontend Developer specializing in React, Next.js, React Native, and Node.js.",
    alternates: alternatesFor(lang, "/tentang/samuel"),
  };
}

export default async function SamuelPortfolioPage(
  props: { params: Promise<{ lang: string }> }
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const nav = dict.nav;

  const emailAddress = "samuelmrantung@gmail.com";
  const whatsappUrl = "https://wa.me/6282187792052";
  const githubUrl = "https://github.com/samuelrantung";
  const linkedinUrl = "https://www.linkedin.com/in/samrant/";
  const instagramUrl = "https://instagram.com/sam.rant";

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: nav.home, path: "/" },
              { name: nav.about, path: "/tentang" },
              { name: nav.aboutSamuel, path: "/tentang/samuel" },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="tag mb-4">Open for Opportunities</span>
          <span className="idx block">Portofolio / Samuel Rantung</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "18ch",
            }}
          >
            Hi, I&apos;m Samuel Rantung
          </h1>
          <p
            className="font-semibold text-ink"
            style={{ fontSize: "1.25rem", marginTop: "8px" }}
          >
            Full Stack &amp; Frontend Developer
          </p>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.1rem" }}
          >
            Specializing in high-performance React, Next.js, React Native, and Node.js solutions. Focused on clean code, UI/UX fidelity, and robust application architectures.
          </p>

          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill"
            >
              Contact via WhatsApp
            </a>
            <a
              href="/samuel_rantung_resume.pdf"
              download
              className="link-cta"
            >
              Download Resume <span className="arw">&rarr;</span>
            </a>
          </div>

          <div className="flex items-center gap-4 mt-6 text-ink">
            <a
              href={`mailto:${emailAddress}`}
              aria-label="Send Email"
              className="hover:opacity-75 transition-opacity"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:opacity-75 transition-opacity"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:opacity-75 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="hover:opacity-75 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About & Education */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">Biography &amp; Education</span>
            </div>
            <div>
              <h2 className="fk text-2xl sm:text-3xl mb-4">
                Crafting robust applications with CS &amp; Management expertise
              </h2>
              <p className="muted text-base leading-relaxed mb-4 max-w-[52ch]">
                I am a developer combining a strong technical foundation in Computer Science with strategic insights from my Management background. I thrive in cross-functional agile teams, translating complex mockups into pixel-perfect, highly responsive interfaces, and engineering robust, scalable backends.
              </p>

              <div className="row-list mt-8">
                <div className="row-item reveal-on-scroll">
                  <GraduationCap className="w-5 h-5 text-ink shrink-0 mt-1" />
                  <div>
                    <span className="tag text-xs py-0.5 px-2 mb-2">Expected Jan 2027</span>
                    <h3 className="fk text-lg font-semibold mb-1">Master of Management</h3>
                    <p className="text-sm font-semibold text-ink">Universitas Klabat (Indonesia)</p>
                    <p className="muted text-xs mt-1">Major in Marketing | Minors in Mathematics and Psychology | Current GPA: 3.93/4.0</p>
                  </div>
                </div>
                <div className="row-item reveal-on-scroll">
                  <GraduationCap className="w-5 h-5 text-ink shrink-0 mt-1" />
                  <div>
                    <span className="tag text-xs py-0.5 px-2 mb-2">Summa Cum Laude</span>
                    <h3 className="fk text-lg font-semibold mb-1">Bachelor of Computer Science</h3>
                    <p className="text-sm font-semibold text-ink">Universitas Klabat (Indonesia) - Sep 2022</p>
                    <p className="muted text-xs mt-1">Major in Informatics | Cumulative GPA: 3.91/4.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="sec">
        <div className="wrap">
          <span className="idx">Capabilities</span>
          <h2 className="fk text-2xl sm:text-3xl mt-2 mb-6">Technical &amp; Leadership Skillset</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="py-4 border-t border-line reveal-on-scroll">
              <Code2 className="w-5 h-5 text-ink mb-3" />
              <h3 className="fk text-base font-semibold mb-3">Frontend &amp; Mobile</h3>
              <div className="flex flex-wrap gap-1.5">
                {["ReactJS", "Next.js", "React Native", "Angular", "Ionic", "TypeScript", "JavaScript", "HTML5/CSS3", "SASS", "Tailwind CSS", "Bootstrap"].map((s) => (
                  <span key={s} className="tag text-xs py-0.5 px-2">{s}</span>
                ))}
              </div>
            </div>

            <div className="py-4 border-t border-line reveal-on-scroll">
              <Server className="w-5 h-5 text-ink mb-3" />
              <h3 className="fk text-base font-semibold mb-3">Backend &amp; Logic</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "Express.js", "Python", "FastAPI", "Sequelize ORM", "REST APIs", "MVC Architecture"].map((s) => (
                  <span key={s} className="tag text-xs py-0.5 px-2">{s}</span>
                ))}
              </div>
            </div>

            <div className="py-4 border-t border-line reveal-on-scroll">
              <Database className="w-5 h-5 text-ink mb-3" />
              <h3 className="fk text-base font-semibold mb-3">Databases &amp; Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "MongoDB", "Firebase", "Git", "CI/CD Pipelines", "Figma", "Data Analysis", "Sequelize"].map((s) => (
                  <span key={s} className="tag text-xs py-0.5 px-2">{s}</span>
                ))}
              </div>
            </div>

            <div className="py-4 border-t border-line reveal-on-scroll">
              <Brain className="w-5 h-5 text-ink mb-3" />
              <h3 className="fk text-base font-semibold mb-3">Management</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Team Leadership", "Project Management", "Agile/Scrum", "Systems Analysis", "Critical Thinking"].map((s) => (
                  <span key={s} className="tag text-xs py-0.5 px-2">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="sec">
        <div className="wrap">
          <span className="idx mb-4 block">Work History</span>
          <h2 className="fk text-2xl sm:text-3xl mb-8">Professional Journey</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects */}
      <section className="sec">
        <div className="wrap">
          <span className="idx mb-4 block">Showcase</span>
          <h2 className="fk text-2xl sm:text-3xl mb-8">Featured Projects</h2>
          <ProjectList />
        </div>
      </section>

      {/* Contact Section */}
      <section className="final">
        <div className="wrap">
          <span className="kick">Get in touch</span>
          <h2>Let&apos;s create something together</h2>
          <p>
            Have an idea, project, or full-time position you want to discuss? Reach out on WhatsApp or Email.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill inv"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="link-cta text-white"
            >
              Email Directly <span className="arw">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Page Footer */}
      <footer className="border-t border-line py-8 text-sm text-gray-1">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="fk font-semibold text-ink">Samuel Rantung</span>
          <div className="flex gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="link-cta">
              GitHub
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="link-cta">
              LinkedIn
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="link-cta">
              Instagram
            </a>
            <a href={`mailto:${emailAddress}`} className="link-cta">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
