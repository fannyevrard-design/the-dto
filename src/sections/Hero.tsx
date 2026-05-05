import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LangContext";

// Path data inlined from dto-logo-horizontal.svg (viewBox "0 0 441 90.72")
// [0–9]  = wordmark "DatsTheOne"  |  [10–14] = sigle (face mark, x ≈ 0–90)
const LOGO_PATHS = [
  // 0 — D
  "M134.92,68.29l-14.64.02V22.5h14.26c11.94.01,22.04,10.44,22.04,22.95s-9.77,22.84-21.66,22.84ZM152.45,45.5c0-12.23-8.28-22.31-18.1-22.31h-10.17v44.43h10.58c9.92,0,17.68-9.89,17.68-22.13Z",
  // 1 — a
  "M188.16,65.92c-.72.92-2.1,2.24-4.17,2.24-3.29,0-3.29-3.41-3.29-3.41v-3.41c-1.68,3.63-5.22,7.08-11.86,7.08-5.84,0-9.76-3.29-9.76-8.2,0-2.9,1.06-5.42,3.16-7.47,4.81-4.71,13.94-5.76,18.47-6v-2.97c0-5.16-2.67-8.67-7.94-8.67-2.8,0-5.22,1.52-6.55,3.76-.2-.23-.41-.44-.64-.64,1.6-2.16,4.32-3.81,7.49-3.81,5.31,0,11.56,1.18,11.56,9.98v20.74c0,1.54.73,1.75,1.4,1.75.72,0,1.46-.83,1.91-1.42.08.15.16.29.24.44ZM180.7,47.43c-8.59.54-17.37,3.85-17.37,11.95,0,4.93,2.54,8.16,6.93,8.16,6.02,0,9.21-4.71,10.44-8.48v-11.63Z",
  // 2 — t
  "M198.02,35.65v29.5c0,1.54.74,1.75,1.41,1.75.72,0,1.46-.83,1.91-1.42.08.15.16.29.24.44-.72.92-2.1,2.24-4.17,2.24-3.29,0-3.29-3.41-3.29-3.41v-29.1h-4.47v-.69h4.47v-12.61h3.91v12.61h6.83v.69h-6.83Z",
  // 3 — s
  "M230.33,60.66c-1.03,4.55-5.07,7.5-11.02,7.5-8.48,0-12.51-4.7-12.51-7.26,0-.42.34-1.12,1.11-1.12.56,0,1.3.32,1.41,1.41.27,2.72,3.69,6.28,9.99,6.28,5.57,0,9.48-3.08,9.48-6.63,0-4.28-5.01-5.78-8.29-6.69-1.82-.51-5.77-1.54-7.14-2.05-5.02-1.86-7.25-5.71-6.26-10.07,1.03-4.55,5.07-7.5,11.02-7.5,7.78,0,11.53,4.86,11.24,7.25-.05.43-.34,1.12-1.11,1.12-.56,0-1.22-.33-1.41-1.41-.42-2.36-2.41-6.28-8.72-6.28-5.57,0-9.48,3.08-9.48,6.64,0,4.28,4.25,6.07,7.53,7.01,2.21.63,4.7,1.33,7.14,2.05,5.14,1.51,8.02,5.39,7.03,9.75Z",
  // 4 — T
  "M261.35,23.19h-15.02v45.09h-3.91V23.19h-15.02v-.69h33.95v.69Z",
  // 5 — h
  "M291.88,65.92c-.72.92-2.1,2.24-4.17,2.24-3.29,0-3.29-3.41-3.29-3.41v-20.97c0-5.16-2.66-8.67-7.94-8.67-4.08,0-8.44,3.38-8.72,7.42v25.62h-3.91V22.35h3.91v17.21c1.76-3.23,5.53-5.13,9.02-5.13,5.31,0,11.56,1.18,11.56,9.98v20.74c0,1.54.73,1.75,1.4,1.75.72,0,1.46-.83,1.91-1.42.08.15.16.29.24.44Z",
  // 6 — e
  "M324.62,57.75l.86.17s-3.6,10.9-14.97,10.9c-8.89,0-16.1-7.7-16.1-17.19s7.21-17.19,16.1-17.19c7.46,0,16.1,6.07,16.1,17.19h-28.53v.04c0,9.25,5.56,16.5,12.43,16.5,10.86,0,14.1-10.41,14.1-10.41ZM298.12,50.94h24.78c-.3-9.66-6.32-15.9-12.37-15.9-6.68,0-12.12,6.99-12.4,15.9Z",
  // 7 — O
  "M374.97,45.36c0,12.99-9.86,23.52-22.02,23.52s-22.02-10.53-22.02-23.52,9.86-23.52,22.02-23.52,22.02,10.53,22.02,23.52ZM370.84,45.41c0-12.65-8.01-22.9-17.89-22.9s-17.89,10.25-17.89,22.9,8.01,22.9,17.89,22.9,17.89-10.25,17.89-22.9Z",
  // 8 — n
  "M407.65,65.92c-.72.92-2.1,2.24-4.17,2.24-3.29,0-3.29-3.41-3.29-3.41v-20.97c0-5.16-2.66-8.67-7.94-8.67-4.08,0-8.44,3.38-8.72,7.42v25.62h-3.91v-33.2h3.91v4.6c1.76-3.23,5.53-5.13,9.02-5.13,5.31,0,11.56,1.18,11.56,9.98v20.74c0,1.54.73,1.75,1.4,1.75.72,0,1.46-.83,1.91-1.42.08.15.16.29.24.44Z",
  // 9 — e
  "M439,57.75l.87.17s-3.6,10.9-14.97,10.9c-8.89,0-16.1-7.7-16.1-17.19s7.21-17.19,16.1-17.19c7.46,0,16.1,6.07,16.1,17.19h-28.53v.04c0,9.25,5.56,16.5,12.43,16.5,10.86,0,14.1-10.41,14.1-10.41ZM412.5,50.94h24.77c-.3-9.66-6.32-15.9-12.37-15.9-6.68,0-12.12,6.99-12.4,15.9Z",
  // 10 — sigle outer
  "M54.29,90.57c-8.45.56-16.79-.37-24.68-3.63-10.94-4.82-19.24-14.64-22.61-26.11l-6.89.17s-.05-3.31-.05-3.31C-1.04,29.44,13.03,4.19,42.99.5c4.61-.69,9.52-.6,14.33-.13,0,0-.1,2.92-.1,2.92l-.94,27.03c-.16,7.8-.93,19.13-1.32,27.04,0,0-.05.84-.05.84l-.75-.03c-2.69-.11-5.38-.3-8.07-.44-.26,0-.24-.41,0-.41l7.83-.18-.18-53.53c-13.88-.63-28.37,4.09-37.65,14.78-4.66,5.24-7.88,11.67-9.76,18.44-1.93,6.76-2.68,13.51-2.69,20.55h5.77c.37,0,.24,0,.32.29,2.48,13.66,12.84,25.31,26.01,29.63,3.49,1.15,7.39,1.94,11.02,2.44,2.5.22,5.02.29,7.53.44.25-.01.26.41,0,.41h0Z",
  // 11 — sigle circle 1
  "M54.02,12.9c28.88-4,45.49,23.7,35.83,49.34-5.57,13.8-21.38,22.58-35.63,20.87-.24-.02-.23-.4.01-.41,9.1-.34,18.02-4.3,24.56-10.59,13.12-12.59,12.97-36.61.18-49.36-6.58-6.36-15.87-9.36-24.96-9.44-.25.02-.27-.42,0-.41h0Z",
  // 12 — sigle circle 2
  "M53.64,13.3c-19.37,1.57-36.5,19.8-30.18,39.28,6.19,19.65,29.2,25.85,47.08,16.56.2-.16.46.2.23.34-8.51,5.87-19.62,8.02-29.67,5.24-15.19-4.06-26.02-20.82-22.16-36.32,3.35-15.65,19.1-26.24,34.72-25.51.26.02.25.4-.01.41h0Z",
  // 13 — left eye
  "M31.01,42.85c3.2-4.7,9.28-4.55,12.39.16.07.09,0,.24-.11.25-4.09.25-8.18.26-12.27,0-.24-.05-.11-.29,0-.41h0Z",
  // 14 — right eye
  "M76.79,40.56c-3.2,4.7-9.28,4.55-12.39-.16-.07-.09,0,.24.11.25,4.09.25,8.18.26,12.27,0,.24.05.11.29,0,.41h0Z",
];

