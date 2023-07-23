import './globals.css'
import { Inter } from 'next/font/google'
import Scroll from '@/components/Scroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R.K. Sweets',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scroll/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
