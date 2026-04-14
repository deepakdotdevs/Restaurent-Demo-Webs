const items = ['Premium Sweets', 'Artisan Namkeens', 'Festival Specials', 'Home-style Curries', 'Wholesale Supply', 'Catering Services', 'Custom Orders']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{ background: 'linear-gradient(135deg,var(--gold-dark),var(--gold))', padding: '18px 0', overflow: 'hidden' }}>
      <div className="marquee-track" style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ padding: '0 50px', fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, color: 'var(--deep)', display: 'flex', alignItems: 'center', gap: 20 }}>
            {item} <span style={{ opacity: .5 }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
