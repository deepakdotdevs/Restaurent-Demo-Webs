'use client'
import { useReveal } from './useReveal'

const socialImages = [
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
  'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80',
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
]

const socialLinks = [
  { icon: '📸', label: 'Instagram' },
  { icon: '👍', label: 'Facebook' },
  { icon: '▶', label: 'YouTube' },
  { icon: '💬', label: 'WhatsApp' },
  { icon: '🐦', label: 'Twitter / X' },
]

export default function Social() {
  const { ref, visible } = useReveal()
  const { ref: feedRef, visible: feedVis } = useReveal()

  return (
    <section id="social" style={{ background: 'var(--dark)', textAlign: 'center', padding: '100px 60px' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>Social Gallery</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Follow Our <em style={{ color: 'var(--gold)' }}>Journey</em>
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--muted)', fontStyle: 'italic', margin: '12px auto 0' }}>
          Tag us @ShahiRasoi and get featured on our page.
        </p>
      </div>

      {/* Feed grid */}
      <div ref={feedRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 6, margin: '60px 0 50px' }}
        className="social-feed-resp"
      >
        {socialImages.map((img, i) => (
          <div key={i} className="social-cell" style={{ aspectRatio: '1', overflow: 'hidden', position: 'relative', opacity: feedVis ? 1 : 0, transform: feedVis ? 'none' : 'translateY(30px)', transition: `all .6s ease ${i * .1}s` }}>
            <img src={img} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <div className="social-cell-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>📸</div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
        {socialLinks.map(s => (
          <a key={s.label} href="#" className="social-link-btn">
            <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>

      <style>{`
        @media(max-width:1100px){.social-feed-resp{grid-template-columns:repeat(3,1fr)!important;}}
        @media(max-width:640px){.social-feed-resp{grid-template-columns:repeat(2,1fr)!important;}}
      `}</style>
    </section>
  )
}
