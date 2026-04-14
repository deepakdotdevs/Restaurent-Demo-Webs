import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'City Hotel & Restaurant — Nuh, Haryana',
  description: 'City Hotel Restaurant & Lodge in Nuh, Haryana — luxury rooms, a signature restaurant, and warm hospitality.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
