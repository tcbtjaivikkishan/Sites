"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0) scale(1)";

    switch (direction) {
      case "up":
        return "translate(0, 40px) scale(1)";
      case "down":
        return "translate(0, -40px) scale(1)";
      case "left":
        return "translate(40px, 0) scale(1)";
      case "right":
        return "translate(-40px, 0) scale(1)";
      case "zoom":
        return "translate(0, 0) scale(0.8)";
      default:
        return "translate(0, 40px) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
}

// Batch reveal for multiple items
interface BatchRevealProps {
  children: ReactNode[];
  stagger?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
}

export function BatchReveal({
  children,
  stagger = 100,
  direction = "up",
}: BatchRevealProps) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal key={index} direction={direction} delay={index * stagger}>
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}