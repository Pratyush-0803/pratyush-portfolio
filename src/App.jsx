import React, { useState, useEffect, useCallback, memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import CP from "./components/CP";
import Contact from "./components/Contact";

/* ---------------- BACKGROUND ---------------- */

export const StaticBackground = memo(({ theme }) => {
  const styles =
    theme === "light"
      ? {
          backgroundColor: "#faf7f5",
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(251,191,36,0.10), transparent 45%),
            radial-gradient(circle at 80% 30%, rgba(244,114,182,0.08), transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(59,130,246,0.05), transparent 55%)
          `,
        }
      : {
          backgroundColor: "#0a0a12",
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(168,85,247,0.18), transparent 45%),
            radial-gradient(circle at 80% 30%, rgba(236,72,153,0.12), transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(99,102,241,0.10), transparent 55%)
          `,
        };

  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none"
      style={styles}
    />
  );
});

/* ---------------- PAGE ANIMATION ---------------- */

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

/* ---------------- ROUTES ---------------- */

const AnimatedRoutes = memo(() => {
  const location = useLocation();

  const routesConfig = [
    { path: "/", Component: About },
    { path: "/about", Component: About },
    { path: "/skills", Component: Skills },
    { path: "/academics", Component: Academics },
    { path: "/projects", Component: Projects },
    { path: "/cp", Component: CP },
    { path: "/contact", Component: Contact },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routesConfig.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Component />
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
});

AnimatedRoutes.displayName = "AnimatedRoutes";

/* ---------------- APP ---------------- */

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <Router>
      {/* 🔥 IMPORTANT: background must be INSIDE Router but OUTSIDE Layout content */}
      <StaticBackground theme={theme} />

      <ScrollToTop />

      <Layout
        theme={theme}
        toggleTheme={toggleTheme}
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
      >
        <AnimatedRoutes />
      </Layout>

      <Analytics />
    </Router>
  );
}

export default App;