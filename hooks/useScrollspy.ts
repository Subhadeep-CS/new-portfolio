"use client";

import { useState, useEffect } from "react";

export function useScrollspy(ids: string[], threshold = 180) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently active
      let currentActive = "";
      
      // Check if we are at the top of the page (within first 20px)
      if (window.scrollY < 20) {
        currentActive = ids[0] || "";
      } else {
        // Check if we are at the very bottom of the page
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 60;

        if (isAtBottom && ids.length > 0) {
          currentActive = ids[ids.length - 1];
        } else {
          // Find the last section that has scrolled past the threshold (100px from top of viewport)
          for (const id of ids) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= threshold) {
                currentActive = id;
              }
            }
          }
        }
      }

      setActiveId(currentActive || ids[0] || "");
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, threshold]);

  return activeId;
}
