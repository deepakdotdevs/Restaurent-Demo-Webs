'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const ringX = useRef(0)
  const ringY = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let rafId: number
    const animate = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12
      ringY.current += (mouseY.current - ringY.current) * 0.12
      ring.style.left = ringX.current + 'px'
      ring.style.top = ringY.current + 'px'
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => {
      cursor.style.width = '10px'
      cursor.style.height = '10px'
      ring.style.width = '70px'
      ring.style.height = '70px'
    }
    const onLeave = () => {
      cursor.style.width = '18px'
      cursor.style.height = '18px'
      ring.style.width = '44px'
      ring.style.height = '44px'
    }

    const addHover = () => {
      document.querySelectorAll('button,a,.arrival-card,.gallery-item,.social-cell,.festival-card').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHover()
    const mo = new MutationObserver(addHover)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed', width: 18, height: 18, borderRadius: '50%',
          background: 'var(--gold)', pointerEvents: 'none', zIndex: 99999,
          transform: 'translate(-50%,-50%)',
          transition: 'width .2s, height .2s, background .2s',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', width: 44, height: 44, borderRadius: '50%',
          border: '1.5px solid var(--gold-light)', pointerEvents: 'none',
          zIndex: 99998, transform: 'translate(-50%,-50%)',
          transition: 'width .35s cubic-bezier(.23,1,.32,1), height .35s cubic-bezier(.23,1,.32,1)',
          opacity: .7,
        }}
      />
    </>
  )
}
