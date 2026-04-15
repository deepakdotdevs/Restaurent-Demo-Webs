'use client'
import { useReveal } from './useReveal'

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', tall: true },
  { img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', wide: true },
  { img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80', tall: true },
  { img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80' },
  { img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80' },
]

export default function Gallery() {
  const { ref, visible } = useReveal()

  return (
    <section id="gallery" style={{ background: 'var(--dark)', padding: 'var(--space-3xl) 0' }}>
      <div ref={ref} style={{ padding: '0 var(--space-lg)', marginBottom: 'var(--space-3xl)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all .8s ease' }}>
        <div className="section-badge">Visual Story</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4vw,3.8rem)', color: 'var(--cream)' }}>
          A Feast for the <em style={{ color: 'var(--gold)' }}>Eyes</em>
        </h2>
      </div>

      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridAutoRows: 'clamp(150px, 40vw, 250px)',
        gap: '0.375rem',
        padding: '0 var(--space-lg)',
        maxWidth: '100%',
        overflow: 'hidden',
      }}>
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              gridRow: item.tall ? 'span 2' : 'span 1',
              gridColumn: item.wide ? 'span 2' : 'span 1',
              borderRadius: '0.5rem',
            }}
          >
            <img 
              src={item.img} 
              alt="" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }} 
            />
            <div
              className="gallery-item-overlay"
              style={{
                position: 'absolute', 
                inset: 0,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                background: 'rgba(0,0,0,0.3)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              🔍
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }

        @media(max-width:1100px){
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.25rem !important;
          }
        }
        @media(max-width:640px){
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.25rem !important;
            grid-auto-rows: clamp(120px, 40vw, 180px) !important;
          }
          .gallery-item[style*="span 2"] {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
