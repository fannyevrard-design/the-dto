import { useLang } from "@/i18n/LangContext";
import { DtoReveal } from "@/components/DtoReveal";
import heroHelene from "@/assets/hero-helene.png";

export const Pillars = () => {
  const { t } = useLang();

  const ICONS = [
    <div key="i1" className="size-2 rounded-full bg-sage" />,
    <div key="i2" className="size-3 border border-sage rotate-45" />,
    <div key="i3" className="w-4 h-px bg-sage" />,
  ];

  return (
    <section
      id="features"
      className="section-pad relative overflow-hidden"
      style={{ background: "hsl(var(--dto-bg-elev))" }}
    >
      <div className="container-dto">
        {/* Header */}
        <DtoReveal>
          <div className="text-center max-w-[820px] mx-auto">
            <div className="kicker mb-5">{t.pillars.eyebrow}</div>
            <h2
              className="font-editorial text-dto-text"
              style={{
                fontSize: "clamp(36px, 4.6vw, 60px)",
                lineHeight: 1.05,
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              {t.pillars.title}
            </h2>
          </div>
        </DtoReveal>

        {/* Ecosystem */}
        <div className="mt-20 relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left feature */}
          <DtoReveal delay={120} className="lg:col-span-3 z-10">
            <div className="relative">
              <article
                className="p-7 rounded-2xl transition-all duration-500 hover:-translate-y-[3px]"
                style={{
                  background: "rgba(232,228,222,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid hsl(var(--dto-sage) / 0.2)",
                }}
              >
                <div
                  className="grid place-items-center w-10 h-10 rounded-full mb-5"
                  style={{ background: "hsl(var(--dto-sage) / 0.15)" }}
                >
                  {ICONS[0]}
                </div>
                <div className="font-editorial italic text-sage text-[14px] mb-1">
                  {t.pillars.items[0].n}
                </div>
                <h3
                  className="font-editorial text-dto-text mb-3"
                  style={{ fontSize: 24, lineHeight: 1.15, fontWeight: 400 }}
                >
                  {t.pillars.items[0].t}
                </h3>
                <p className="text-soft text-[14px] leading-[1.7]">
                  {t.pillars.items[0].d}
                </p>
              </article>
              <div
                className="hidden lg:block absolute -right-12 top-1/2 w-12 h-px"
                style={{
                  background:
                    "linear-gradient(to right, hsl(var(--dto-sage) / 0.4), transparent)",
                }}
              />
            </div>
          </DtoReveal>

          {/* Center: phone mockup */}
          <DtoReveal delay={0} className="lg:col-span-6 relative flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-3xl -z-10"
                style={{ background: "hsl(var(--dto-sage) / 0.08)" }}
              />
              {/* Phone frame */}
              <div
                className="relative w-[300px] aspect-[9/19.5] rounded-[2.75rem] p-3 shadow-2xl overflow-hidden"
                style={{
                  background: "hsl(var(--dto-bg))",
                  boxShadow:
                    "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="relative h-full w-full rounded-[2.25rem] overflow-hidden flex flex-col"
                  style={{ background: "#161B22" }}
                >
                  {/* Status */}
                  <div className="flex justify-between items-center px-6 pt-3 h-7">
                    <span className="text-[10px] tabular-nums opacity-50 text-dto-soft">
                      19:42
                    </span>
                    <div className="flex gap-1">
                      <div className="size-1.5 rounded-full bg-dto-soft/30" />
                      <div className="size-1.5 rounded-full bg-dto-soft/30" />
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="flex-1 p-2.5">
                    <div className="relative h-full rounded-2xl overflow-hidden">
                      <img
                        src={heroHelene}
                        alt="Profil"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 25%" }}
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(15,19,25,0.92) 0%, rgba(15,19,25,0) 55%)",
                        }}
                      />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[10px] text-sage uppercase tracking-[0.2em] mb-1.5">
                          Architecte, 61
                        </p>
                        <h4
                          className="font-editorial text-dto-text"
                          style={{ fontSize: 24, lineHeight: 1.1, fontWeight: 400 }}
                        >
                          Hélène
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Decision bar */}
                  <div className="h-24 px-5 flex items-center justify-between">
                    <div
                      className="size-11 rounded-full grid place-items-center text-[10px] italic text-dto-soft/60"
                      style={{ border: "1px solid rgba(232,228,222,0.08)" }}
                    >
                      Non
                    </div>
                    <div
                      className="size-14 rounded-full grid place-items-center"
                      style={{
                        border: "1px solid hsl(var(--dto-sage) / 0.5)",
                        background: "hsl(var(--dto-sage) / 0.08)",
                      }}
                    >
                      <span className="text-sage text-[10px] font-medium tracking-wide">
                        Peut-être
                      </span>
                    </div>
                    <div
                      className="size-11 rounded-full grid place-items-center text-[10px] italic text-sage"
                      style={{ border: "1px solid rgba(232,228,222,0.08)" }}
                    >
                      Oui
                    </div>
                  </div>
                </div>
                {/* Inner highlight */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[2.75rem] pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                />
              </div>
            </div>
          </DtoReveal>

          {/* Right features */}
          <div className="lg:col-span-3 space-y-10 z-10">
            {[1, 2].map((idx) => (
              <DtoReveal key={idx} delay={120 + idx * 120}>
                <div className="relative">
                  <div
                    className="hidden lg:block absolute -left-12 top-1/2 w-12 h-px"
                    style={{
                      background:
                        "linear-gradient(to left, hsl(var(--dto-sage) / 0.4), transparent)",
                    }}
                  />
                  <article
                    className="p-7 rounded-2xl transition-all duration-500 hover:-translate-y-[3px]"
                    style={{
                      background: "rgba(232,228,222,0.03)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid hsl(var(--dto-sage) / 0.2)",
                    }}
                  >
                    <div
                      className="grid place-items-center w-10 h-10 rounded-full mb-5"
                      style={{ background: "hsl(var(--dto-sage) / 0.15)" }}
                    >
                      {ICONS[idx]}
                    </div>
                    <div className="font-editorial italic text-sage text-[14px] mb-1">
                      {t.pillars.items[idx].n}
                    </div>
                    <h3
                      className="font-editorial text-dto-text mb-3"
                      style={{ fontSize: 24, lineHeight: 1.15, fontWeight: 400 }}
                    >
                      {t.pillars.items[idx].t}
                    </h3>
                    <p className="text-soft text-[14px] leading-[1.7]">
                      {t.pillars.items[idx].d}
                    </p>
                  </article>
                </div>
              </DtoReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
