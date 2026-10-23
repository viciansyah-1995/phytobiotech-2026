"use client";
import { useEffect } from "react";

/** One observer, one-time reveals, no scroll handlers or animation dependency. */
export function useReveal(route = "") {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("reveal-ready");
      observer.observe(element);
    });
    const onPreference = () => {
      if (reduced.matches) {
        document.documentElement.classList.remove("motion-ready");
        observer.disconnect();
      }
    };
    reduced.addEventListener("change", onPreference);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", onPreference);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [route]);
}
