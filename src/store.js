import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : false;
  }
  return false;
};

export const useThemeToggler = create((set) => ({
  isDark: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDark;
      localStorage.setItem("isDark", JSON.stringify(newTheme));
      return { isDark: newTheme };
    }),
}));

export const useFilterStore = create((set) => ({
  searchTerm: "",
  selectedRegion: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));
