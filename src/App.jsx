import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Landing from './pages/Landing/Landing'
import MuskaanDiscountCard from './pages/MuskaanDiscountCard/MuskaanDiscountCard'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/muskaan-discount-card" element={<MuskaanDiscountCard />} />
      </Routes>
    </Router>
  )
}

export default App
