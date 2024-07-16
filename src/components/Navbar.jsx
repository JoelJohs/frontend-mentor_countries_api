import { useThemeToggler } from "../store";

import { LightMode, DarkMode } from "./ThemeIcons";

const Navbar = () => {
  const { toggleTheme, isDark } = useThemeToggler();

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <>
      <h1 className=" text-xl md:text-2xl font-extrabold">
        Where in the world?
      </h1>
      <button
        onClick={handleTheme}
        className="flex align-middle justify-center gap-2 text-base xl:text-lg"
      >
        <span>{isDark ? <LightMode /> : <DarkMode />}</span>
        <span className="theme-text">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </>
  );
};

export default Navbar;
