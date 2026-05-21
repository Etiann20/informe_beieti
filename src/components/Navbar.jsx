import { NavLink } from "react-router-dom"
import { sections } from "../data/sections"

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow">
      <div className="flex flex-wrap gap-4">
        {sections.map((section) => (
          <NavLink
            key={section.path}
            to={section.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-red-500 text-white"
                  : "bg-slate-800 hover:bg-slate-700"
              }`
            }
          >
            {section.title}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar