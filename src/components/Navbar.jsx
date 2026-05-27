import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import { sections } from "../data/sections"

import {
  FaHome,
  FaBalanceScale,
  FaUserSecret,
  FaGavel,
  FaBook,
  FaDatabase,
  FaFileAlt,
  FaRobot,
} from "react-icons/fa"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const icons = [
    <FaHome />,
    <FaBalanceScale />,
    <FaUserSecret />,
    <FaGavel />,
    <FaBook />,
    <FaDatabase />,
    <FaFileAlt />,
    <FaRobot />,
  ]

  return (
    <header
      className={`
        sticky top-0 z-50
        backdrop-blur-xl
        border-b

        transition-all
        duration-[1800ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          scrolled
            ? "bg-white/5 dark:bg-slate-950/5 border-transparent"
            : "bg-[#f7efe5]/70 dark:bg-slate-950/70 border-[#e4d6c7] dark:border-slate-800"
        }

        hover:bg-[#f7efe5]/95
        dark:hover:bg-slate-950/95
      `}
    >

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">

          {sections.map((section, index) => (

            <NavLink
              key={section.path}
              to={section.path}

              className={({ isActive }) =>
                `
                relative

                flex items-center

                ${
                  scrolled
                    ? "justify-center px-2.5 sm:px-3 w-11 sm:w-12"
                    : "justify-start px-5 w-auto"
                }

                py-2.5

                rounded-[1.1rem]
                text-xs sm:text-sm font-medium
                border

                transition-all
                duration-[1800ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]

                transform hover:-translate-y-[2px] hover:scale-[1.03]

                ${
                  isActive
                    ? "bg-rose-300 text-[#3b2f2f] border-rose-200 shadow-[0_0_30px_rgba(251,113,133,0.25)] dark:bg-cyan-500 dark:text-slate-950 dark:border-cyan-400 dark:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                    : "bg-[#fffaf5]/40 dark:bg-slate-900/30 text-[#5a4747] dark:text-slate-200 border-[#e5d6c6] dark:border-slate-700 hover:bg-[#fffaf5] dark:hover:bg-slate-800 hover:border-rose-300 dark:hover:border-cyan-400 hover:text-rose-500 dark:hover:text-cyan-500"
                }
              `
              }
            >

              <span
                className={`
                  flex items-center justify-center

                  text-sm sm:text-base

                  transition-all
                  duration-[1800ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  ${
                    scrolled
                      ? "mr-0 scale-110"
                      : "mr-2 scale-100"
                  }
                `}
              >
                {icons[index]}
              </span>

              <span
                className={`
                  overflow-hidden whitespace-nowrap

                  transition-all
                  duration-[1800ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  origin-left

                  ${
                    scrolled
                      ? `
                        max-w-[40px]
                        opacity-0
                        blur-md
                        scale-95
                        translate-x-2
                      `
                      : `
                        max-w-[220px]
                        opacity-100
                        blur-0
                        scale-100
                        translate-x-0
                      `
                  }
                `}
              >
                {section.title}
              </span>

            </NavLink>

          ))}

        </div>

      </nav>

    </header>
  )
}

export default Navbar