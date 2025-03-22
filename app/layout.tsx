import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sirius Funding',
  description: 'Your Dedicated Funding Platform on Stellar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}