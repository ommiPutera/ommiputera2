import create from "zustand";
import { DEFAULT_MODE } from "../defaultVariable";

const useThemeStore = create<{
  themeMode: string;
  setThemeMode: (mode: string) => void;
}>((set) => ({
  themeMode: DEFAULT_MODE,
  setThemeMode: (mode) => set((state) => ({ themeMode: mode })),
}));

export { useThemeStore };
