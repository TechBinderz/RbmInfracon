// src/hooks/useScrollEffect.ts
import { useEffect } from "react";

const useScrollEffect = (className: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className]);
};

export default useScrollEffect;
