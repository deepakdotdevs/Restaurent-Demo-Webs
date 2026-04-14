'use client'
import { useReveal } from './useReveal'

export default function Story() {
  const left = useReveal()
  const right = useReveal()

  const revealStyle = (visible: boolean, dir: 'left' | 'right' | 'up' = 'up') => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : dir === 'left' ? 'translateX(-40px)' : dir === 'right' ? 'translateX(40px)' : 'translateY(40px)',
    transition: 'opacity .8s ease, transform .8s ease',
  })

  return (
    <section id="story" style={{ padding: '120px 60px', background: 'var(--dark)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}
      className="story-grid">
      {/* Images */}
      <div ref={left.ref} style={{ position: 'relative', height: 620, ...revealStyle(left.visible, 'left') }}>
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Restaurant" style={{ position: 'absolute', top: 0, left: 0, width: '78%', height: 'auto', objectFit: 'cover', filter: 'brightness(.85) sepia(.1)' }} />
        <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80" alt="Sweets" style={{ position: 'absolute', bottom: 0, right: 0, width: '55%', height: 'auto', objectFit: 'cover', border: '4px solid var(--dark)' }} />
        {/* Rotating badge */}
        <div className="rotate-slow" style={{ position: 'absolute', top: '50%', left: '58%', width: 110, height: 110, borderRadius: '50%', background: 'linear-gradient(135deg,var(--gold),var(--gold-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display',serif", color: 'var(--deep)', fontSize: '.65rem', fontWeight: 700, letterSpacing: 1, textAlign: 'center', zIndex: 3, boxShadow: '0 0 40px rgba(201,168,76,.4)' }}>
          <div className="rotate-slow-inner" style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.4rem', display: 'block', lineHeight: 1 }}>25+</span>
            Years of<br />Excellence
          </div>
        </div>
      </div>

      {/* Text */}
      <div ref={right.ref} style={revealStyle(right.visible, 'right')}>
        <div className="section-badge">Our Heritage</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', lineHeight: 1.15, color: 'var(--cream)', marginBottom: 20 }}>
          A Legacy Crafted<br />in Every <em style={{ color: 'var(--gold)' }}>Bite</em>
        </h2>
        <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg,var(--gold),transparent)', margin: '28px 0' }} />
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.8, marginBottom: 16 }}>
          Born in the heart of Haryana, Shahi Rasoi began as a dream to preserve the authentic flavours of our ancestors. Every sweet, every namkeen, every dish carries the warmth of generations.
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.8 }}>
          Our master chefs follow recipes passed down through three generations, using only the finest ingredients — sourced locally and crafted with an uncompromising dedication to quality.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30, marginTop: 50 }}>
          {[{ num: '150+', label: 'Varieties' }, { num: '50K+', label: 'Happy Customers' }, { num: '25+', label: 'Years Legacy' }].map(s => (
            <div key={s.label} className="stat-box">
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', color: 'var(--gold)', fontWeight: 900 }}>{s.num}</div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: 'var(--muted)', textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:1100px){.story-grid{grid-template-columns:1fr!important;gap:60px!important;}}`}</style>
    </section>
  )
}
