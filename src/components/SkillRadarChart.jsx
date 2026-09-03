import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Legend, Tooltip
} from 'recharts'

export default function SkillRadarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} outerRadius="75%">
        <PolarGrid stroke="#D8D6CC" />
        <PolarAngleAxis dataKey="skill" tick={{ fill: '#1C1E24', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9A988D', fontSize: 10 }} />
        <Radar name="Self-claimed" dataKey="claimed" stroke="#A8461F" fill="#A8461F" fillOpacity={0.08} strokeDasharray="4 3" />
        <Radar name="Verified" dataKey="verified" stroke="#1F6F5C" fill="#1F6F5C" fillOpacity={0.25} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6, border: '1px solid #D8D6CC' }} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
