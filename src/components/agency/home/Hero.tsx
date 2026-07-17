// src/components/agency/home/Hero.tsx
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  UserCheck,
  TrendingUp,
  MapPin,
  Megaphone,
  BarChart3,
  Palette,
  Rocket,
  Globe,
  Sparkles,
} from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import WhatsAppLink from "../WhatsAppLink";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const hero = dict.home.hero;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated aurora backdrop (decorative) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        {/* Blob A: teal, behind the headline */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[100px] aurora-blob-primary animate-aurora-1" />
        {/* Blob B: amber, behind the collage (replaces the old ambient glow) */}
        <div className="absolute top-1/4 -right-28 w-[560px] h-[560px] rounded-full blur-[100px] aurora-blob-accent animate-aurora-2" />
        {/* Blob C: secondary, bottom-center */}
        <div className="absolute -bottom-44 left-1/3 w-[460px] h-[460px] rounded-full blur-[100px] aurora-blob-secondary animate-aurora-3" />
        {/* Rotating aurora ribbon behind the collage side */}
        <div className="absolute top-[5%] right-[-15%] w-[700px] h-[700px] rounded-full blur-[70px] aurora-ribbon animate-aurora-spin" />
        {/* Dot grid texture */}
        <div className="absolute inset-0 hero-dot-grid" />
        {/* Readability scrim over the copy column */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[58%] hero-copy-scrim" />
        {/* Edge vignette */}
        <div className="absolute inset-0 hero-vignette" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Free-floating icon chips (decorative) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Desktop: drift near the headline's right edge */}
          <div className="hidden md:block absolute top-[16%] left-[50%] animate-chip-5">
            <div className="bg-card/70 backdrop-blur border border-border/40 shadow-lg rounded-2xl p-3">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
          </div>
          <div className="hidden md:block absolute bottom-[18%] left-[46%] animate-chip-6">
            <div className="bg-card/70 backdrop-blur border border-border/40 shadow-lg rounded-2xl p-3">
              <Globe className="w-5 h-5 text-primary" />
            </div>
          </div>
          {/* Mobile: low-density energy around the headline, away from the CTA */}
          <div className="md:hidden absolute top-8 right-5 animate-chip-1">
            <div className="bg-card/70 backdrop-blur border border-border/40 shadow-md rounded-xl p-2.5">
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
          </div>
          <div className="md:hidden absolute top-24 left-4 animate-chip-3">
            <div className="bg-card/70 backdrop-blur border border-border/40 shadow-md rounded-xl p-2.5">
              <Megaphone className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="md:hidden absolute bottom-10 right-6 animate-chip-4">
            <div className="bg-card/70 backdrop-blur border border-border/40 shadow-md rounded-xl p-2.5">
              <Rocket className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        {/* Left: copy */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-foreground mb-6 leading-tight">
          {hero.titleLead}{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {hero.titleHighlight}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted mb-10 leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-col items-center md:items-start gap-3">
          <WhatsAppLink
            message={dict.cta.whatsappMessage}
            source="home_hero"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.cta.whatsappLabel}
            <ArrowRight className="w-4 h-4 ml-1" />
          </WhatsAppLink>
          <span className="text-xs text-muted">{dict.cta.whatsappNote}</span>
        </div>

        {/* Trust strip */}
        <ul className="mt-10 flex flex-col sm:flex-row md:flex-col lg:flex-row flex-wrap gap-x-6 gap-y-2 text-sm text-muted justify-center md:justify-start">
          <li className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-primary" />
            {hero.trust.founderLed}
          </li>
          <li className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            {hero.trust.roi}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            {hero.trust.local}
          </li>
        </ul>

        <Link
          href={localePath(locale, "/tentang/samuel")}
          className="inline-block mt-12 text-sm font-semibold text-muted hover:text-primary transition-colors"
        >
          {dict.nav.aboutSamuel} →
        </Link>
      </div>

      {/* Right: illustration collage */}
      <div className="relative hidden md:flex items-center justify-center min-h-[500px] w-full">
        
        <div className="relative w-full max-w-[500px] h-[480px]">
          {/* 1. Content Team SVG - Top Left */}
          <div className="absolute top-4 left-0 w-[55%] z-10 animate-float-1">
            <div className="bg-card rounded-2xl border border-border/40 p-2 shadow-lg transition-all duration-300 hover:scale-105 hover:z-30 hover:border-primary/30">
              <Image
                src="/illustrations/content-team.svg"
                alt="Content Team"
                width={280}
                height={220}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 2. Data Transfer SVG - Bottom Left */}
          <div className="absolute bottom-6 left-6 w-[52%] z-20 animate-float-2">
            <div className="bg-card rounded-2xl border border-border/40 p-2 shadow-md transition-all duration-300 hover:scale-105 hover:z-30 hover:border-primary/30">
              <Image
                src="/illustrations/data-transfer.svg"
                alt="Data Transfer"
                width={260}
                height={90}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 3. Online Party SVG - Top Right */}
          <div className="absolute top-10 right-0 w-[50%] z-15 animate-float-3">
            <div className="bg-card rounded-2xl border border-border/40 p-2 shadow-md transition-all duration-300 hover:scale-105 hover:z-30 hover:border-primary/30">
              <Image
                src="/illustrations/online-party.svg"
                alt="Online Party"
                width={250}
                height={190}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 4. Mobile Marketing SVG - Center / Focal Right */}
          <div className="absolute bottom-2 right-4 w-[62%] z-25 animate-float-4">
            <div className="bg-card rounded-3xl border border-primary/20 p-3.5 shadow-2xl transition-all duration-300 hover:scale-105 hover:z-35 hover:border-primary/50">
              <Image
                src="/illustrations/mobile-marketing.svg"
                alt="Mobile Marketing"
                width={310}
                height={290}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Floating icon chips orbiting the collage (decorative) */}
          <div aria-hidden="true" className="pointer-events-none">
            <div className="absolute -top-8 left-[42%] z-30 animate-chip-1">
              <div className="bg-card/70 backdrop-blur border border-border/40 shadow-lg rounded-2xl p-3">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="absolute top-[42%] -right-9 z-30 animate-chip-pulse rounded-2xl">
              <div className="bg-card/70 backdrop-blur border border-border/40 shadow-lg rounded-2xl p-3">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
            </div>
            <div className="absolute top-[36%] -left-9 z-30 animate-chip-3">
              <div className="bg-card/70 backdrop-blur border border-border/40 shadow-lg rounded-2xl p-3">
                <Palette className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-7 left-[28%] z-30 animate-chip-4">
              <div className="bg-card/70 backdrop-blur border border-border/40 shadow-lg rounded-2xl p-3">
                <Rocket className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
