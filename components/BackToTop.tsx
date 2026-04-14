'use client'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 40, right: 40,
        width: 50, height: 50,
        background: 'linear-gradient(135deg,var(--gold),var(--gold-dark))',
        color: 'var(--deep)', border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', cursor: 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all .3s ease',
        zIndex: 900,
        boxShadow: '0 8px 30px rgba(201,168,76,.3)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = visible ? 'translateY(0)' : 'translateY(20px)'}
    >
      ↑
    </button>
  )
}
