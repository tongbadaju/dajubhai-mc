import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import { clubInfo } from './data'
import HomePage from './pages/HomePage'
import MembersPage from './pages/MembersPage'
import RulebookPage from './pages/RulebookPage'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const navLinks = isHome ? [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#rides', label: 'Rides' },
    { to: '/members', label: 'Members' },
    { to: '/rulebook', label: 'Rulebook' },
    { href: '#contact', label: 'Contact' }
  ] : [
    { to: '/', label: 'Home' },
    { to: '/members', label: 'Members' },
    { to: '/rulebook', label: 'Rulebook' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={clubInfo.logo} alt={clubInfo.name} />
          <span>{clubInfo.name}</span>
        </Link>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.to ? (
                <Link to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              ) : (
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
        <button className={`navbar-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src={clubInfo.logo} alt={clubInfo.name} />
          <span>{clubInfo.fullName}</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {clubInfo.fullName}. All rights reserved. 
          <span>Ride with pride.</span>
        </p>
      </div>
    </footer>
  )
}

// Layout wrapper
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/rulebook" element={<RulebookPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
