'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const { ref, visible } = useReveal()

  const handleSubmit = () => {
    if (email.trim()) { setDone(true); setEmail('') }
  }

  return (
    <section id="subscribe" style={{
      background: 'linear-gradient(135deg,#1A1005 0%,var(--dark) 100%)',
      padding: '120px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Radial glow */}
      <div style={{ position: 'absolute', top: '-50%', left: '50%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 70%)', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ position: 'relative', zIndex: 2, maxWidth: 600, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>Stay in the Loop</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Get <em style={{ color: 'var(--gold)' }}>Exclusive</em> Offers
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--muted)', fontStyle: 'italic', margin: '16px auto 0', lineHeight: 1.8, maxWidth: 480 }}>
          Subscribe to receive early access to festival specials, new arrivals, and members-only discounts directly to your inbox.
        </p>

        {done ? (
          <div style={{ marginTop: 44, padding: '24px 40px', border: '1px solid rgba(201,168,76,.4)', color: 'var(--gold)', fontFamily: "'Playfair Display',serif", fontSize: '1.2rem' }}>
            ✦ Welcome to the Shahi Rasoi family! ✦
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 0, marginTop: 44, maxWidth: 500, margin: '44px auto 0' }}>
            <input
              className="subscribe-input"
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
            <button onClick={handleSubmit} style={{
              padding: '18px 30px', background: 'linear-gradient(135deg,var(--gold),var(--gold-dark))',
              border: 'none', color: 'var(--deep)', fontFamily: "'Montserrat',sans-serif",
              fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', cursor: 'none',
              transition: 'all .3s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg,var(--gold-light),var(--gold))'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg,var(--gold),var(--gold-dark))'}
            >
              Subscribe ✦
            </button>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 36, flexWrap: 'wrap' }}>
          {['10% First Order Discount', 'Festival Early Access', 'No Spam, Ever'].map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 10, letterSpacing: 2, color: 'var(--muted)', textTransform: 'uppercase' }}>
              <span style={{ color: 'var(--gold)' }}>✦</span> {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
