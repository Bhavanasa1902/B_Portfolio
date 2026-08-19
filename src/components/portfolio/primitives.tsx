"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion, type Variants } from "motion/react";

/* ============================================================
   Reveal — scroll-triggered fade/translate wrapper.
   Respects prefers-reduced-motion automatically.
   ============================================================ */
type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  const reduced = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    const Tag = as as React.ElementType;
    return (
      <Tag ref={ref as React.Ref<any>} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ============================================================
   Stagger — container that staggers its <Reveal> children.
   ============================================================ */
type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  gap?: number; // seconds between each child
  as?: "div" | "ul" | "ol" | "section" | "dl";
};

export function Stagger({ children, className, gap = 0.08, as = "div" }: StaggerProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : gap,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}

/* ============================================================
   StaggerItem — child of Stagger
   ============================================================ */
type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article" | "span" | "p";
};

export function StaggerItem({ children, className, y = 20, as = "div" }: StaggerItemProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const itemVariants: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

/* ============================================================
   SectionLabel — parens-wrapped eyebrow + numeral + title.
   Mirrors engineer-showcase pattern:
     (SELECTED WORK) — 02
     Massive serif headline below
   ============================================================ */
type SectionLabelProps = {
  index: string; // e.g. "01"
  eyebrow: string; // e.g. "Selected Work" — rendered as (SELECTED WORK)
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionLabel({
  index,
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={[
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      ].join(" ")}
    >
      <div className="flex items-baseline gap-4 text-ink-mute">
        <span className="eyebrow-parens">{eyebrow}</span>
        <span aria-hidden className="h-px w-8 bg-rule-strong" />
        <span className="numeral text-sm tabular-nums tracking-tight">{index}</span>
      </div>
      <h2 className="font-display text-ink leading-[1.02] font-medium text-[clamp(2.25rem,6vw,4.5rem)] tracking-[-0.025em]">
        {title}
      </h2>
    </div>
  );
}
