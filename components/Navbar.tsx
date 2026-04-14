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
        padding: scrolled ? '16px 60px' : '28px 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all .5s ease',
        background: scrolled ? 'rgba(13,11,8,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,.15)' : 'none',
      }}
    >
      <a
        href="#"
        style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: 'var(--gold)', letterSpacing: 3, textDecoration: 'none', cursor: 'none' }}
      >
        <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Shahi</span> Rasoi
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="hidden md:flex">
        {links.map(l => (
          <button key={l.label} onClick={() => scrollTo(l.href)} style={{ background: 'none', border: 'none', padding: 0 }} className="nav-link-item">
            {l.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('#enquiry')}
          style={{
            padding: '10px 24px', border: '1px solid var(--gold)', color: 'var(--gold)',
            background: 'transparent', fontFamily: "'Montserrat',sans-serif",
            fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', cursor: 'none',
            transition: 'all .3s',
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
        style={{ background: 'none', border: 'none', color: 'var(--gold)', fontSize: '1.5rem', cursor: 'none', display: 'none' }}
        className="block md:hidden"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(13,11,8,.97)', zIndex: 9999,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 30, right: 30, background: 'none', border: 'none', color: 'var(--gold)', fontSize: '1.5rem', cursor: 'none' }}>✕</button>
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              style={{ background: 'none', border: 'none', fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', color: 'var(--cream)', cursor: 'none', letterSpacing: 2 }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
