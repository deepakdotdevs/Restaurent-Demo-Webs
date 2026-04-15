'use client'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'New Arrivals', href: '#arrivals' },
  { label: 'Specials', href: '#festivals' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9990,
        padding: scrolled ? 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 5%, 3.75rem)' : 'clamp(1rem, 3vw, 1.75rem) clamp(1rem, 5%, 3.75rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all .5s ease',
        background: scrolled ? 'rgba(13,11,8,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,.15)' : 'none',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <a
        href="#"
        style={{ 
          fontFamily: "'Playfair Display',serif", 
          fontSize: 'clamp(1rem, 4vw, 1.6rem)', 
          color: 'var(--gold)', 
          letterSpacing: 3, 
          textDecoration: 'none', 
          flexShrink: 0,
        }}
      >
        <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Shahi</span> Rasoi
      </a>

      {/* Desktop links */}
      <div style={{ display: 'none', gap: 'clamp(1rem, 3vw, 2.5rem)', alignItems: 'center' }} className="hidden md:flex">
        {links.map(l => (
          <button key={l.label} onClick={() => scrollTo(l.href)} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--cream)', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)', textTransform: 'uppercase', letterSpacing: 0.08, transition: 'color 0.2s', cursor: 'pointer', fontFamily: "'Montserrat',sans-serif" }} className="nav-link-item"
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream)'}
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('#enquiry')}
          style={{
            padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.5rem)', 
            border: '1px solid var(--gold)', 
            color: 'var(--gold)',
            background: 'transparent', 
            fontFamily: "'Montserrat',sans-serif",
            fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)', 
            letterSpacing: 2, 
            textTransform: 'uppercase', 
            cursor: 'pointer',
            transition: 'all .3s',
            borderRadius: '3.125rem',
            minHeight: '2.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--gold)'; (e.target as HTMLElement).style.color = 'var(--deep)' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--gold)' }}
        >
          Reserve Table
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', color: 'var(--gold)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', cursor: 'pointer', display: 'flex' }}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '100%', left: 0, right: 0, bottom: 0,
          background: 'rgba(13,11,8,.99)', zIndex: 9989,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 'clamp(1rem, 4vw, 2rem)',
          padding: 'clamp(2rem, 8vw, 3rem) clamp(1rem, 4vw, 2rem)',
          overflow: 'auto',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(201,168,76,.2)',
          animation: 'slideDown 0.3s ease',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 'clamp(1rem, 3vw, 1.5rem)', right: 'clamp(1rem, 4vw, 2rem)', background: 'none', border: 'none', color: 'var(--gold)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', cursor: 'pointer' }} aria-label="Close menu">✕</button>
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              style={{ background: 'none', border: 'none', fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', color: 'var(--cream)', cursor: 'pointer', letterSpacing: 2, minHeight: '2.75rem', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream)'}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#enquiry')}
            style={{
              marginTop: 'clamp(1rem, 3vw, 2rem)',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
              border: '1.5px solid var(--gold)',
              color: 'var(--gold)',
              background: 'transparent',
              fontFamily: "'Montserrat',sans-serif",
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              letterSpacing: 2,
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '3.125rem',
              minHeight: '2.75rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(201,168,76,0.15)'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; }}
          >
            Reserve Table
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          nav div:nth-child(2) {
            display: flex !important;
          }
          nav button[class*="md:hidden"] {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}
