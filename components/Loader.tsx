'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'var(--deep)', zIndex: 99990,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        transition: 'opacity .8s ease',
      }}
    >
      <div className="loader-logo">शाही रसोई</div>
      <div className="loader-line" />
      <div className="loader-sub">Legacy of Taste · Est. 1998</div>
    </div>
  )
}
