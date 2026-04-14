'use client'
import { useReveal } from './useReveal'

const arrivals = [
  { img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', tag: '🔥 New', tagColor: 'linear-gradient(90deg,var(--gold),var(--gold-dark))', name: 'Royal Gulab Jamun', desc: 'Saffron-infused, melt-in-mouth perfection dipped in rose-cardamom syrup.', price: '₹180', unit: '500g' },
  { img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80', tag: '⭐ Hot', tagColor: 'linear-gradient(90deg,#C0392B,#8B1A1A)', name: 'Achari Mix Namkeen', desc: 'Tangy pickle-spiced blend of lentils, peanuts & sev — utterly addictive.', price: '₹140', unit: '250g' },
  { img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80', tag: '✨ Special', tagColor: 'linear-gradient(90deg,var(--gold),var(--gold-dark))', name: 'Pistachio Barfi', desc: 'Layers of pure khoya & crushed pistachios with a hint of silver leaf.', price: '₹320', unit: '250g' },
  { img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80', tag: '🌱 Pure Veg', tagColor: 'linear-gradient(90deg,#2d7a2d,#1a5c1a)', name: 'Shahi Paneer Platter', desc: 'Rich Mughlai gravy, fresh homemade paneer, served with golden paratha.', price: '₹280', unit: 'plate' },
]

function ArrivalCard({ a, delay }: { a: typeof arrivals[0]; delay: number }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className="arrival-card" style={{
      background: 'var(--mid)', position: 'relative', overflow: 'hidden',
      transition: 'transform .4s ease, box-shadow .4s ease',
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)',
      transitionDelay: `${delay}s`,
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-10px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 30px 80px rgba(0,0,0,.5)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
    >
      <img className="arrival-img" src={a.img} alt={a.name} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: 18, left: 0, background: a.tagColor, color: 'var(--deep)', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '6px 18px 6px 14px', clipPath: 'polygon(0 0,100% 0,92% 100%,0 100%)' }}>{a.tag}</div>
      <div style={{ padding: '22px 22px 28px' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: 'var(--cream)', marginBottom: 8 }}>{a.name}</div>
        <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>{a.desc}</div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.4rem', color: 'var(--gold)', fontStyle: 'italic' }}>
          {a.price} <span style={{ fontSize: '.85rem', color: 'var(--muted)', fontStyle: 'normal', fontFamily: "'Montserrat',sans-serif" }}>/ {a.unit}</span>
        </div>
      </div>
      <div className="arrival-hover" style={{ position: 'absolute', bottom: -60, left: 0, right: 0, background: 'linear-gradient(to top,rgba(201,168,76,.95),rgba(139,105,20,.9))', padding: 18, textAlign: 'center', fontSize: 10, letterSpacing: 3, color: 'var(--deep)', fontWeight: 700, textTransform: 'uppercase' }}>
        Order Now →
      </div>
    </div>
  )
}

export default function Arrivals() {
  const { ref, visible } = useReveal()
  return (
    <section id="arrivals" style={{ padding: 'var(--space-3xl) var(--space-lg)', background: 'var(--deep)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge">Fresh & New</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          New <em style={{ color: 'var(--gold)' }}>Arrivals</em>
        </h2>
      </div>
      <div className="arrivals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: 'var(--space-3xl)' }}>
        {arrivals.map((a, i) => <ArrivalCard key={a.name} a={a} delay={i * 0.1} />)}
      </div>
      <style>{`@media(max-width:1100px){.arrivals-grid-resp{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:640px){.arrivals-grid-resp{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
