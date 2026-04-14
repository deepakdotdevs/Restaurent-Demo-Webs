'use client'
import { useReveal } from './useReveal'

const reviews = [
  { text: 'The kesar peda literally melts before you blink. I\'ve been ordering for Diwali every year and they never disappoint. Pure ghee, pure love.', name: 'Priya Sharma', location: 'Sonipat, Haryana', initial: 'P', stars: 5 },
  { text: 'Ordered 50 boxes for our company Diwali gifting. Shahi Rasoi handled everything beautifully — custom branding, on-time delivery. Exceptional service.', name: 'Rajesh Gupta', location: 'Delhi NCR', initial: 'R', stars: 5 },
  { text: 'The achari mix namkeen is absolutely lethal — I can\'t stop eating it! And the packaging is so premium, it\'s like gifting a piece of art.', name: 'Aarav Malhotra', location: 'Panipat, Haryana', initial: 'A', stars: 5 },
]

function ReviewCard({ r, delay }: { r: typeof reviews[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className="review-card"
      style={{
        padding: '40px 36px',
        border: '1px solid rgba(201,168,76,.15)',
        background: 'var(--mid)',
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px)',
        transition: `opacity .8s ease ${delay}s, transform .8s ease ${delay}s, border-color .3s`,
      }}
    >
      <div style={{
        position: 'absolute', top: -20, left: 36,
        fontFamily: "'Playfair Display',serif", fontSize: '5rem',
        color: 'var(--gold)', lineHeight: 1, opacity: .3,
      }}>"</div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        {Array.from({ length: r.stars }).map((_, i) => (
          <span key={i} style={{ color: 'var(--gold)', fontSize: '.9rem' }}>⭐</span>
        ))}
      </div>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.8, marginBottom: 24 }}>
        {r.text}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: 'linear-gradient(135deg,var(--gold-dark),var(--gold))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: 'var(--deep)', fontWeight: 700,
        }}>{r.initial}</div>
        <div>
          <div style={{ fontSize: '.85rem', color: 'var(--cream)', fontWeight: 500 }}>{r.name}</div>
          <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3, letterSpacing: 1 }}>📍 {r.location}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const { ref, visible } = useReveal()

  return (
    <section id="reviews" style={{ padding: '120px 60px', background: 'var(--deep)' }}>
      <div ref={ref} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 0', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>What People Say</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Loved by <em style={{ color: 'var(--gold)' }}>Thousands</em>
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--muted)', fontStyle: 'italic', marginTop: 12, lineHeight: 1.8 }}>
          Real experiences from our cherished patrons across Haryana and beyond.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30, marginTop: 60 }} className="reviews-grid-resp">
        {reviews.map((r, i) => <ReviewCard key={r.name} r={r} delay={i * 0.15} />)}
      </div>

      <style>{`@media(max-width:1100px){.reviews-grid-resp{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
