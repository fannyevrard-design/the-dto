import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LangContext";
import { supabase } from "@/integrations/supabase/client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const DtoWaitlistModal = () => {
  const { isWaitlistOpen, closeWaitlist, t, lang } = useLang();
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isWaitlistOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWaitlist();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstInputRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isWaitlistOpen, closeWaitlist]);

  useEffect(() => {
    if (!isWaitlistOpen) {
      const id = setTimeout(() => {
        setFirst("");
        setEmail("");
        setError(null);
        setSuccess(false);
        setSubmitting(false);
      }, 250);
      return () => clearTimeout(id);
    }
  }, [isWaitlistOpen]);

  if (!isWaitlistOpen) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(t.modal.invalidEmail);
      return;
    }
    setError(null);
    setSubmitting(true);
    const { error: insertError } = await supabase
      .from("waitlist_signups")
      .insert({
        first_name: first.trim() || null,
        email: email.trim().toLowerCase(),
        source: "modal",
        lang,
      });
    setSubmitting(false);
    if (insertError) {
      if (insertError.code === "23505") {
        // already registered – treat as success
        setSuccess(true);
        return;
      }
      setError(t.modal.invalidEmail);
      return;
    }
    setSuccess(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dto-waitlist-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-5"
      style={{ background: "rgba(8,10,14,0.78)", backdropFilter: "blur(8px)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeWaitlist();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-[460px] dto-rise"
        style={{
          background: "hsl(var(--dto-bg))",
          border: "1px solid rgba(170,176,159,0.35)",
          borderRadius: "18px",
          padding: "44px 40px 36px",
        }}
      >
        <button
          type="button"
          onClick={closeWaitlist}
          aria-label={t.modal.close}
          className="absolute right-4 top-4 h-9 w-9 grid place-items-center rounded-full text-dto-soft/70 hover:text-dto-soft transition-colors"
        >
          <span aria-hidden className="text-[18px] leading-none">✕</span>
        </button>

        {!success ? (
          <>
            <div className="kicker mb-4" style={{ letterSpacing: "0.22em" }}>DATSTHEONE</div>
            <h3 id="dto-waitlist-title" className="font-editorial text-[34px] leading-[1.1] text-dto-text mb-3">
              {t.modal.title}
            </h3>
            <p className="text-soft text-[14px] leading-[1.6] mb-6">{t.modal.text}</p>

            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <input
                ref={firstInputRef}
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                placeholder={t.modal.first}
                maxLength={80}
                className="w-full rounded-[10px] px-4 py-3 text-[14px] text-dto-soft placeholder:text-dto-soft/45 outline-none focus:border-dto-sage transition-colors"
                style={{ background: "rgba(232,228,222,0.04)", border: "1px solid rgba(232,228,222,0.12)" }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.modal.email}
                maxLength={160}
                required
                className="w-full rounded-[10px] px-4 py-3 text-[14px] text-dto-soft placeholder:text-dto-soft/45 outline-none focus:border-dto-sage transition-colors"
                style={{ background: "rgba(232,228,222,0.04)", border: "1px solid rgba(232,228,222,0.12)" }}
              />
              {error && <div className="text-[12px] text-dto-sage">{error}</div>}
              <button
                type="submit"
                className="mt-1 rounded-[10px] py-3 px-5 text-[14px] font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-[1px]"
                style={{ background: "hsl(var(--dto-text-soft))", color: "hsl(var(--dto-bg))" }}
              >
                {t.modal.button}
              </button>
              <p className="text-muted-soft text-[11px] mt-2">{t.modal.small}</p>
            </form>
          </>
        ) : (
          <div className="text-center py-4 dto-fade">
            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full" style={{ border: "1.5px solid hsl(var(--dto-sage))" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--dto-sage))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <h3 className="font-editorial text-[34px] text-dto-text mb-2">{t.modal.confirmTitle}</h3>
            <p className="text-soft text-[14px] leading-[1.6] max-w-[340px] mx-auto">{t.modal.confirm}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DtoWaitlistModal;
