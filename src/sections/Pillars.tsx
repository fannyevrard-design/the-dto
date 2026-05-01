import { useLang } from "@/i18n/LangContext";
import { DtoReveal } from "@/components/DtoReveal";
import heroHelene from "@/assets/hero-helene.png";
import dtoSigle from "@/assets/dto-sigle-blanc.svg";

export const Pillars = () => {
  const { t } = useLang();

  const ICONS = [
    <img key="i1" src={dtoSigle} alt="" className="h-4 w-auto" />,
    <img key="i2" src={dtoSigle} alt="" className="h-4 w-auto" />,
    <img key="i3" src={dtoSigle} alt="" className="h-4 w-auto" />,
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
          <DtoReveal delay={120} className="lg:col-span-3 z-10 order-2 lg:order-none">
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
          <DtoReveal delay={0} className="lg:col-span-6 relative flex justify-center order-1 lg:order-none">
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
                  className="relative h-full w-full rounded-[2.25rem] overflow-hidden flex items-center justify-center"
                  style={{ background: "hsl(var(--dto-sage))" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 432 218.54"
                    className="w-[68%] h-auto dto-pillars-logo"
                    aria-label="DatsTheOne"
                  >
                    <g>
                      <path d="M19.72,217.75l-19.72.02v-61.7l19.21.02c16.08,0,29.69,14.05,29.69,30.89s-13.16,30.77-29.17,30.76ZM43.34,187.05c0-16.48-11.15-30.04-24.38-30.04H5.27v59.85h14.25c13.36,0,23.82-13.33,23.82-29.8Z" />
                      <path d="M91.43,214.55c-.97,1.24-2.83,3.02-5.62,3.02-4.43,0-4.43-4.59-4.43-4.59v-4.59c-2.26,4.89-7.03,9.53-15.98,9.53-7.86,0-13.15-4.44-13.15-11.04,0-3.91,1.43-7.3,4.25-10.06,6.48-6.35,18.78-7.76,24.88-8.09v-3.99c0-6.95-3.6-11.68-10.7-11.68-3.77,0-7.03,2.05-8.83,5.07-.27-.3-.56-.59-.86-.87,2.16-2.91,5.82-5.13,10.08-5.13,7.15,0,15.57,1.59,15.57,13.44v27.94c0,2.07.99,2.36,1.89,2.36.96,0,1.97-1.12,2.57-1.92.1.2.22.39.32.59ZM81.39,189.65c-11.58.73-23.4,5.18-23.4,16.1,0,6.64,3.42,10.99,9.34,10.99,8.11,0,12.41-6.34,14.06-11.42v-15.66Z" />
                      <path d="M104.71,173.78v39.74c0,2.07.99,2.36,1.89,2.36.96,0,1.97-1.12,2.57-1.92.1.2.21.39.32.59-.97,1.24-2.83,3.02-5.62,3.02-4.43,0-4.43-4.59-4.43-4.59v-39.2h-6.02v-.92h6.02v-16.99h5.27v16.99h9.2v.92h-9.2Z" />
                      <path d="M148.23,207.47c-1.39,6.13-6.83,10.1-14.85,10.1-11.42,0-16.85-6.33-16.85-9.77,0-.57.45-1.51,1.5-1.51.75,0,1.75.43,1.89,1.9.36,3.66,4.97,8.46,13.46,8.46,7.51,0,12.77-4.15,12.77-8.94,0-5.76-6.75-7.78-11.17-9.01-2.45-.68-7.77-2.08-9.61-2.76-6.77-2.5-9.77-7.69-8.44-13.56,1.39-6.13,6.83-10.1,14.85-10.1,10.48,0,15.53,6.55,15.14,9.77-.07.57-.45,1.51-1.5,1.51-.76,0-1.64-.45-1.9-1.9-.57-3.18-3.25-8.46-11.74-8.46-7.51,0-12.77,4.15-12.77,8.94,0,5.77,5.73,8.18,10.14,9.44,2.98.85,6.33,1.8,9.61,2.76,6.92,2.03,10.8,7.27,9.48,13.13Z" />
                      <path d="M190.02,157h-20.23v60.74h-5.27v-60.74h-20.23v-.92h45.73v.92Z" />
                      <path d="M231.15,214.55c-.97,1.24-2.83,3.02-5.62,3.02-4.43,0-4.43-4.59-4.43-4.59v-28.24c0-6.95-3.59-11.68-10.69-11.68-5.5,0-11.37,4.55-11.75,9.99v34.51h-5.27v-61.7h5.27v23.18c2.37-4.35,7.45-6.91,12.15-6.91,7.15,0,15.57,1.59,15.57,13.44v27.94c0,2.07.99,2.36,1.89,2.36.96,0,1.97-1.12,2.57-1.92.1.2.21.39.32.59Z" />
                      <path d="M275.24,203.55l1.16.23s-4.85,14.68-20.16,14.68c-11.98,0-21.69-10.37-21.69-23.16s9.71-23.16,21.69-23.16c10.05,0,21.69,8.17,21.69,23.16h-38.42v.05c0,12.46,7.49,22.22,16.74,22.22,14.63,0,19-14.02,19-14.02ZM239.54,194.37h33.37c-.4-13.01-8.51-21.42-16.67-21.42-9,0-16.32,9.42-16.7,21.42Z" />
                      <path d="M343.05,186.86c0,17.49-13.28,31.68-29.66,31.68s-29.66-14.18-29.66-31.68,13.28-31.67,29.66-31.67,29.66,14.18,29.66,31.67ZM337.5,186.93c0-17.03-10.79-30.85-24.1-30.85s-24.1,13.81-24.1,30.85,10.79,30.85,24.1,30.85,24.1-13.81,24.1-30.85Z" />
                      <path d="M387.08,214.55c-.97,1.24-2.83,3.02-5.62,3.02-4.43,0-4.43-4.59-4.43-4.59v-28.24c0-6.95-3.59-11.68-10.69-11.68-5.5,0-11.37,4.55-11.75,9.99v34.51h-5.27v-44.71h5.27v6.2c2.37-4.35,7.45-6.91,12.15-6.91,7.15,0,15.57,1.59,15.57,13.44v27.94c0,2.07.99,2.36,1.89,2.36.96,0,1.97-1.12,2.57-1.92.1.2.22.39.32.59Z" />
                      <path d="M429.31,203.55l1.17.23s-4.85,14.68-20.17,14.68c-11.98,0-21.69-10.37-21.69-23.16s9.71-23.16,21.69-23.16c10.05,0,21.69,8.17,21.69,23.16h-38.42v.05c0,12.46,7.49,22.22,16.74,22.22,14.63,0,19-14.02,19-14.02ZM393.61,194.37h33.37c-.4-13.01-8.51-21.42-16.67-21.42-9,0-16.32,9.42-16.7,21.42Z" />
                      <path d="M227.03,125.17c-11.68.77-23.21-.51-34.1-5.02-15.12-6.66-26.58-20.23-31.24-36.09l-9.53.24s-.07-4.57-.07-4.57c-1.52-39.05,17.92-73.94,59.33-79.04,6.36-.95,13.16-.83,19.81-.19,0,0-.14,4.03-.14,4.03l-1.3,37.36c-.22,10.78-1.29,26.43-1.83,37.37,0,0-.06,1.17-.06,1.17l-1.03-.04c-3.72-.15-7.44-.41-11.15-.61-.36-.01-.34-.56,0-.56l10.82-.25-.25-73.99c-19.18-.88-39.21,5.66-52.04,20.42-6.44,7.25-10.89,16.13-13.48,25.48-2.67,9.35-3.7,18.66-3.72,28.4l7.97.02c.51-.01.33-.03.44.38,3.43,18.88,17.75,34.98,35.94,40.94,4.82,1.59,10.21,2.69,15.23,3.38,3.46.31,6.94.4,10.41.61.35-.02.36.57,0,.57h0Z" />
                      <path d="M226.66,17.83c39.92-5.53,62.87,32.75,49.52,68.19-7.7,19.08-29.55,31.2-49.24,28.84-.33-.03-.32-.56.02-.56,12.58-.47,24.91-5.94,33.94-14.63,18.14-17.4,17.92-50.6.24-68.22-9.09-8.78-21.94-12.94-34.49-13.05-.35.02-.37-.58,0-.57h0Z" />
                      <path d="M226.13,18.38c-26.77,2.17-50.45,27.36-41.72,54.28,8.56,27.16,40.36,35.72,65.06,22.89.28-.23.64.28.32.47-11.77,8.12-27.11,11.09-41.01,7.24-20.99-5.61-35.96-28.78-30.63-50.19,4.63-21.63,26.4-36.26,47.99-35.25.36.03.35.55-.01.56h0Z" />
                      <path d="M194.86,59.22c4.42-6.5,12.83-6.29,17.12.22.1.13,0,.33-.16.34-5.65.35-11.31.35-16.96,0-.34-.06-.15-.4,0-.57h0Z" />
                      <path d="M258.12,56.05c-4.42,6.5-12.83,6.29-17.12-.22-.1-.13,0-.33.16-.34,5.65-.35,11.31-.35,16.96,0,.34.06.15.4,0,.57h0Z" />
                    </g>
                  </svg>
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
          <div className="lg:col-span-3 space-y-10 z-10 order-3 lg:order-none">
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
