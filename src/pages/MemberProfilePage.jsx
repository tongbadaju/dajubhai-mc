import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { members } from '../data'

// Icons
const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const BikeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 17.5V14l-3-3 4-3 2 3h3" />
  </svg>
)

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" opacity="0.4">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
)

const AvatarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="120" height="120" opacity="0.15">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const NumberIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>
  </svg>
)

// Social Media Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  twitter: TwitterIcon,
  x: TwitterIcon,
}

const socialLabelMap = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  twitter: 'X (Twitter)',
  x: 'X (Twitter)',
}

export default function MemberProfilePage() {
  const { slug } = useParams()
  const rideRef = useRef(null)
  const [rideOpen, setRideOpen] = useState(false)

  const member = members.find(m => m.slug === slug)

  if (!member) {
    return (
      <div className="page mp-page">
        <section className="page-hero">
          <div className="container">
            <Link to="/members" className="back-link"><BackIcon /> Back to Members</Link>
            <h1 className="page-title">Member Not Found</h1>
            <p className="page-subtitle">This rider doesn't exist in our brotherhood.</p>
          </div>
        </section>
      </div>
    )
  }

  const hasBike = member.bike
  const hasSocials = member.socialLinks && Object.keys(member.socialLinks).length > 0

  const handleViewRide = () => {
    setRideOpen(true)
    setTimeout(() => {
      rideRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <div className="page mp-page">
      {/* Hero with Cover Photo */}
      <section className="mp-hero">
        <div className="mp-hero-bg">
          {member.coverPhoto ? (
            <img src={member.coverPhoto} alt={member.name} className="mp-hero-bg-img" />
          ) : member.photo ? (
            <img src={member.photo} alt={member.name} className="mp-hero-bg-img" />
          ) : (
            <div className="mp-hero-placeholder"><AvatarIcon /></div>
          )}
          <div className="mp-hero-overlay" />
        </div>

        <div className="container mp-hero-content">
          <Link to="/members" className="back-link">
            <BackIcon /> Back to Members
          </Link>

          <div className="mp-hero-info">
            <span className="mp-role-badge">{member.role}</span>
            <h1 className="mp-name">{member.name}</h1>

            {member.quote && (
              <div className="mp-quote">
                <QuoteIcon />
                <p>"{member.quote}"</p>
              </div>
            )}

            <div className="mp-hero-actions">
              {hasBike && (
                <button className="btn btn-primary mp-view-ride-btn" onClick={handleViewRide}>
                  <BikeIcon />
                  View Ride
                </button>
              )}
              {hasSocials && (
                <div className="mp-hero-socials">
                  {Object.entries(member.socialLinks).map(([platform, url]) => {
                    const Icon = socialIconMap[platform]
                    return Icon ? (
                      <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="mp-social-btn" title={socialLabelMap[platform]}>
                        <Icon />
                      </a>
                    ) : null
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="section mp-details-section">
        <div className="container">
          <div className="mp-details-grid">
            {/* Profile Photo Card */}
            <div className="mp-photo-card">
              <div
                className="mp-main-photo"
                style={member.photo ? { backgroundImage: `url(${member.photo})` } : {}}
              >
                {!member.photo && (
                  <div className="mp-photo-placeholder"><AvatarIcon /></div>
                )}
              </div>
            </div>

            {/* Info Card */}
            <div className="mp-info-card">
              <div className="mp-info-header">
                <h2 className="mp-info-name">{member.name}</h2>
                <span className="mp-info-role">{member.role}</span>
              </div>

              {/* Personal Details */}
              <div className="mp-info-details">
                {hasBike && (
                  <div className="mp-detail-item">
                    <BikeIcon />
                    <div>
                      <span className="mp-detail-label">Ride</span>
                      <span className="mp-detail-value">{member.bike}</span>
                    </div>
                  </div>
                )}

                {member.bikeNumber && (
                  <div className="mp-detail-item">
                    <NumberIcon />
                    <div>
                      <span className="mp-detail-label">Reg Number</span>
                      <span className="mp-detail-value">{member.bikeNumber}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              {hasSocials && (
                <div className="mp-social-section">
                  <h4 className="mp-section-label">Connect</h4>
                  <div className="mp-social-links">
                    {Object.entries(member.socialLinks).map(([platform, url]) => {
                      const Icon = socialIconMap[platform]
                      const label = socialLabelMap[platform]
                      return Icon ? (
                        <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="mp-social-link-btn">
                          <Icon />
                          <span>{label}</span>
                        </a>
                      ) : null
                    })}
                  </div>
                </div>
              )}

              {member.quote && (
                <div className="mp-info-quote">
                  <QuoteIcon />
                  <p>"{member.quote}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ride / Bike Section */}
      {hasBike && (
        <section className={`section mp-ride-section ${rideOpen ? 'open' : ''}`} ref={rideRef}>
          <div className="container">
            <div className="mp-ride-header">
              <h2 className="section-title">
                <BikeIcon /> The Ride
              </h2>
            </div>

            <div className="mp-ride-content">
              <div className="mp-ride-card">
                <div className="mp-ride-card-visual">
                  {member.bikePhoto ? (
                    <div
                      className="mp-ride-card-photo"
                      style={{ backgroundImage: `url(${member.bikePhoto})` }}
                    />
                  ) : (
                    <div className="mp-ride-card-placeholder">
                      <BikeIcon />
                    </div>
                  )}
                </div>

                <div className="mp-ride-card-info">
                  <h3 className="mp-ride-bike-name">{member.bike}</h3>
                  {member.bikeNumber && (
                    <div className="mp-ride-plate">
                      <span className="mp-ride-plate-label">Registration</span>
                      <span className="mp-ride-plate-number">{member.bikeNumber}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
