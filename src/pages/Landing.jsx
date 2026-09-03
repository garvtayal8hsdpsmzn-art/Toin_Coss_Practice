import { Link } from 'react-router-dom'
import { ShieldCheck, GraduationCap, Briefcase, Building2, Landmark, ArrowRight } from 'lucide-react'

const LOOP = [
  { title: 'Industry states demand', body: 'Recruiters post roles against a skill and proficiency level — not a job title.' },
  { title: 'Gap becomes visible', body: 'Institutions see exactly where their cohort sits against that demand, by branch and skill.' },
  { title: 'Students close it', body: 'Targeted assessments and faculty endorsement turn a claim into a verified skill.' },
  { title: 'Outcome feeds back', body: 'Recruiter feedback after the internship updates the verified profile — the loop closes.' }
]

const PERSONAS = [
  { to: '/student', icon: GraduationCap, label: 'Student', copy: 'See your verified skill graph and match-ranked internships.' },
  { to: '/recruiter', icon: Briefcase, label: 'Recruiter', copy: 'Post roles by skill and screen verified candidates directly.' },
  { to: '/tpo', icon: Building2, label: 'TPO', copy: "View your institution's skill-gap report, live." },
  { to: '/admin', icon: Landmark, label: 'Admin / Govt', copy: 'Track skill demand across states and institutions.' }
]

function VerificationMark() {
  return (
    <svg viewBox="0 0 380 380" className="w-full max-w-md mx-auto" role="img" aria-label="Concentric verification graph">
      <circle cx="190" cy="190" r="170" fill="none" stroke="#2A3050" strokeWidth="1" />
      <circle cx="190" cy="190" r="128" fill="none" stroke="#2A3050" strokeWidth="1" />
      <circle cx="190" cy="190" r="86" fill="none" stroke="#2A3050" strokeWidth="1" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x2 = 190 + 170 * Math.sin(rad)
        const y2 = 190 - 170 * Math.cos(rad)
        return <line key={deg} x1="190" y1="190" x2={x2} y2={y2} stroke="#2A3050" strokeWidth="1" />
      })}
      <polygon
        points="190,60 300,150 265,290 115,290 80,150"
        fill="#1F6F5C"
        fillOpacity="0.28"
        stroke="#1F6F5C"
        strokeWidth="1.5"
      />
      <polygon
        points="190,95 270,160 244,270 136,270 110,160"
        fill="none"
        stroke="#C99A3A"
        strokeWidth="1.25"
        strokeDasharray="3 3"
      />
      <circle cx="190" cy="190" r="34" fill="#12172B" stroke="#C99A3A" strokeWidth="1.5" />
      <path d="M176 190l9 9 20-20" fill="none" stroke="#C99A3A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero */}
      <div className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-8 pb-20 lg:pb-28">
          <div className="flex items-center justify-between mb-16">
            <p className="font-display text-xl">SkillBridge</p>
            <p className="text-sm text-white/50">Academia · Industry · Government</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="font-display text-4xl lg:text-5xl leading-[1.15]">
                A skill isn't real until someone who can vouch for it says so.
              </h1>
              <p className="mt-6 text-white/70 max-w-prose text-[15px] leading-relaxed">
                SkillBridge replaces self-declared resumes with a verified skill graph — built
                from faculty endorsement, assessments, and real internship outcomes — so
                industry can hire on evidence, and institutions can see their skill gaps
                before it costs a student a placement.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/student"
                  className="inline-flex items-center gap-2 bg-gold text-navy font-medium px-5 py-3 rounded-md hover:bg-goldSoft transition-colors"
                >
                  View a student profile <ArrowRight size={16} />
                </Link>
                <Link
                  to="/recruiter"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-md hover:border-white/60 transition-colors"
                >
                  View the recruiter view
                </Link>
              </div>
            </div>
            <VerificationMark />
          </div>
        </div>
      </div>

      {/* Problem stats */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-4xl text-brick">~50%</p>
          <p className="text-sm text-ink/60 mt-2 max-w-[26ch]">of graduates are considered industry-ready at the time of hiring, by most employability surveys.</p>
        </div>
        <div>
          <p className="font-display text-4xl text-ink">1.5 Cr</p>
          <p className="text-sm text-ink/60 mt-2 max-w-[26ch]">graduates enter the job market every year across Indian institutions.</p>
        </div>
        <div>
          <p className="font-display text-4xl text-teal">3</p>
          <p className="text-sm text-ink/60 mt-2 max-w-[26ch]">parties hold a piece of the fix — none of them can see the other two today.</p>
        </div>
      </div>

      {/* The loop */}
      <div className="border-y border-line bg-white/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="font-display text-3xl mb-10 max-w-prose">A closed loop, not a listing board.</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {LOOP.map((step, i) => (
              <div key={step.title} className="relative pl-5 border-l-2 border-line">
                <p className="text-sm text-gold mb-2">{i + 1}</p>
                <h3 className="font-display text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Persona entry points */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="font-display text-3xl mb-10">Explore the portal as —</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERSONAS.map(({ to, icon: Icon, label, copy }) => (
            <Link
              key={to}
              to={to}
              className="group border border-line rounded-md p-6 bg-white/60 hover:border-navy transition-colors"
            >
              <Icon size={22} strokeWidth={1.6} className="text-navy" />
              <h3 className="font-display text-xl mt-4">{label}</h3>
              <p className="text-sm text-ink/60 mt-2 leading-relaxed">{copy}</p>
              <span className="inline-flex items-center gap-1 text-sm text-gold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Open demo <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-line py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between text-sm text-ink/45">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} /> Built for Smart India Hackathon</span>
          <span>SkillBridge — frontend demo</span>
        </div>
      </footer>
    </div>
  )
}
