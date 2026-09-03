import { ShieldCheck, CircleDashed } from 'lucide-react'

export default function VerifiedBadge({ verified }) {
  return verified ? (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal bg-teal/10 px-2 py-0.5 rounded-full">
      <ShieldCheck size={12} /> Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brick bg-brick/10 px-2 py-0.5 rounded-full">
      <CircleDashed size={12} /> Self-declared
    </span>
  )
}
