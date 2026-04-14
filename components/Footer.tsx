const menuLinks = ['Sweets & Mithai', 'Namkeens', 'Curries & Thali', 'Snacks', 'Beverages', 'Gift Hampers']
const quickLinks = ['Our Story', 'Festival Specials', 'New Arrivals', 'Wholesale', 'Careers', 'Gallery']
const contactLinks = ['📍 Sonipat, Haryana', '📞 +91 98765 43210', '✉ shahirasoi@email.com', '🚚 Free delivery ₹500+', '⏰ Open Daily']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid rgba(201,168,76,.15)', padding: '80px 60px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, marginBottom: 60 }} className="footer-grid-resp">
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: 'var(--gold)', letterSpacing: 3, marginBottom: 18 }}>
            Shahi <em>Rasoi</em>
          </div>
          <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.9, maxWidth: 280, marginBottom: 28 }}>
            Crafting authentic Indian sweets and namkeens since 1998. A legacy of taste, tradition, and love — delivered fresh to your door.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['📸', '👍', '💬', '▶'].map(icon => (
              <a key={icon} href="#" className="social-link-btn" style={{ padding: '10px 16px', fontSize: '1rem' }}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,.2)' }}>Our Menu</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {menuLinks.map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,.2)' }}>Quick Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {quickLinks.map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 9, letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,.2)' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contactLinks.map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: 1 }}>
          © 2024 Shahi Rasoi. All Rights Reserved. Made with ❤️ in Haryana.
        </div>
        <div style={{ display: 'flex', gap: 30 }}>
          {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){.footer-grid-resp{grid-template-columns:1fr 1fr!important;gap:40px!important;}}
        @media(max-width:640px){.footer-grid-resp{grid-template-columns:1fr!important;}}
      `}</style>
    </footer>
  )
}
