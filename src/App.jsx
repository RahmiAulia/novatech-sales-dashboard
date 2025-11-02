import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import './index.css'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}
