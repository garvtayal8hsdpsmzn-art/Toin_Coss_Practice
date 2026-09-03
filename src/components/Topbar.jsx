import { Search, Bell } from 'lucide-react'

export default function Topbar({ title, subtitle, person }) {
  return (
    <header className="flex items-center justify-between border-b border-line bg-paper/95 backdrop-blur px-8 py-5 sticky top-0 z-10">
      <div>
        <h1 className="font-display text-2xl text-ink leading-tight">{title}</h1>
        {subtitle && <p className="text-sm text-ink/55 mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center gap-2 border border-line rounded-md px-3 py-1.5 bg-white/60 text-sm text-ink/50 w-64">
          <Search size={15} />
          <span>Search the portal…</span>
        </div>
        <button className="text-ink/50 hover:text-ink transition-colors" aria-label="Notifications">
          <Bell size={19} strokeWidth={1.75} />
        </button>
        {person && (
          <div className="flex items-center gap-2.5 pl-4 border-l border-line">
            <div className="w-8 h-8 rounded-full bg-navy text-gold flex items-center justify-center text-xs font-medium">
              {person.split(' ').map(w => w[0]).slice(0, 2).join('')}
            </div>
            <span className="text-sm text-ink/80 hidden sm:inline">{person}</span>
          </div>
        )}
      </div>
    </header>
  )
}
