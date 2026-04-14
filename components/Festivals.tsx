'use client'
import { useRef } from 'react'
import { useReveal } from './useReveal'

const festivals = [
  { img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80', icon: '🪔', occasion: 'Diwali Collection', name: 'Deepawali Hamper', desc: 'Premium assorted sweets & dry fruits in handcrafted gift boxes. Order 7 days in advance.' },
  { img: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&q=80', icon: '🌈', occasion: 'Holi Special', name: 'Gujiya & Thandai Box', desc: 'Traditional Holi sweets freshly prepared — gujiya, malpua, and cooling rose thandai.' },
  { img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80', icon: '💍', occasion: 'Wedding Season', name: 'Shaadi Mithai', desc: 'Custom-branded boxes for your wedding with over 50 varieties. Bulk orders welcome.' },
  { img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80', icon: '🌙', occasion: 'Eid Special', name: 'Eid Mubarak Box', desc: 'Handmade seviyan, shahi tukda & badam halwa — celebrating togetherness.' },
  { img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80', icon: '🎁', occasion: 'Corporate Gifting', name: 'Premium Gift Boxes', desc: 'Branded corporate gift hampers with custom message cards. MOQ 50 boxes.' },
]

export default function Festivals() {
  const { ref, visible } = useReveal()
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => { isDown.current = true; startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0); scrollLeft.current = scrollRef.current?.scrollLeft || 0 }
  const onMouseLeave = () => { isDown.current = false }
  const onMouseUp = () => { isDown.current = false }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current.offsetLeft || 0)
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5
  }

  return (
    <section id="festivals" style={{ background: 'linear-gradient(135deg,var(--dark) 0%,#1f1208 100%)', padding: '120px 0', overflow: 'hidden' }}>
      <div ref={ref} style={{ padding: '0 60px', marginBottom: 60, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge">Celebrate with us</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          Festival <em style={{ color: 'var(--gold)' }}>Specials</em>
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--muted)', fontStyle: 'italic', marginTop: 12, maxWidth: 500 }}>
          Every festival is sweeter with our handcrafted gift hampers and limited-edition collections.
        </p>
      </div>

      <div ref={scrollRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}
        style={{ display: 'flex', gap: 30, padding: '0 60px', overflowX: 'auto', scrollbarWidth: 'none', scrollSnapType: 'x mandatory', cursor: 'grab' }}>
        {festivals.map(f => (
          <div key={f.name} className="festival-card" style={{ flex: '0 0 340px', position: 'relative', overflow: 'hidden', scrollSnapAlign: 'start' }}>
            <img src={f.img} alt={f.name} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(13,11,8,.95) 0%,rgba(13,11,8,.2) 60%,transparent 100%)', padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>{f.occasion}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: 'var(--cream)', fontWeight: 700, marginBottom: 10 }}>{f.name}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
