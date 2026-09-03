import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import RecruiterDashboard from './pages/RecruiterDashboard.jsx'
import TpoDashboard from './pages/TpoDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/tpo" element={<TpoDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
