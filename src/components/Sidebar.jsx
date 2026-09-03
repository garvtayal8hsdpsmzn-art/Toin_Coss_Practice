import { NavLink } from 'react-router-dom'
import {
  LayoutGrid, Radar, Briefcase, ListChecks, Users,
  BarChart3, Building2, Globe2, ArrowLeftCircle
} from 'lucide-react'

const ICONS = {
  overview: LayoutGrid,
  skills: Radar,
  internships: Briefcase,
  applications: ListChecks,
  candidates: Users,
  analytics: BarChart3,
  institution: Building2,
  national: Globe2
}

export default function Sidebar({ role, roleLabel, items }) {
  return (
    <aside className="w-64 shrink-0 bg-navy text-white/90 flex flex-col justify-between min-h-screen">
      <div>
        <div className="px-6 py-6 border-b border-lineDark">
          <p className="font-display text-xl tracking-tight text-white">SkillBridge</p>
          <p className="text-xs text-white/50 mt-1">{roleLabel}</p>
        </div>
        <nav className="px-3 py-4 space-y-1">
          {items.map((item) => {
            const Icon = ICONS[item.icon] || LayoutGrid
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-lineDark text-gold'
                      : 'text-white/70 hover:bg-lineDark/60 hover:text-white'
                  }`
                }
              >
                <Icon size={17} strokeWidth={1.75} />
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </div>
      <div className="px-3 pb-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-white/50 hover:text-white hover:bg-lineDark/60 transition-colors"
        >
          <ArrowLeftCircle size={17} strokeWidth={1.75} />
          Exit demo
        </NavLink>
      </div>
    </aside>
  )
}
