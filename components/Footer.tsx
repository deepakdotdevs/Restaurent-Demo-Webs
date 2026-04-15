const menuLinks = ['Sweets & Mithai', 'Namkeens', 'Curries & Thali', 'Snacks', 'Beverages', 'Gift Hampers']
const quickLinks = ['Our Story', 'Festival Specials', 'New Arrivals', 'Wholesale', 'Careers', 'Gallery']
const contactLinks = ['📍 Sonipat, Haryana', '📞 +91 98765 43210', '✉ shahirasoi@email.com', '🚚 Free delivery ₹500+', '⏰ Open Daily']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid rgba(201,168,76,.15)', padding: 'clamp(2rem, 8vw, 5rem) clamp(1rem, 5%, 3.75rem) clamp(1rem, 4vw, 2.5rem)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(1.5rem, 5vw, 3.75rem)', marginBottom: 'clamp(2rem, 6vw, 3.75rem)' }} className="footer-grid-resp">
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--gold)', letterSpacing: 3, marginBottom: 'clamp(1rem, 2vw, 1.125rem)' }}>
            Shahi <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Rasoi</em>
          </div>
          <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 11px)', color: 'var(--muted)', lineHeight: 1.9, maxWidth: 280, marginBottom: 'clamp(1rem, 3vw, 1.75rem)' }}>
            Crafting authentic Indian sweets and namkeens since 1998. A legacy of taste, tradition, and love — delivered fresh to your door.
          </p>
          <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1rem)', flexWrap: 'wrap' }}>
            {['📸', '👍', '💬', '▶'].map(icon => (
              <a key={icon} href="#" className="social-link-btn" style={{ padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '2.75rem' }}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <div style={{ fontSize: 'clamp(0.7rem, 1.2vw, 9px)', letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', paddingBottom: 'clamp(0.75rem, 1.5vw, 0.75rem)', borderBottom: '1px solid rgba(201,168,76,.2)' }}>Our Menu</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 0.75rem)' }}>
            {menuLinks.map(l => <a key={l} href="#" className="footer-link" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', minHeight: '1.5rem', display: 'flex', alignItems: 'center' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>{l}</a>)}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ fontSize: 'clamp(0.7rem, 1.2vw, 9px)', letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', paddingBottom: 'clamp(0.75rem, 1.5vw, 0.75rem)', borderBottom: '1px solid rgba(201,168,76,.2)' }}>Quick Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 0.75rem)' }}>
            {quickLinks.map(l => <a key={l} href="#" className="footer-link" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', minHeight: '1.5rem', display: 'flex', alignItems: 'center' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>{l}</a>)}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 'clamp(0.7rem, 1.2vw, 9px)', letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', paddingBottom: 'clamp(0.75rem, 1.5vw, 0.75rem)', borderBottom: '1px solid rgba(201,168,76,.2)' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 0.75rem)' }}>
            {contactLinks.map(l => <a key={l} href="#" className="footer-link" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', minHeight: '1.5rem', display: 'flex', alignItems: 'center' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>{l}</a>)}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(201,168,76,.1)', paddingTop: 'clamp(1.5rem, 3vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'clamp(1rem, 2vw, 1rem)' }}>
        <div style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', color: 'var(--muted)', letterSpacing: 1, minHeight: '1.5rem', display: 'flex', alignItems: 'center' }}>
          © 2024 Shahi Rasoi. All Rights Reserved. Made with ❤️ in Haryana.
        </div>
        <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 1.875rem)', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
            <a key={l} href="#" className="footer-link" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', minHeight: '1.5rem', display: 'flex', alignItems: 'center' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cream)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}>{l}</a>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){.footer-grid-resp{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:768px){
          .footer-grid-resp{grid-template-columns:1fr!important;}
          footer {
            padding-left: clamp(1rem, 4%, 2rem) !important;
            padding-right: clamp(1rem, 4%, 2rem) !important;
          }
        }
        @media(max-width:480px){
          .footer-grid-resp{grid-template-columns:1fr!important;}
        }
      `}</style>
    </footer>
  )
}
