'use client'
import { useReveal } from './useReveal'

const cards = [
  {
    icon: '🏭',
    title: 'Wholesale Enquiry',
    desc: 'Looking to stock our products in your store? We supply over 200 retail outlets across Haryana. Get premium products at competitive wholesale rates with flexible MOQ and payment terms. Our dedicated B2B team ensures smooth fulfilment.',
    btn: 'Start Wholesale Partnership',
    dir: 'left' as const,
  },
  {
    icon: '👨‍🍳',
    title: 'Careers at Shahi Rasoi',
    desc: 'Join a team that values tradition, creativity, and growth. We\'re always looking for passionate chefs, delivery executives, and retail staff who share our love for authentic Indian flavours. Grow with a brand that cares.',
    btn: 'Explore Career Opportunities',
    dir: 'right' as const,
  },
]

function EnquiryCard({ c }: { c: typeof cards[0] }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className="enquiry-card"
      style={{
        padding: '60px 50px',
        border: '1px solid rgba(201,168,76,.2)',
        transition: 'border-color .4s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : c.dir === 'left' ? 'translateX(-40px)' : 'translateX(40px)',
        transitionProperty: 'opacity, transform, border-color',
        transitionDuration: '.8s, .8s, .4s',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,.5)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,.2)'}
    >
      <div style={{ fontSize: '3.5rem', marginBottom: 24 }}>{c.icon}</div>
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: 'var(--cream)', marginBottom: 16 }}>{c.title}</h3>
      <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 30 }}>{c.desc}</p>
      <button className="enquiry-action-btn">{c.btn} →</button>
    </div>
  )
}

export default function Enquiry() {
  const { ref, visible } = useReveal()

  return (
    <section id="enquiry" style={{ padding: '120px 60px', background: 'var(--deep)' }}>
      <div ref={ref} style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 0', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>Partner with Us</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Grow With <em style={{ color: 'var(--gold)' }}>Shahi Rasoi</em>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 60 }} className="enquiry-grid-resp">
        {cards.map(c => <EnquiryCard key={c.title} c={c} />)}
      </div>

      <style>{`@media(max-width:900px){.enquiry-grid-resp{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
