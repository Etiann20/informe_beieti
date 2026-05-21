import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import MarkdownPage from "./components/MarkdownPage"

import { sections } from "./data/sections"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        <Navbar />

        <main className="max-w-5xl mx-auto py-10 px-6">
          <Routes>
            {sections.map((section) => (
              <Route
                key={section.path}
                path={section.path}
                element={<MarkdownPage file={section.file} />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App