import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COPY, type CopyShape, type Lang } from "@/i18n/copy";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: CopyShape;
  openWaitlist: () => void;
  isWaitlistOpen: boolean;
  closeWaitlist: () => void;
};

const Ctx = createContext<LangCtx | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("fr");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const openWaitlist = useCallback(() => setIsWaitlistOpen(true), []);
  const closeWaitlist = useCallback(() => setIsWaitlistOpen(false), []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({ lang, setLang, t: COPY[lang], openWaitlist, isWaitlistOpen, closeWaitlist }),
    [lang, setLang, openWaitlist, isWaitlistOpen, closeWaitlist]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useLang = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang must be used within LangProvider");
  return v;
};
