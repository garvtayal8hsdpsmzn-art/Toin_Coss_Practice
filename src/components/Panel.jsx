export default function Panel({ title, accent = 'gold', children, className = '', action }) {
  const bar = {
    gold: 'bg-gold',
    teal: 'bg-teal',
    brick: 'bg-brick',
    navy: 'bg-navy'
  }[accent]

  return (
    <section className={`bg-white/70 border border-line rounded-md overflow-hidden ${className}`}>
      <div className={`h-[3px] ${bar}`} />
      <div className="p-5">
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg text-ink">{title}</h3>
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
