import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Y Hoysala Patel - Freelance Developer',
  description: 'Freelance Developer | I Don\'t Just Code, I Create Value | The Candidate You Don\'t Want to Miss',
  keywords: 'full-stack developer, react, next.js, flutter, freelance developer, javascript, python',
  authors: [{ name: 'Y Hoysala Patel' }],
  openGraph: {
    title: 'Y Hoysala Patel - Freelance Developer',
    description: 'Freelance Developer specializing in React, Next.js, Flutter & cutting-edge tech',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
