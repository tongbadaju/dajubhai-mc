import { useState } from 'react'

// Bike icon
const BikeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 17.5V14l-3-3 4-3 2 3h3" />
  </svg>
)

// Quote icon
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" opacity="0.3">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
)

// Avatar Placeholder Icon
const AvatarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="80" height="80" opacity="0.15">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

export default function MemberCard({ member, index = 0 }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`member-profile-card ${member.featured ? 'is-leadership' : ''}`}
      style={{ animationDelay: `${index * 0.04}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Photo Side */}
      <div className="profile-photo-wrapper">
        <div
          className="profile-photo"
          style={member.photo ? { backgroundImage: `url(${member.photo})` } : {}}
        >
          {!member.photo && (
            <div className="profile-placeholder">
              <AvatarIcon />
            </div>
          )}
        </div>
        <div className="profile-overlay" />
        
        {/* Role Badge */}
        <span className="profile-role-badge">{member.role}</span>

        {/* Name overlay at bottom of photo */}
        <div className="profile-name-overlay">
          <h3 className="profile-name">{member.name}</h3>
        </div>
      </div>

      {/* Info Section - visible on hover/flip */}
      <div className={`profile-details ${isFlipped ? 'revealed' : ''}`}>
        <div className="profile-details-inner">
          <h3 className="profile-details-name">{member.name}</h3>
          <span className="profile-details-role">{member.role}</span>
          
          {member.bike && (
            <div className="profile-bike">
              <BikeIcon />
              <span>{member.bike}</span>
            </div>
          )}

          {member.quote && (
            <div className="profile-quote">
              <QuoteIcon />
              <p>"{member.quote}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
