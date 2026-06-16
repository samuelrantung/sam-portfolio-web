import Navbar from "@/components/Navbar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectList from "@/components/ProjectCard";
import {
  Mail,
  ArrowRight,
  Code2,
  Database,
  Brain,
  GraduationCap,
  MessageCircle,
  Download,
  Server
} from "lucide-react";
import { Github, Linkedin, Instagram } from "@/components/BrandIcons";

export default function Home() {
  const emailAddress = "samuelmrantung@gmail.com";
  const whatsappUrl = "https://wa.me/6282187792052";
  const githubUrl = "https://github.com/samuelrantung"; // Placeholder, user can update
  const linkedinUrl = "https://www.linkedin.com/in/samrant/"; // Placeholder, user can update
  const instagramUrl = "https://instagram.com/sam.rant"; // Placeholder, user can update

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" />

      {/* Navigation Header */}
      <Navbar />

      {/* Ambient Glows */}
      <div className="relative overflow-hidden min-h-screen">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-[-100px] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-secondary/15 dark:bg-secondary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] left-[-100px] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-accent/15 dark:bg-accent/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:py-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center justify-center min-h-[90vh]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20 mb-6 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Open for Opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight text-foreground max-w-4xl mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Samuel Rantung
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/90 max-w-2xl mb-4 leading-normal font-display">
            Full Stack & Frontend Developer
          </p>

          <p className="text-sm sm:text-base text-muted max-w-xl mb-10 leading-relaxed">
            Specializing in high-performance React, Next.js, React Native, and Node.js solutions. Focused on clean code, UI/UX fidelity, and robust application architectures.
          </p>

          <h1>test
          </h1>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4 sm:px-0 mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact via WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="/samuel_rantung_resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border/80 bg-card/40 hover:bg-card/75 text-foreground font-semibold text-sm transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Icons Deck */}
          <div className="flex items-center gap-4 text-muted">
            <a
              href={`mailto:${emailAddress}`}
              className="p-3 rounded-xl border border-border/40 bg-card/15 hover:bg-card hover:border-primary/45 hover:text-primary transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/40 bg-card/15 hover:bg-card hover:border-primary/45 hover:text-primary transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/40 bg-card/15 hover:bg-card hover:border-primary/45 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/40 bg-card/15 hover:bg-card hover:border-primary/45 hover:text-primary transition-all duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* About & Education Section */}
        <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5 block">
                Biography
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight mb-6 leading-tight">
                Crafting robust applications with CS & Management expertise
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                I am a developer combining a strong technical foundation in Computer Science with strategic insights from my Management background. I thrive in cross-functional agile teams, translating complex mockups into pixel-perfect, highly responsive interfaces, and engineering robust, scalable backends.
              </p>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                With experiences spanning mobile development (React Native, Ionic/Angular), frontend (Next.js, React), and backend pipelines (Node.js, Express, FastAPI, databases), I specialize in shipping end-to-end features that prioritize performance and clean code.
              </p>
            </div>

            {/* Education Highlight Cards */}
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5 block">
                Education
              </span>
              <div className="p-6 rounded-2xl border border-border/40 bg-card/25 hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/25">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-primary tracking-wide uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/25 inline-block mb-2.5">
                      Expected Jan 2027
                    </span>
                    <h3 className="font-bold text-lg font-display text-foreground leading-snug">
                      Master of Management
                    </h3>
                    <p className="text-sm font-semibold text-foreground/85 mt-0.5">
                      Universitas Klabat (Indonesia)
                    </p>
                    <p className="text-xs text-muted mt-2">
                      Major in Marketing; Minors in Mathematics and Psychology | Current GPA: 3.93/4.0
                    </p>
                    <p className="text-xs text-muted/80 mt-2 italic leading-relaxed">
                      Coursework: Business Operations, Strategic Talent Management, Consumer Behavior Analysis, Strategic Tech Management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border/40 bg-card/25 hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/25">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 tracking-wide uppercase px-2 py-0.5 rounded bg-emerald-100 border border-emerald-200 inline-block mb-2.5 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30">
                      Summa Cum Laude
                    </span>
                    <h3 className="font-bold text-lg font-display text-foreground leading-snug">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-sm font-semibold text-foreground/85 mt-0.5">
                      Universitas Klabat (Indonesia) – Sep 2022
                    </p>
                    <p className="text-xs text-muted mt-2">
                      Major in Informatics | Cumulative GPA: 3.91/4.0
                    </p>
                    <p className="text-xs text-muted/80 mt-2 italic leading-relaxed">
                      Coursework: Web Development, Mobile Applications, Computer Security, Database Management, Project Management, Systems Analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/20">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4 text-foreground">
              Technical & Leadership Skillset
            </h2>
            <p className="text-sm md:text-base text-muted">
              A comprehensive toolkit spanning clientside frameworks, backend endpoints, database tools, and agile product management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/20 hover:bg-card/45 transition-all duration-300 reveal-on-scroll flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 w-fit mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-display text-foreground mb-3">
                  Frontend & Mobile
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["ReactJS", "Next.js", "React Native", "Angular", "Ionic", "TypeScript", "JavaScript", "HTML5/CSS3", "SASS", "Tailwind CSS", "Bootstrap", "Handlebars"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-background border border-border/60 text-[10px] font-medium text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/20 hover:bg-card/45 transition-all duration-300 reveal-on-scroll flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 w-fit mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-display text-foreground mb-3">
                  Backend & Logic
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Express.js", "Python", "FastAPI", "Sequelize ORM", "REST APIs", "MVC Architecture"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-background border border-border/60 text-[10px] font-medium text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/20 hover:bg-card/45 transition-all duration-300 reveal-on-scroll flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 w-fit mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-display text-foreground mb-3">
                  Databases & Tools
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["PostgreSQL", "MongoDB", "Firebase", "Git", "CI/CD Pipelines", "Figma", "Data Analysis", "Sequelize"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-background border border-border/60 text-[10px] font-medium text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Leadership & Management */}
            <div className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/20 hover:bg-card/45 transition-all duration-300 reveal-on-scroll flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 w-fit mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-display text-foreground mb-3">
                  Management & Soft Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Team Leadership", "Project Management", "Agile/Scrum", "Systems Analysis", "Critical Thinking", "Problem Solving", "Cross-functional Collab"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-background border border-border/60 text-[10px] font-medium text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5 block">
                Work History
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground tracking-tight mb-4 leading-tight">
                Professional Journey
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed hidden">
                Explore the roles and technologies behind my professional experience. Filter the timeline based on job categories or click on cards to reveal detailed accomplishments.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ExperienceTimeline />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/20">
          <div className="max-w-3xl mb-6 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5 block">
              Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground mb-2">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base text-muted hidden">
              Select projects highlighting expertise in machine learning automation, healthcare-tech frontend engineering, and clean code refactoring.
            </p>
          </div>
          <ProjectList />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/20">
          <div className="relative glass border border-border/40 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto overflow-hidden reveal-on-scroll">
            {/* Ambient card glows */}
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/10 rounded-full blur-[60px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-secondary/10 rounded-full blur-[60px] pointer-events-none -z-10" />

            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
              Let's create something together
            </h2>
            <p className="text-sm md:text-base text-muted max-w-lg mx-auto mb-8 leading-relaxed">
              Have an idea, project, or full-time position you want to discuss? Click the button below to reach out directly on WhatsApp. I usually respond within a few hours!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-103 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border/80 bg-card hover:bg-card/75 text-foreground font-semibold text-sm transition-all duration-300 hover:scale-103 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/20 text-center text-xs text-muted max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <span className="font-display font-bold text-base text-foreground">
              Samuel Rantung
            </span>
            <div className="flex gap-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                GitHub
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                LinkedIn
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                Instagram
              </a>
              <a href={`mailto:${emailAddress}`} className="hover:text-primary transition-colors cursor-pointer">
                Email
              </a>
            </div>
          </div>
          <p className="leading-relaxed text-[11px] text-muted/85">
            &copy; {new Date().getFullYear()} Samuel Rantung. All rights reserved. Built with Next.js, Tailwind CSS v4, and Lucide React.
          </p>
        </footer>
      </div>
    </>
  );
}
