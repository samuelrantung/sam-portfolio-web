"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Intersection Observer to handle fade-in when elements enter the viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Stop observing once the element is visible to prevent repeat animations
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // trigger early when 5% of the element is visible
        rootMargin: "0px 0px -40px 0px", // trigger slightly before it fully enters
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll:not(.is-visible)");
      elements.forEach((el) => intersectionObserver.observe(el));
    };

    // Progress Bar Update via requestAnimationFrame
    let ticking = false;
    const updateProgressBar = () => {
      const scrollProgress = document.querySelector(".scroll-progress") as HTMLElement;
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
        scrollProgress.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgressBar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgressBar();

    // Smooth scroll for anchor clicks (without needing global scroll-behavior: smooth)
    const handleAnchorClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      const anchor = targetElement.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Initial run
    observeElements();

    // MutationObserver to watch for dynamic DOM changes (e.g. experience timeline filtering)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
