'use client'
import { useReveal } from './useReveal'

const locItems = [
  { icon: '🏠', label: 'Address', value: 'City Hotel Restaurant & Lodge,\nNuh, Haryana 122107, India' },
  { icon: '🕐', label: 'Opening Hours', value: 'Mon – Sat: 9:00 AM – 9:00 PM\nSunday: 10:00 AM – 7:00 PM', extra: 'Open on all festivals ✦' },
  { icon: '📞', label: 'Contact', value: '+91 98765 43210\nshahirasoi@email.com' },
  { icon: '🚚', label: 'Delivery', value: 'Free delivery in Sonipat above ₹500\nPan-India shipping available' },
]

export default function Location() {
  const { ref: leftRef, visible: leftVis } = useReveal()
  const { ref: rightRef, visible: rightVis } = useReveal()
  const { ref: headRef, visible: headVis } = useReveal()

  return (
    <section id="location" style={{ padding: '120px 60px', background: 'var(--dark)' }}>
      <div ref={headRef} style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 0', opacity: headVis ? 1 : 0, transform: headVis ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>Find Us</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Visit Our <em style={{ color: 'var(--gold)' }}>Store</em>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginTop: 60 }} className="location-grid-resp">
        {/* Real Google Map */}
<div
  ref={leftRef}
  style={{
    height: 420,
    border: '1px solid rgba(201,168,76,.2)',
    overflow: 'hidden',
    borderRadius: 12,
    position: 'relative',
    opacity: leftVis ? 1 : 0,
    transform: leftVis ? 'none' : 'translateX(-40px)',
    transition: 'all .8s ease',
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.0935878867394!2d76.9993886!3d28.113178700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d333124230389%3A0x40d58a5d16c29691!2sCity%20Hotel%20Restaurant%20%26%20Lodge!5e0!3m2!1sen!2sin!4v1776149028831!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        {/* Info */}
        <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: 28, opacity: rightVis ? 1 : 0, transform: rightVis ? 'none' : 'translateX(40px)', transition: 'all .8s ease' }}>
          {locItems.map(item => (
            <div key={item.label} className="loc-item" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: 24, border: '1px solid rgba(201,168,76,.1)' }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--gold)', flexShrink: 0, marginTop: 4 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 3, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.value}</div>
                {item.extra && <div style={{ color: 'var(--gold)', fontSize: '.9rem', marginTop: 4 }}>{item.extra}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:1100px){.location-grid-resp{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  )
}
