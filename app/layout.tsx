import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'City Hotel & Restaurant — Nuh, Haryana',
  description: 'City Hotel Restaurant & Lodge in Nuh, Haryana — luxury rooms, a signature restaurant, and warm hospitality.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>{children}</body>
    </html>
  )
}
