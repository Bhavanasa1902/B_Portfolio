"use client";

import * as React from "react";
import { Reveal, Stagger, StaggerItem, SectionLabel } from "./primitives";
import { profile } from "@/lib/portfolio-data";

/* ============================================================
   About — editorial manifesto + stat band + principles.
   Mirrors engineer-showcase: massive serif numerals as graphic
   anchors, italic philosophy headings, hairline rules between
   principles.
   ============================================================ */

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-24 md:py-36 border-t border-rule"
      aria-labelledby="about-heading"
    >
      <div className="container-editorial">
        {/* Section header */}
        <Reveal>
          <SectionLabel
            index="01"
            eyebrow="About"
            title={
              <>
                The discipline of treating
                <br className="hidden sm:block" /> data as a{" "}
                <span className="italic font-normal text-ink-soft">product</span>.
              </>
            }
          />
        </Reveal>

        {/* Manifesto — multi-column reading layout */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3 lg:pt-2">
            <Reveal delay={0.05}>
              <p className="eyebrow-parens">Manifesto</p>
              <p className="mt-3 font-mono-label text-[10px] text-ink-mute uppercase tracking-[0.18em]">
                On what I build, and why
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9 lg:col-start-4">
            <Stagger as="div" className="flex flex-col gap-7 max-w-3xl" gap={0.12}>
              {profile.manifesto.map((para, i) => (
                <StaggerItem key={i} as="div">
                  {/* Large serif drop cap on first paragraph — styled via CSS for consistent alignment */}
                  {i === 0 ? (
                    <p className="manifesto-first text-ink-soft">
                      <span className="drop-cap" aria-hidden>
                        {para.charAt(0)}
                      </span>
                      <span className="manifesto-first-body">{para.slice(1)}</span>
                    </p>
                  ) : (
                    <p className="manifesto-body text-ink-soft">{para}</p>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>



        {/* Principles — three positioning pillars */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className="eyebrow-parens mb-3">How I work</p>
                <h3 className="font-display text-3xl md:text-4xl text-ink font-medium leading-[1.05] tracking-[-0.02em]">
                  Three principles,{" "}
                  <span className="italic font-normal text-ink-soft">no surprises</span>.
                </h3>
              </div>
              <p className="max-w-sm text-ink-mute text-sm leading-relaxed">
                The same lens applies whether I&apos;m shipping a schema, an ETL
                pipeline, or an ML feature store.
              </p>
            </div>
          </Reveal>

          <Stagger
            as="ol"
            className="flex flex-col"
            gap={0}
          >
            {profile.principles.map((p, i) => (
              <StaggerItem
                key={p.title}
                as="li"
                className="border-t border-rule last:border-b last:border-b-rule"
              >
                <PrincipleRow principle={p} index={i + 1} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------- Principle row — editorial spread with massive numeral ---------- */
function PrincipleRow({
  principle,
  index,
}: {
  principle: (typeof profile.principles)[number];
  index: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-start group">
      {/* Massive serif numeral as graphic anchor */}
      <div className="md:col-span-2">
        <span className="numeral block font-display font-medium text-ink leading-none text-[clamp(3rem,8vw,4rem)] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Italic philosophy heading */}
      <div className="md:col-span-5">
        <h4 className="font-display text-xl md:text-2xl text-ink font-medium leading-tight">
          <span className="italic font-normal text-ink-soft">{principle.title.split(" ")[0]}</span>{" "}
          {principle.title.split(" ").slice(1).join(" ")}
        </h4>
      </div>

      {/* Body */}
      <div className="md:col-span-5">
        <p className="text-[15px] md:text-base text-ink-soft leading-relaxed">
          {principle.body}
        </p>
      </div>
    </div>
  );
}
