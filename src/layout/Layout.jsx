import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useThemeToggler } from "../store";

const Layout = () => {
  const { isDark } = useThemeToggler();

  return (
    <main className={`flex flex-col min-h-screen ${isDark ? "dark" : ""}`}>
      <nav className="flex justify-between align-middle p-5 md:px-20 py-5 bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text shadow-light-navbar dark:shadow-dark-navbar">
        <Navbar />
      </nav>

      <section className="flex-1 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text md:p-10">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
