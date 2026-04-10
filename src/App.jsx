import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Landing from './pages/Landing/Landing'
import MuskaanDiscountCard from './pages/MuskaanDiscountCard/MuskaanDiscountCard'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const element = document.querySelector(hash)

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/muskaan-discount-card" element={<MuskaanDiscountCard />} />
      </Routes>
    </Router>
  )
}

export default App
