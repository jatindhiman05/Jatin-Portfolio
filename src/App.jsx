import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import { FiMoon, FiSun } from "react-icons/fi";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // Reduced loading time
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Apply class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className={`flex flex-col justify-center items-center min-h-screen gap-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <HashLoader
          color={darkMode ? "#3b82f6" : "#2563eb"}
          size={80}
          speedMultiplier={1.5}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:scale-110"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <FiSun className="text-yellow-400 text-xl" />
        ) : (
          <FiMoon className="text-gray-700 text-xl" />
        )}
      </button>

      <div className="relative overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none">
          <Lottie
            animationData={nightsky}
            loop={true}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main content */}
        <Nav darkMode={darkMode} />
        <MoveToTop />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/About" element={<About darkMode={darkMode} />} />
            <Route path="/Project" element={<Project darkMode={darkMode} />} />
            <Route path="/Resume" element={<Resume darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;