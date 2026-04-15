'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const floatIcons = [
  { icon: '🍛', style: { top: '15%', left: '8%', fontSize: '2.5rem', animationDelay: '0s' } },
  { icon: '🪔', style: { top: '20%', right: '10%', fontSize: '3.5rem', animationDelay: '1.5s' } },
  { icon: '🌹', style: { bottom: '25%', left: '12%', fontSize: '2rem', animationDelay: '3s' } },
  { icon: '✨', style: { bottom: '20%', right: '8%', fontSize: '4rem', animationDelay: '.8s' } },
  { icon: '🍯', style: { top: '50%', left: '5%', fontSize: '2.2rem', animationDelay: '2s' } },
  { icon: '🌟', style: { top: '40%', right: '6%', fontSize: '2.8rem', animationDelay: '4s' } },
]

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Particles
    const container = containerRef.current
    if (!container) return
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + 'vw'
      p.style.animationDuration = (8 + Math.random() * 14) + 's'
      p.style.animationDelay = (Math.random() * 10) + 's'
      const size = (Math.random() * 4 + 1) + 'px'
      p.style.width = size; p.style.height = size
      container.appendChild(p)
    }
    // Parallax
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `scale(1.05) translateY(${window.scrollY * .25}px)`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" ref={containerRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%', maxWidth: '100vw' }}>
      {/* BG */}
      <div ref={bgRef} style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom,rgba(13,11,8,.3) 0%,rgba(13,11,8,.6) 50%,rgba(13,11,8,.95) 100%), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=80') center/cover no-repeat`,
        transform: 'scale(1.05)',
        backgroundAttachment: 'fixed',
      }} />

      {/* Floating icons - hide on mobile */}
      {floatIcons.map((f, i) => (
        <div key={i} className="float-icon" style={{ position: 'absolute', opacity: .15, pointerEvents: 'none', filter: 'drop-shadow(0 0 20px var(--gold))', display: 'none', ...f.style }}>
          {f.icon}
        </div>
      ))}

      {/* Content */}
      <div style={{ 
        position: 'relative', 
        textAlign: 'center', 
        zIndex: 2, 
        maxWidth: '100%', 
        width: '100%',
        padding: 'clamp(1rem, 5vw, 3rem) clamp(1rem, 4vw, 3rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <motion.div className="hero-badge" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .8 }}>
          ✦ Since 1998 ✦
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8, duration: 1 }}
          style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,8vw,5.5rem)', fontWeight: 900, lineHeight: 1.05, color: 'var(--cream)', textShadow: '0 0 80px rgba(201,168,76,.2)', margin: '1rem 0' }}
        >
          Where Tradition<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Meets Taste</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: .8 }}
          style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(0.95rem,2.5vw,1.3rem)', fontStyle: 'italic', color: 'var(--muted)', marginTop: 'clamp(1rem,3vw,1.5rem)', letterSpacing: 1, maxWidth: '35rem' }}
        >
          Authentic flavours crafted with love — Sweets, Namkeens & More
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(0.75rem,2vw,1.5rem)', margin: 'clamp(1.5rem,4vw,2.25rem) 0', flexWrap: 'wrap' }}>
          <div style={{ width: 'clamp(40px, 8vw, 80px)', height: 1, background: 'linear-gradient(90deg,transparent,var(--gold))' }} />
          <span style={{ color: 'var(--gold)' }}>✦</span>
          <div style={{ width: 'clamp(40px, 8vw, 80px)', height: 1, background: 'linear-gradient(90deg,var(--gold),transparent)' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: .8 }}
          style={{ display: 'flex', gap: 'clamp(0.5rem,2vw,1.5rem)', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '35rem' }}>
          <button className="btn-primary" onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })} style={{ flex: 'auto', minWidth: '120px' }}>
            <span>🍽 Explore Menu</span>
          </button>
          <button className="btn-secondary" onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })} style={{ flex: 'auto', minWidth: '120px' }}>
            <span>📖 Our Story</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 'clamp(1.5rem, 3vw, 2.5rem)', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 9, letterSpacing: 4, color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div className="scroll-pulse" style={{ width: 1, height: 50, background: 'linear-gradient(to bottom,var(--gold),transparent)' }} />
      </div>
    </section>
  )
}
