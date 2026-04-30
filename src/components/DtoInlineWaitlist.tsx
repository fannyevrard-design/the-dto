import { useState } from "react";
import { useLang } from "@/i18n/LangContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const DtoInlineWaitlist = () => {
  const { t } = useLang();
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(t.waitlist.invalidEmail);
      return;
    }
    setError(null);
    // Simulated. TODO: connect to Mailchimp / ConvertKit later.
    setDone(true);
  };

  if (done) {
    return (
      <div className="mt-10 text-center font-editorial italic text-[22px]" style={{ color: "hsl(var(--dto-bg))" }}>
        {t.waitlist.thanks}
      </div>
    );
  }

  const inputStyle = {
    background: "rgba(15,19,25,0.06)",
    border: "1px solid rgba(15,19,25,0.25)",
    color: "hsl(var(--dto-bg))",
  } as const;

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 mx-auto flex flex-col md:flex-row gap-3 max-w-[720px] w-full"
    >
      <input
        type="text"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        placeholder={t.waitlist.first}
        maxLength={80}
        className="flex-1 rounded-[10px] px-[18px] py-[14px] text-[15px] outline-none placeholder:text-dto-bg/45 focus:border-dto-bg transition-colors"
        style={inputStyle}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.waitlist.email}
        maxLength={160}
        required
        className="flex-1 rounded-[10px] px-[18px] py-[14px] text-[15px] outline-none placeholder:text-dto-bg/45 focus:border-dto-bg transition-colors"
        style={inputStyle}
      />
      <button
        type="submit"
        className="rounded-[10px] px-7 py-[14px] text-[14px] font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-[1px] whitespace-nowrap"
        style={{ background: "hsl(var(--dto-bg))", color: "hsl(var(--dto-text))" }}
      >
        {t.waitlist.button}
      </button>
      {error && <div className="md:absolute md:-bottom-6 text-[12px]" style={{ color: "hsl(var(--dto-bg))" }}>{error}</div>}
    </form>
  );
};

export default DtoInlineWaitlist;