const WORDMARK_IDX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SIGLE_IDX = [10, 11, 12, 13, 14];

export const Hero = () => {
  const { t, openWaitlist } = useLang();
  const wrapRef = useRef<HTMLElement>(null);
  const [w, setW] = useState(1280);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase(4);
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => setPhase(3), 3300);
    const t4 = setTimeout(() => setPhase(4), 3900);
    return () => { [t1, t2, t3, t4].forEach(clearTimeout); };
  }, []);

  const isMobile  = w < 600;
  const isTablet  = w >= 600 && w < 900;
  const isDesktop = w >= 900;

  const drawing   = phase >= 1;
  const filled    = phase >= 2;
  const moved     = phase >= 3;
  const contentIn = phase >= 4;

  let sigleTransform: string;
  if (isDesktop)     sigleTransform = "translate(345px, 0px) scale(2.6)";
  else if (isTablet) sigleTransform = "translate(0px, -180px) scale(3.6)";
  else               sigleTransform = "translate(0px, -240px) scale(3.0)";

  const logoStageWidth = isMobile ? "84%" : isTablet ? "78%" : "min(72%, 920px)";
  const pad            = isMobile ? 24 : isTablet ? 40 : 56;
  const contentMaxW    = isMobile ? "100%" : isTablet ? "85%" : 540;

  const fillColor   = "hsl(var(--dto-text-soft))";
  const strokeColor = "hsl(var(--dto-text-soft))";

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative overflow-hidden bg-dto-bg"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Folio bar (desktop only) ─────────────────────────────────── */}
      {isDesktop && (
        <div
          className="absolute z-10 font-monoui text-[11px] uppercase tracking-[0.22em] flex justify-between items-center w-full"
          style={{
            top: pad - 20,
            left: pad,
            right: pad,
            width: `calc(100% - ${pad * 2}px)`,
            color: "hsl(var(--dto-text-soft) / 0.55)",
            opacity: contentIn ? 1 : 0,
            transition: "opacity 700ms ease 100ms",
          }}
        >
          <span>DatsTheOne — Édition n°01</span>
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block rounded-full"
              style={{ width: 6, height: 6, background: "hsl(var(--dto-sage))" }}
            />
            Pré-lancement / 2026
          </span>
        </div>
      )}

      {/* ── Logo stage ───────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]"
      >
        <div style={{ position: "relative", width: logoStageWidth }}>
          <svg
            viewBox="0 0 441 90.72"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
          >
            {/* Wordmark — fades out after fill */}
            <g style={{ opacity: moved ? 0 : 1, transition: "opacity 600ms ease" }}>
              {WORDMARK_IDX.map((idx) => (
                <path
                  key={idx}
                  d={LOGO_PATHS[idx]}
                  style={{
                    fill: filled ? fillColor : "transparent",
                    stroke: strokeColor,
                    strokeWidth: 0.4,
                    strokeLinejoin: "round" as const,
                    strokeLinecap: "round" as const,
                    strokeDasharray: 800,
                    strokeDashoffset: drawing ? 0 : 800,
                    transition: `stroke-dashoffset 1700ms cubic-bezier(.55,.05,.25,1) ${idx * 50}ms, fill 600ms ease 200ms`,
                  }}
                />
              ))}
            </g>

            {/* Sigle — translates to final position */}
            <g
              style={{
                transformOrigin: "65px 45px",
                transform: moved
                  ? sigleTransform
                  : "translate(0px, 0px) scale(1)",
                transition: "transform 1400ms cubic-bezier(.55,.05,.25,1)",
              }}
            >
              {SIGLE_IDX.map((idx) => (
                <path
                  key={idx}
                  d={LOGO_PATHS[idx]}
                  style={{
                    fill: filled ? fillColor : "transparent",
                    stroke: strokeColor,
                    strokeWidth: 0.4,
                    strokeLinejoin: "round" as const,
                    strokeLinecap: "round" as const,
                    strokeDasharray: 1200,
                    strokeDashoffset: drawing ? 0 : 1200,
                    transition: `stroke-dashoffset 1900ms cubic-bezier(.55,.05,.25,1) ${(idx - 10) * 80}ms, fill 700ms ease 200ms`,
                  }}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* ── Content block ─────────────────────────────────────────────── */}
      <div
        className="absolute z-[4]"
        style={{
          top:       isDesktop ? "50%" : "auto",
          bottom:    isDesktop ? "auto" : pad,
          left:      pad,
          right:     isDesktop ? "auto" : pad,
          maxWidth:  contentMaxW,
          transform: isDesktop
            ? (contentIn ? "translateY(-50%)"                    : "translateY(calc(-50% + 16px))")
            : (contentIn ? "translateY(0)"                       : "translateY(16px)"),
          opacity:    contentIn ? 1 : 0,
          transition: "opacity 900ms ease, transform 900ms cubic-bezier(.2,.7,.2,1)",
        }}
      >
        {/* Badge */}
        <div
          className="inline-block font-body font-semibold uppercase tracking-[0.22em]"
          style={{
            background:   "hsl(var(--dto-sage))",
            color:        "hsl(var(--dto-bg))",
            padding:      isMobile ? "7px 13px" : "9px 16px",
            fontSize:     isMobile ? 9 : 10,
            marginBottom: isMobile ? 20 : 28,
          }}
        >
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1
          className="font-editorial text-dto-text"
          style={{
            fontSize: isMobile
              ? "clamp(32px, 9vw, 44px)"
              : isTablet
                ? "clamp(36px, 6vw, 52px)"
                : "clamp(36px, 4.4vw, 60px)",
            lineHeight:    0.98,
            letterSpacing: "-0.02em",
            fontWeight:    300,
            margin:        isMobile ? "0 0 18px 0" : "0 0 24px 0",
          }}
        >
          {t.hero.titleA && (
            <>
              {t.hero.titleA}
              <br />
            </>
          )}
          <span className="italic text-sage" style={{ fontWeight: 400 }}>
            {t.hero.titleB}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-soft"
          style={{
            fontSize:  isMobile ? 14 : 15.5,
            lineHeight: 1.65,
            maxWidth:  isMobile ? "100%" : 460,
            margin:    isMobile ? "0 0 24px 0" : "0 0 32px 0",
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA + social proof */}
        <div
          style={{
            display:       "flex",
            alignItems:    isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap:           isMobile ? 18 : 28,
            flexWrap:      "wrap",
          }}
        >
          <button
            type="button"
            onClick={openWaitlist}
            className="font-body font-semibold tracking-[0.04em] transition-transform duration-200 hover:-translate-y-[2px]"
            style={{
              background:   "hsl(var(--dto-text-soft))",
              color:        "hsl(var(--dto-bg))",
              border:       "none",
              borderRadius: 999,
              padding:      isMobile ? "13px 24px" : "15px 30px",
              fontSize:     isMobile ? 13 : 14,
              cursor:       "pointer",
              width:        isMobile ? "100%" : "auto",
            }}
          >
            {t.hero.cta} →
          </button>

          <div
            style={{
              display:        "flex",
              flexDirection:  isMobile ? "row" : "column",
              alignItems:     isMobile ? "center" : "flex-start",
              gap:            isMobile ? 10 : 4,
            }}
          >
            <span aria-hidden className="text-sage" style={{ letterSpacing: "2px", fontSize: 13 }}>
              ★★★★★
            </span>
            <span
              className="font-monoui uppercase text-soft"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              {t.social.signups}
            </span>
          </div>
        </div>

        {/* Micro */}
        <p className="text-muted-soft text-[11px] mt-3">{t.hero.micro}</p>
      </div>

      {/* ── Vertical label (desktop only) ────────────────────────────── */}
      {isDesktop && (
        <div
          className="absolute font-monoui text-[10px] uppercase tracking-[0.3em] whitespace-nowrap z-[3]"
          style={{
            right:      28,
            bottom:     64,
            writingMode: "vertical-rl",
            color:      "hsl(var(--dto-text-soft) / 0.30)",
            opacity:    contentIn ? 1 : 0,
            transition: "opacity 700ms ease 600ms",
          }}
        >
          Hero / 01 — Monumental
        </div>
      )}
    </section>
  );
};

export default Hero;
