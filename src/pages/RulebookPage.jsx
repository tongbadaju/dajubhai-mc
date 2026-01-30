import { useState } from 'react'
import { Link } from 'react-router-dom'
import { rules, clubInfo } from '../data'

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

function RulebookPage() {
  const [openRules, setOpenRules] = useState([1]) // First rule open by default
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', ...new Set(rules.map(r => r.category))]
  
  const filteredRules = activeCategory === 'all' 
    ? rules 
    : rules.filter(r => r.category === activeCategory)

  const toggleRule = (id) => {
    setOpenRules(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )
  }

  const expandAll = () => setOpenRules(filteredRules.map(r => r.id))
  const collapseAll = () => setOpenRules([])

  return (
    <div className="page rulebook-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="page-title">Club Rulebook</h1>
          <p className="page-subtitle">The code we live by — on and off the road</p>
        </div>
      </section>

      {/* Categories */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs rulebook-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? 'All Rules' : cat}
              </button>
            ))}
          </div>
          <div className="rulebook-actions">
            <button className="action-btn" onClick={expandAll}>Expand All</button>
            <button className="action-btn" onClick={collapseAll}>Collapse All</button>
          </div>
        </div>
      </section>

      {/* Rules List */}
      <section className="section">
        <div className="container">
          <div className="rules-container">
            <div className="rules-list">
              {filteredRules.map((rule, index) => (
                <div 
                  key={rule.id} 
                  className={`rule-item-full ${openRules.includes(rule.id) ? 'open' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="rule-header" onClick={() => toggleRule(rule.id)}>
                    <div className="rule-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="rule-icon-large">{rule.icon}</div>
                    <div className="rule-header-content">
                      <span className="rule-title">{rule.title}</span>
                      <span className="rule-category-tag">{rule.category}</span>
                    </div>
                    <div className="rule-toggle">
                      <ChevronDown />
                    </div>
                  </div>
                  <div className="rule-content-full">
                    <p className="rule-description">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="rulebook-sidebar">
              <div className="sidebar-card">
                <h4>📋 Quick Stats</h4>
                <div className="sidebar-stat">
                  <span className="stat-value">{rules.length}</span>
                  <span className="stat-label">Total Rules</span>
                </div>
                <div className="sidebar-stat">
                  <span className="stat-value">{categories.length - 1}</span>
                  <span className="stat-label">Categories</span>
                </div>
              </div>

              <div className="sidebar-card highlight">
                <h4>🛡️ Core Principle</h4>
                <p>Safety, Respect, and Brotherhood are the three pillars that define us. Every rule stems from these values.</p>
              </div>

              <div className="sidebar-card">
                <h4>⚠️ Important</h4>
                <p>Violation of any rule may result in warnings, suspension, or permanent removal from the club at the leadership's discretion.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Agreement */}
      <section className="agreement-section">
        <div className="container">
          <div className="agreement-box">
            <div className="agreement-icon">✍️</div>
            <div className="agreement-content">
              <h3>Member Agreement</h3>
              <p>Every member of {clubInfo.fullName} agrees to abide by these rules and uphold the values of our brotherhood.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RulebookPage
