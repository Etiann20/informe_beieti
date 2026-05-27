import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Link } from "react-router-dom"

import { sections } from "../data/sections"

function MarkdownPage({ file, index }) {
  const [content, setContent] = useState("")
  const [visible, setVisible] = useState(false)

  const containerRef = useRef(null)

  const previous = sections[index - 1]
  const next = sections[index + 1]

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [file])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">

      <div
        ref={containerRef}
        className={`
          max-w-5xl mx-auto

          bg-[#f8f1e7]/85
          dark:bg-slate-900/80

          text-[#3b2f2f]
          dark:text-slate-100

          backdrop-blur-md

          border border-[#e8d9c8]
          dark:border-slate-800

          rounded-3xl

          shadow-[0_0_60px_rgba(0,0,0,0.08)]
          dark:shadow-[0_0_60px_rgba(34,211,238,0.08)]

          p-6 sm:p-8 md:p-12

          transition-all duration-700

          hover:shadow-[0_0_70px_rgba(0,0,0,0.12)]
          dark:hover:shadow-[0_0_70px_rgba(34,211,238,0.12)]

          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
      >

        <section className="text-center mb-14">

          <div
            className="
              w-20 h-1
              mx-auto mb-6
              rounded-full

              bg-gradient-to-r
              from-rose-300
              to-amber-200

              dark:from-cyan-400
              dark:to-blue-500
            "
          />

          <p className="text-sm tracking-[0.3em] uppercase text-[#8b6f6f] dark:text-slate-500">
            Caso Uber 2016
          </p>

        </section>

        <div className="space-y-6 leading-8">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>

        </div>

        <div className="flex justify-between gap-4 mt-16 flex-wrap">

          {previous ? (
            <Link
              to={previous.path}
              className="
                px-5 py-3 rounded-2xl

                bg-[#5c4b4b]
                text-[#f8f1e7]

                dark:bg-cyan-300
                dark:text-slate-950

                border border-[#5c4b4b]
                dark:border-cyan-200

                hover:scale-105
                hover:-translate-y-1

                hover:bg-[#4a3b3b]
                dark:hover:bg-cyan-200

                transition-all duration-300

                shadow-lg

                font-medium
              "
            >
              ← {previous.title}
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              to={next.path}
              className="
                px-5 py-3 rounded-2xl

                bg-[#5c4b4b]
                text-[#f8f1e7]

                dark:bg-cyan-300
                dark:text-slate-950

                border border-[#5c4b4b]
                dark:border-cyan-200

                hover:scale-105
                hover:-translate-y-1

                hover:bg-[#4a3b3b]
                dark:hover:bg-cyan-200

                transition-all duration-300

                shadow-lg

                font-medium
              "
            >
              {next.title} →
            </Link>
          )}

        </div>

        <footer
          className="
            mt-16 pt-6
            border-t border-[#dbc9b8] dark:border-slate-700
            text-center
          "
        >

          <p className="text-[#5c4b4b] dark:text-slate-400 text-sm">
            Proyecto académico BEIETI — Etiann Beiza
          </p>

          <p className="text-[#7a6767] dark:text-slate-500 text-xs mt-1">
            Análisis jurídico y técnico del caso Uber 2016
          </p>

          <p className="text-[#9b8686] dark:text-slate-600 text-xs mt-3 tracking-wide">
            INACAP — Ingeniería en Informática
          </p>

          <p className="text-[#b09a9a] dark:text-slate-700 text-[11px] mt-4">
            Última actualización: Mayo 2026
          </p>

        </footer>

      </div>

    </main>
  )
}

<ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown>
export default MarkdownPage