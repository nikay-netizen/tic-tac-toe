
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
  description: 'A simple Tic Tac Toe game built with Next.js, Tailwind CSS, and shadcn/ui.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
