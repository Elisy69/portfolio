import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguage = create(
  persist(
    (set) => ({
      lang: "en",
      switchToRussian: () => set(() => ({ lang: "ru" })),
      switchToEnglish: () => set(() => ({ lang: "en" })),
    }),
    {
      name: "language",
    }
  )
);

export const useTheme = create(
  persist(
    (set, get) => ({
      isLight: true,
      toggleTheme: () => set(() => ({ isLight: !get().isLight })),
    }),
    {
      name: "theme",
    }
  )
);
