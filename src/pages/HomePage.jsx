import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { clubInfo, socialLinks, rides, members, rules, gallery, stats, contactInfo, heroSlides } from '../data'

// Icons
const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

// Hero Carousel Component
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // 5 seconds per slide

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="hero" id="home">
      {/* Carousel Background */}
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            {slide.caption && (
              <div className="slide-caption">
                <span>{slide.caption}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title">{clubInfo.name}</h1>
        <p className="hero-tagline">{clubInfo.tagline}</p>
        <p className="hero-established">ESTD {clubInfo.established}</p>
        <div className="hero-cta">
          <a href="#about" className="btn btn-primary">Discover More</a>
          <Link to="/members" className="btn btn-outline">Meet the Crew</Link>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="30" height="30">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}

// Stats Component
function Stats() {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Component
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">The story of brotherhood, adventure, and the open road</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>{clubInfo.description}</p>
            <p>{clubInfo.mission}</p>
            <div className="about-values">
              {clubInfo.values.map((value, index) => (
                <div key={index} className="value-item">{value}</div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={clubInfo.logo} alt={clubInfo.fullName} className="about-logo-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Gallery Component
function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Moments captured from our epic journeys</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-placeholder">📸</div>
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Rides Component
function Rides() {
  return (
    <section className="section" id="rides">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Rides</h2>
          <p className="section-subtitle">Epic journeys we've conquered together</p>
        </div>
        <div className="rides-grid">
          {rides.map((ride) => (
            <div key={ride.id} className={`ride-card ${ride.featured ? 'featured' : ''}`}>
              <div className="ride-image" style={ride.image ? { backgroundImage: `url(${ride.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                {!ride.image && <div className="ride-image-placeholder">🏔️</div>}
                {ride.featured && <span className="ride-badge">Featured</span>}
              </div>
              <div className="ride-content">
                <div className="ride-meta">
                  <span>{ride.date}</span>
                </div>
                <h3 className="ride-title">{ride.title}</h3>
                <div className="ride-location">
                  <MapPin />
                  {ride.location}
                </div>
                <p className="ride-description">{ride.description}</p>
                <div className="ride-stats">
                  <div className="ride-stat"><strong>{ride.distance}</strong> Distance</div>
                  <div className="ride-stat"><strong>{ride.duration}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Members Preview Component (for homepage)
function MembersPreview() {
  const featuredMembers = members.filter(m => m.featured).slice(0, 6)
  
  return (
    <section className="members section" id="members">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Brotherhood</h2>
          <p className="section-subtitle">Meet the leadership team</p>
        </div>
        <div className="members-grid">
          {featuredMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-photo" style={member.photo ? { backgroundImage: `url(${member.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                {!member.photo && '👤'}
                <div className="member-designation-badge">{member.role}</div>
              </div>
              <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                {member.bike && (
                  <div className="member-bike">
                    {member.bike}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/members" className="btn btn-outline">
            View All {members.length} Members <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Rulebook Preview Component (for homepage)
function RulebookPreview() {
  const previewRules = rules.slice(0, 4)
  
  return (
    <section className="section" id="rules">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Club Rulebook</h2>
          <p className="section-subtitle">The code we live by on and off the road</p>
        </div>
        <div className="rules-preview-grid">
          {previewRules.map((rule) => (
            <div key={rule.id} className="rule-preview-card">
              <div className="rule-icon">{rule.icon}</div>
              <h4 className="rule-preview-title">{rule.title}</h4>
              <p className="rule-preview-desc">{rule.description.slice(0, 80)}...</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/rulebook" className="btn btn-outline">
            View Full Rulebook <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Contact Component
function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Connect with the brotherhood</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Have questions about our club or just want to say hello? We'd love to hear from you.</p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail />
                <span>{contactInfo.email}</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>
          <div className="contact-social">
            <h4>Follow Our Journey</h4>
            <p className="text-silver" style={{marginBottom: '1.5rem'}}>Stay updated with our latest rides, photos, and adventures on social media.</p>
            <div className="social-links">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main HomePage Component
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Rides />
      <MembersPreview />
      <RulebookPreview />
      <Contact />
    </>
  )
}

export default HomePage
