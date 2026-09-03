import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'
import Panel from '../components/Panel.jsx'
import StatBlock from '../components/StatBlock.jsx'
import VerifiedBadge from '../components/VerifiedBadge.jsx'
import { postedRoles, candidates } from '../data/mockData.js'
import { Plus } from 'lucide-react'

const NAV = [
  { to: '/recruiter', label: 'Overview', icon: 'overview' },
  { to: '/recruiter', label: 'Posted Roles', icon: 'internships' },
  { to: '/recruiter', label: 'Candidates', icon: 'candidates' }
]

export default function RecruiterDashboard() {
  const totalApplicants = postedRoles.reduce((s, r) => s + r.applicants, 0)
  const totalVerified = postedRoles.reduce((s, r) => s + r.verified, 0)

  return (
    <div className="flex bg-paper min-h-screen">
      <Sidebar roleLabel="Recruiter view" items={NAV} />
      <div className="flex-1">
        <Topbar title="Nimbus Systems" subtitle="Talent pipeline" person="Priya Sharma, HR" />
        <main className="p-8 space-y-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <StatBlock label="Open roles" value={postedRoles.filter(r => r.status === 'Open').length} tone="ink" />
            <StatBlock label="Total applicants" value={totalApplicants} tone="gold" />
            <StatBlock label="Verified-skill applicants" value={Math.round((totalVerified / totalApplicants) * 100)} suffix="%" tone="teal" />
          </div>

          <Panel
            title="Posted roles"
            accent="navy"
            action={
              <button className="inline-flex items-center gap-1.5 text-sm text-navy border border-line rounded-md px-3 py-1.5 hover:border-navy transition-colors">
                <Plus size={14} /> Post a role
              </button>
            }
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink/45 border-b border-line">
                  <th className="py-2 font-normal">Role</th>
                  <th className="py-2 font-normal">Minimum skill required</th>
                  <th className="py-2 font-normal">Applicants</th>
                  <th className="py-2 font-normal">Verified</th>
                  <th className="py-2 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {postedRoles.map((r) => (
                  <tr key={r.id} className="border-b border-line/70 last:border-0">
                    <td className="py-3 font-medium text-ink">{r.title}</td>
                    <td className="py-3 text-ink/60">{r.minSkill}</td>
                    <td className="py-3 text-ink/60">{r.applicants}</td>
                    <td className="py-3 text-teal">{r.verified}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${r.status === 'Open' ? 'bg-teal/10 text-teal' : 'bg-ink/5 text-ink/50'}`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          <Panel title="Top matched candidates — Frontend Engineering Intern" accent="gold">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {candidates.map((c) => (
                <div key={c.name} className="border border-line rounded-md p-4">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-ink">{c.name}</p>
                    <span className="font-display text-lg text-teal">{c.match}%</span>
                  </div>
                  <p className="text-xs text-ink/50 mt-0.5">{c.institution}</p>
                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {c.topSkills.map((s) => (
                      <span key={s} className="text-[11px] text-ink/60 bg-paper border border-line rounded-full px-2 py-0.5">{s}</span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <VerifiedBadge verified={c.verified} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </main>
      </div>
    </div>
  )
}
