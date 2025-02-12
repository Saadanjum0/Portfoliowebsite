import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Farzam | Portfolio',
  description: 'UI/UX Developer & Digital Artist Portfolio',
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
