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
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridAutoRows: '200px',
        gap: '0.375rem',
        padding: '0 var(--space-lg)',
      }}>
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{
              overflow: 'hidden',
              position: 'relative',
              cursor: 'none',
              gridRow: item.tall ? 'span 2' : 'span 1',
              gridColumn: item.wide ? 'span 2' : 'span 1',
            }}
          >
            <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div
              className="gallery-item-overlay"
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}
            >
              🔍
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:1100px){
          .gallery-masonry-resp{grid-template-columns:repeat(2,1fr)!important;padding:0 30px!important;}
        }
        @media(max-width:640px){
          .gallery-masonry-resp{grid-template-columns:repeat(2,1fr)!important;padding:0 16px!important;}
          .gallery-masonry-resp > div[style*="span 2"]{grid-column:span 1!important;}
        }
      `}</style>
    </section>
  )
}
