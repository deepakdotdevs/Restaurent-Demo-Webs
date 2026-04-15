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

      <div style={{ 
        display: 'flex', 
        gap: 0, 
        borderBottom: '1px solid rgba(201,168,76,.2)', 
        marginBottom: 'var(--space-3xl)', 
        overflowX: 'auto', 
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        flexWrap: 'nowrap',
        paddingBottom: '0.75rem',
      }}>
        {tabs.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)} style={{
            padding: 'clamp(10px, 2vw, 16px) clamp(12px, 3vw, 36px)', 
            fontSize: 'clamp(9px, 1.5vw, 10px)', 
            letterSpacing: 3, 
            textTransform: 'uppercase',
            color: activeTab === i ? 'var(--gold)' : 'var(--muted)',
            cursor: 'pointer', 
            background: 'none',
            borderBottom: activeTab === i ? '2px solid var(--gold)' : '2px solid transparent',
            borderLeft: 'none', 
            borderRight: 'none', 
            borderTop: 'none',
            fontFamily: "'Montserrat',sans-serif", 
            transition: 'all .3s', 
            whiteSpace: 'nowrap',
            flexShrink: 0,
            minHeight: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            touchAction: 'manipulation',
          }}>
            {tab}
          </button>
        ))}
      </div>

      <style>{`
        div[style*="overflowX: auto"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
        {menuItems.map(item => (
          <div key={item.name} className="menu-item" style={{ background: 'var(--mid)', padding: 'var(--space-lg)', display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', transition: 'background .3s', borderRadius: '0.5rem' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(45,36,24,.9)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--mid)'}
          >
            <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</div>
            <div style={{ width: '100%', minWidth: 0 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1rem', color: 'var(--cream)', marginBottom: 6, wordBreak: 'break-word' }}>{item.name}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.7, overflow: 'hidden' }}>{item.desc}</div>
              <div style={{ fontSize: '.9rem', color: 'var(--gold)', marginTop: 10, fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic' }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <button className="btn-primary" style={{ width: 'auto', minWidth: '150px' }}><span>View Full Menu →</span></button>
      </div>

      <style>{`
        @media(max-width:1100px){
          .menu-grid{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:640px){
          .menu-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  )
}
