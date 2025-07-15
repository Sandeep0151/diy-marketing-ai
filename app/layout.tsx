import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brainito',
  description: 'Brainito DIY Marketing Plan',
  generator: 'Brainito',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
