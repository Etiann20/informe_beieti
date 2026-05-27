import { useEffect, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import { FaMoon, FaSun } from "react-icons/fa"

import Navbar from "./components/Navbar"
import MarkdownPage from "./components/MarkdownPage"

import { sections } from "./data/sections"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return null
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className="
        min-h-screen
        transition-colors duration-700

        bg-[length:400%_400%]
        animate-[backgroundMove_18s_ease_infinite]

        bg-gradient-to-br
        from-rose-100
        via-pink-50
        to-amber-50

        dark:from-slate-950
        dark:via-slate-900
        dark:to-cyan-950
      "
    >

      <Navbar />

      <div className="animate-fadeIn">
        <Routes>
          {sections.map((section, index) => (
            <Route
              key={section.path}
              path={section.path}
              element={
                <MarkdownPage
                  file={section.file}
                  index={index}
                />
              }
            />
          ))}
        </Routes>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          text-xl
          transition-all duration-500
          hover:scale-110 hover:rotate-12
          shadow-2xl

          ${
            darkMode
              ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/40"
              : "bg-[#f8f1e7] hover:bg-[#f3e7d7] text-[#5a4747] border border-[#e4d2bf] shadow-[#d8c3ae]/40"
          }
        `}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <AppContent />

    </BrowserRouter>
  )
}

export default App