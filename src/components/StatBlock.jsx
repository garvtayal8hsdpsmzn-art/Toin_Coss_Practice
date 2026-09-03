export default function StatBlock({ label, value, suffix = '', tone = 'ink' }) {
  const color = {
    ink: 'text-ink',
    teal: 'text-teal',
    gold: 'text-gold',
    brick: 'text-brick'
  }[tone]

  return (
    <div className="border-l-2 border-line pl-4">
      <p className={`font-display text-3xl ${color}`}>{value}{suffix}</p>
      <p className="text-sm text-ink/55 mt-1">{label}</p>
    </div>
  )
}
