// ---- Mock data standing in for the API layer described in the PRD ----

export const studentProfile = {
  name: 'Ananya Rao',
  institution: 'Govt. College of Engineering, Nagpur',
  program: 'B.Tech, Computer Science — Final Year',
  readiness: 78
}

export const skillRadar = [
  { skill: 'JavaScript', verified: 85, claimed: 90 },
  { skill: 'Data Structures', verified: 80, claimed: 80 },
  { skill: 'Cloud (AWS)', verified: 40, claimed: 70 },
  { skill: 'SQL', verified: 75, claimed: 75 },
  { skill: 'System Design', verified: 35, claimed: 60 },
  { skill: 'Communication', verified: 65, claimed: 65 }
]

export const skillList = [
  { name: 'JavaScript', level: 'Advanced', status: 'verified', source: 'Assessment + Faculty' },
  { name: 'React', level: 'Intermediate', status: 'verified', source: 'Project review' },
  { name: 'Data Structures & Algorithms', level: 'Advanced', status: 'verified', source: 'Assessment' },
  { name: 'AWS / Cloud Fundamentals', level: 'Beginner', status: 'gap', source: 'Self-declared only' },
  { name: 'System Design', level: 'Beginner', status: 'gap', source: 'Self-declared only' },
  { name: 'SQL', level: 'Intermediate', status: 'verified', source: 'Faculty endorsed' }
]

export const internships = [
  { id: 1, role: 'Frontend Engineering Intern', company: 'Nimbus Systems', location: 'Pune (Hybrid)', match: 92, skills: ['React', 'JavaScript', 'CSS'] },
  { id: 2, role: 'Cloud Support Intern', company: 'Vertex Cloud', location: 'Bengaluru', match: 58, skills: ['AWS', 'Linux', 'Networking'] },
  { id: 3, role: 'Backend Developer Intern', company: 'Ledger Labs', location: 'Remote', match: 81, skills: ['SQL', 'Node.js', 'System Design'] },
  { id: 4, role: 'Data Analyst Intern', company: 'Northbrook Analytics', location: 'Hyderabad', match: 70, skills: ['SQL', 'Python', 'Communication'] }
]

export const applicationTimeline = [
  { role: 'Frontend Engineering Intern', company: 'Nimbus Systems', stage: 'Interview', updated: '2 days ago' },
  { role: 'Backend Developer Intern', company: 'Ledger Labs', stage: 'Shortlisted', updated: '5 days ago' },
  { role: 'Data Analyst Intern', company: 'Northbrook Analytics', stage: 'Applied', updated: '1 week ago' }
]

// Recruiter side
export const postedRoles = [
  { id: 1, title: 'Frontend Engineering Intern', applicants: 46, verified: 31, minSkill: 'React — Intermediate', status: 'Open' },
  { id: 2, title: 'Backend Developer Intern', applicants: 28, verified: 19, minSkill: 'SQL — Intermediate', status: 'Open' },
  { id: 3, title: 'UI/UX Design Intern', applicants: 12, verified: 6, minSkill: 'Figma — Beginner', status: 'Closed' }
]

export const candidates = [
  { name: 'Ananya Rao', institution: 'GCOE Nagpur', match: 92, topSkills: ['React', 'JavaScript'], verified: true },
  { name: 'Rahul Mehta', institution: 'VJTI Mumbai', match: 88, topSkills: ['React', 'CSS'], verified: true },
  { name: 'Sana Iqbal', institution: 'IIIT Pune', match: 84, topSkills: ['JavaScript', 'Node.js'], verified: true },
  { name: 'Devika Nair', institution: 'NIT Trichy', match: 76, topSkills: ['React'], verified: false }
]

// TPO / institution side
export const institutionSkillGap = [
  { skill: 'Cloud / DevOps', required: 85, current: 38 },
  { skill: 'System Design', required: 75, current: 41 },
  { skill: 'Data Structures', required: 80, current: 74 },
  { skill: 'Communication', required: 70, current: 63 },
  { skill: 'SQL', required: 70, current: 68 }
]

export const institutionCohorts = [
  { branch: 'Computer Science', students: 240, readiness: 74, placed: 168 },
  { branch: 'Electronics', students: 180, readiness: 61, placed: 92 },
  { branch: 'Mechanical', students: 160, readiness: 55, placed: 71 },
  { branch: 'Information Tech', students: 150, readiness: 79, placed: 118 }
]

// Admin / national
export const nationalTrends = [
  { month: 'Apr', demand: 62 },
  { month: 'May', demand: 68 },
  { month: 'Jun', demand: 74 },
  { month: 'Jul', demand: 79 },
  { month: 'Aug', demand: 88 },
  { month: 'Sep', demand: 94 }
]

export const stateSummary = [
  { state: 'Maharashtra', institutions: 214, students: 48210, avgReadiness: 71 },
  { state: 'Karnataka', institutions: 178, students: 39880, avgReadiness: 75 },
  { state: 'Tamil Nadu', institutions: 201, students: 44120, avgReadiness: 69 },
  { state: 'Uttar Pradesh', institutions: 256, students: 61340, avgReadiness: 58 }
]
