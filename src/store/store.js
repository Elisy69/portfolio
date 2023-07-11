import { create } from "zustand";

export const useLanguage = create((set) => ({
  lang: "en",
  switchToRussian: () => set(() => ({ lang: "ru" })),
  switchToEnglish: () => set(() => ({ lang: "en" })),
}));
