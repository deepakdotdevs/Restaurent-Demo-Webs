'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

const tabs = ['🍬 Sweets', '🧂 Namkeens', '🍛 Curries', '🥐 Snacks', '🥤 Beverages', '🎁 Gift Hampers']

const menuItems = [
  { emoji: '🟡', name: 'Kesar Peda', desc: 'Saffron-scented milk solids with a hint of cardamom. Melt-in-mouth texture.', price: '₹160 / 250g' },
  { emoji: '🟤', name: 'Besan Ladoo', desc: 'Stone-ground gram flour, pure desi ghee, roasted to golden perfection.', price: '₹120 / 250g' },
  { emoji: '🩷', name: 'Rose Barfi', desc: 'Delicate layers of khoya and rose essence topped with silver varak.', price: '₹240 / 250g' },
  { emoji: '🟠', name: 'Motichoor Ladoo', desc: 'Fine boondi droplets bound with saffron syrup — a festive favourite.', price: '₹180 / 500g' },
  { emoji: '🟢', name: 'Pista Kalakand', desc: 'Grainy milk cake studded with crushed pistachios & gulkand filling.', price: '₹300 / 250g' },
  { emoji: '⬛', name: 'Chocolate Burfi', desc: 'A modern twist — dark Belgian chocolate meets pure desi mithai.', price: '₹280 / 250g' },
]

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, visible } = useReveal()

  return (
    <section id="menu" style={{ padding: 'var(--space-3xl) var(--space-lg)', background: 'var(--deep)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge">Our Offerings</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Our <em style={{ color: 'var(--gold)' }}>Menu</em>
        </h2>
      </div>

      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid rgba(201,168,76,.2)', marginBottom: 'var(--space-3xl)', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {tabs.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)} style={{
            padding: '16px 36px', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
            color: activeTab === i ? 'var(--gold)' : 'var(--muted)',
            cursor: 'none', background: 'none',
            borderBottom: activeTab === i ? '2px solid var(--gold)' : '2px solid transparent',
            borderLeft: 'none', borderRight: 'none', borderTop: 'none',
            fontFamily: "'Montserrat',sans-serif", transition: 'all .3s', whiteSpace: 'nowrap',
          }}>
            {tab}
          </button>
        ))}
      </div>

      <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.125rem' }}>
        {menuItems.map(item => (
          <div key={item.name} className="menu-item" style={{ background: 'var(--mid)', padding: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', transition: 'background .3s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(45,36,24,.9)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--mid)'}
          >
            <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', color: 'var(--cream)', marginBottom: 6 }}>{item.name}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</div>
              <div style={{ fontSize: '.9rem', color: 'var(--gold)', marginTop: 10, fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic' }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <button className="btn-primary"><span>View Full Menu →</span></button>
      </div>

      <style>{`@media(max-width:1100px){.menu-grid-resp{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:640px){.menu-grid-resp{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
