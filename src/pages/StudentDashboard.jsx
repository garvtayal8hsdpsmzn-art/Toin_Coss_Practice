import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'
import Panel from '../components/Panel.jsx'
import StatBlock from '../components/StatBlock.jsx'
import VerifiedBadge from '../components/VerifiedBadge.jsx'
import SkillRadarChart from '../components/SkillRadarChart.jsx'
import {
  studentProfile, skillRadar, skillList, internships, applicationTimeline
} from '../data/mockData.js'

const NAV = [
  { to: '/student', label: 'Overview', icon: 'overview' },
  { to: '/student', label: 'Skill Profile', icon: 'skills' },
  { to: '/student', label: 'Internships', icon: 'internships' },
  { to: '/student', label: 'Applications', icon: 'applications' }
]

export default function StudentDashboard() {
  return (
    <div className="flex bg-paper min-h-screen">
      <Sidebar roleLabel="Student view" items={NAV} />
      <div className="flex-1">
        <Topbar
          title={`Welcome back, ${studentProfile.name.split(' ')[0]}`}
          subtitle={`${studentProfile.program} · ${studentProfile.institution}`}
          person={studentProfile.name}
        />
        <main className="p-8 space-y-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <StatBlock label="Overall readiness" value={studentProfile.readiness} suffix="%" tone="teal" />
            <StatBlock label="Verified skills" value="4" tone="gold" />
            <StatBlock label="Open applications" value="3" tone="ink" />
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <Panel title="Skill graph" accent="teal" className="lg:col-span-3">
              <SkillRadarChart data={skillRadar} />
              <p className="text-xs text-ink/50 mt-2">
                Solid area is faculty/assessment-verified. Dashed line is what you've self-claimed —
                the gap between them is what recruiters see as unproven.
              </p>
            </Panel>

            <Panel title="Skill ledger" accent="gold" className="lg:col-span-2">
              <ul className="divide-y divide-line">
                {skillList.map((s) => (
                  <li key={s.name} className="py-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{s.name}</p>
                      <p className="text-xs text-ink/50 mt-0.5">{s.level} · {s.source}</p>
                    </div>
                    <VerifiedBadge verified={s.status === 'verified'} />
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <Panel title="Internships matched to you" accent="navy" className="lg:col-span-3">
              <div className="space-y-3">
                {internships.map((job) => (
                  <div key={job.id} className="flex items-center justify-between border border-line rounded-md px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{job.role}</p>
                      <p className="text-xs text-ink/50 mt-0.5">{job.company} · {job.location}</p>
                      <div className="flex gap-1.5 mt-2">
                        {job.skills.map((sk) => (
                          <span key={sk} className="text-[11px] text-ink/60 bg-paper border border-line rounded-full px-2 py-0.5">{sk}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0 pl-4">
                      <p className={`font-display text-2xl ${job.match >= 80 ? 'text-teal' : job.match >= 65 ? 'text-gold' : 'text-brick'}`}>
                        {job.match}%
                      </p>
                      <p className="text-[11px] text-ink/45">match</p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Application status" accent="brick" className="lg:col-span-2">
              <ul className="space-y-4">
                {applicationTimeline.map((a) => (
                  <li key={a.role} className="text-sm">
                    <p className="font-medium text-ink">{a.role}</p>
                    <p className="text-xs text-ink/50">{a.company}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs text-navy bg-navy/5 px-2 py-0.5 rounded-full">{a.stage}</span>
                      <span className="text-[11px] text-ink/40">{a.updated}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </main>
      </div>
    </div>
  )
}
