import { useState } from 'react'
import { Link } from 'react-router-dom'
import { members } from '../data'

function MembersPage() {
  const [filter, setFilter] = useState('all')
  
  const leadership = members.filter(m => m.featured)
  const coreMembers = members.filter(m => !m.featured)
  
  const displayMembers = filter === 'leadership' ? leadership : 
                         filter === 'core' ? coreMembers : members

  return (
    <div className="page members-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="page-title">Our Brotherhood</h1>
          <p className="page-subtitle">15 riders united by passion, bonded by the road</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Members ({members.length})
            </button>
            <button 
              className={`filter-tab ${filter === 'leadership' ? 'active' : ''}`}
              onClick={() => setFilter('leadership')}
            >
              Leadership ({leadership.length})
            </button>
            <button 
              className={`filter-tab ${filter === 'core' ? 'active' : ''}`}
              onClick={() => setFilter('core')}
            >
              Core Members ({coreMembers.length})
            </button>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="section">
        <div className="container">
          <div className="members-page-grid">
            {displayMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`member-card-full ${member.featured ? 'leadership' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="member-photo-large">
                  👤
                  <div className="member-designation-badge">{member.designation}</div>
                </div>
                <div className="member-info-full">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  
                  <div className="member-details">
                    <div className="member-detail">
                      <span className="detail-label">Rides</span>
                      <span className="detail-value">🏍️ {member.bike}</span>
                    </div>
                    <div className="member-detail">
                      <span className="detail-label">Experience</span>
                      <span className="detail-value">⏱️ {member.experience}</span>
                    </div>
                  </div>
                  
                  <p className="member-quote-full">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Info */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-content">
            <h2>An Invite-Only Brotherhood</h2>
            <p>Our club operates on an invite-only basis. We grow through trust and shared experiences on the road.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MembersPage
