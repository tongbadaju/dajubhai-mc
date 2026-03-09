import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { members } from '../data'
import MemberCard from '../components/MemberCard'

function MembersPage() {
  const [filter, setFilter] = useState('all')
  const membersRef = useRef(null)
  
  const riders = members.filter(m => m.role !== 'Advisor')
  const advisors = members.filter(m => m.role === 'Advisor')

  const handleTabChange = (newFilter) => {
    setFilter(newFilter)
    setTimeout(() => {
      membersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

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
          <p className="page-subtitle">{members.length} members united by passion</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => handleTabChange('all')}
            >
              All ({members.length})
            </button>
            <button 
              className={`filter-tab ${filter === 'riders' ? 'active' : ''}`}
              onClick={() => handleTabChange('riders')}
            >
              Riders ({riders.length})
            </button>
            <button 
              className={`filter-tab ${filter === 'advisors' ? 'active' : ''}`}
              onClick={() => handleTabChange('advisors')}
            >
              Advisors ({advisors.length})
            </button>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="section" ref={membersRef}>
        <div className="container">
          {filter === 'all' ? (
            <>
              {/* Riders Section */}
              <div className="members-section">
                <h3 className="members-section-title">Riders</h3>
                <div className="members-page-grid">
                  {riders.map((member, index) => (
                    <MemberCard key={member.id} member={member} index={index} />
                  ))}
                </div>
              </div>
              
              {/* Advisors Section */}
              <div className="members-section">
                <h3 className="members-section-title">🎖️ Advisors</h3>
                <div className="members-page-grid">
                  {advisors.map((member, index) => (
                    <MemberCard key={member.id} member={member} index={index} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="members-page-grid">
              {(filter === 'riders' ? riders : advisors).map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          )}
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
