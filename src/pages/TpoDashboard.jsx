import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'
import Panel from '../components/Panel.jsx'
import StatBlock from '../components/StatBlock.jsx'
import { institutionSkillGap, institutionCohorts } from '../data/mockData.js'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const NAV = [
  { to: '/tpo', label: 'Overview', icon: 'overview' },
  { to: '/tpo', label: 'Skill Gap Report', icon: 'analytics' },
  { to: '/tpo', label: 'Institution', icon: 'institution' }
]

export default function TpoDashboard() {
  const totalStudents = institutionCohorts.reduce((s, c) => s + c.students, 0)
  const totalPlaced = institutionCohorts.reduce((s, c) => s + c.placed, 0)

  return (
    <div className="flex bg-paper min-h-screen">
      <Sidebar roleLabel="TPO view" items={NAV} />
      <div className="flex-1">
        <Topbar title="Govt. College of Engineering, Nagpur" subtitle="Placement & skill readiness" person="Dr. Meera Kulkarni" />
        <main className="p-8 space-y-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <StatBlock label="Students tracked" value={totalStudents} tone="ink" />
            <StatBlock label="Placed this year" value={totalPlaced} tone="teal" />
            <StatBlock label="Placement rate" value={Math.round((totalPlaced / totalStudents) * 100)} suffix="%" tone="gold" />
          </div>

          <Panel title="Skill gap vs. industry requirement" accent="brick">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={institutionSkillGap} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D8D6CC" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#1C1E24' }} />
                <YAxis type="category" dataKey="skill" width={130} tick={{ fontSize: 12, fill: '#1C1E24' }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6, border: '1px solid #D8D6CC' }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="required" name="Industry requirement" fill="#D8D6CC" radius={[0, 3, 3, 0]} />
                <Bar dataKey="current" name="Current cohort average" fill="#1F6F5C" radius={[0, 3, 3, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-ink/50 mt-2">
              Cloud/DevOps and System Design show the widest gap — a candidate for next semester's
              training calendar.
            </p>
          </Panel>

          <Panel title="Readiness by branch" accent="navy">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink/45 border-b border-line">
                  <th className="py-2 font-normal">Branch</th>
                  <th className="py-2 font-normal">Students</th>
                  <th className="py-2 font-normal">Avg. readiness</th>
                  <th className="py-2 font-normal">Placed</th>
                </tr>
              </thead>
              <tbody>
                {institutionCohorts.map((c) => (
                  <tr key={c.branch} className="border-b border-line/70 last:border-0">
                    <td className="py-3 font-medium text-ink">{c.branch}</td>
                    <td className="py-3 text-ink/60">{c.students}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-28 h-1.5 bg-line rounded-full overflow-hidden">
                          <div className="h-full bg-teal" style={{ width: `${c.readiness}%` }} />
                        </div>
                        <span className="text-ink/60 text-xs">{c.readiness}%</span>
                      </div>
                    </td>
                    <td className="py-3 text-ink/60">{c.placed}</td>
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
