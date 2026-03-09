import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfairDisplayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'NickXmagic | Illusionist & Mentalist',
  description: 'Experience the impossible. NickXmagic delivers world-class magic, mentalism, and illusion for private events, corporate galas, and stage shows.',
}

export const viewport = {
  themeColor: '#0a0a0f',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${playfairDisplayFont.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
