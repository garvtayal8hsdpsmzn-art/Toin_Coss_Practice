import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'
import Panel from '../components/Panel.jsx'
import StatBlock from '../components/StatBlock.jsx'
import { nationalTrends, stateSummary } from '../data/mockData.js'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const NAV = [
  { to: '/admin', label: 'Overview', icon: 'overview' },
  { to: '/admin', label: 'National Trends', icon: 'national' },
  { to: '/admin', label: 'States', icon: 'analytics' }
]

export default function AdminDashboard() {
  const totalInstitutions = stateSummary.reduce((s, r) => s + r.institutions, 0)
  const totalStudents = stateSummary.reduce((s, r) => s + r.students, 0)
  const avgReadiness = Math.round(stateSummary.reduce((s, r) => s + r.avgReadiness, 0) / stateSummary.length)

  return (
    <div className="flex bg-paper min-h-screen">
      <Sidebar roleLabel="Admin / Govt view" items={NAV} />
      <div className="flex-1">
        <Topbar title="National Skill Overview" subtitle="Aggregated across onboarded institutions" person="Skill Mission Admin" />
        <main className="p-8 space-y-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <StatBlock label="Institutions onboarded" value={totalInstitutions} tone="ink" />
            <StatBlock label="Students tracked" value={totalStudents.toLocaleString('en-IN')} tone="gold" />
            <StatBlock label="Avg. national readiness" value={avgReadiness} suffix="%" tone="teal" />
          </div>

          <Panel title="Industry skill demand — last 6 months" accent="gold">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={nationalTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D8D6CC" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#1C1E24' }} />
                <YAxis tick={{ fontSize: 11, fill: '#1C1E24' }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6, border: '1px solid #D8D6CC' }} />
                <Line type="monotone" dataKey="demand" stroke="#C99A3A" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-ink/50 mt-2">
              Demand index aggregated from postings tagged with skill + proficiency requirements.
            </p>
          </Panel>

          <Panel title="State-wise summary" accent="navy">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink/45 border-b border-line">
                  <th className="py-2 font-normal">State</th>
                  <th className="py-2 font-normal">Institutions</th>
                  <th className="py-2 font-normal">Students</th>
                  <th className="py-2 font-normal">Avg. readiness</th>
                </tr>
              </thead>
              <tbody>
                {stateSummary.map((s) => (
                  <tr key={s.state} className="border-b border-line/70 last:border-0">
                    <td className="py-3 font-medium text-ink">{s.state}</td>
                    <td className="py-3 text-ink/60">{s.institutions}</td>
                    <td className="py-3 text-ink/60">{s.students.toLocaleString('en-IN')}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-28 h-1.5 bg-line rounded-full overflow-hidden">
                          <div className="h-full bg-gold" style={{ width: `${s.avgReadiness}%` }} />
                        </div>
                        <span className="text-ink/60 text-xs">{s.avgReadiness}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        </main>
      </div>
    </div>
  )
}
