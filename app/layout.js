import './globals.css'
import { Inter } from 'next/font/google'
import Scroll from '@/components/Scroll'
import logo from "../public/assets/logo.png"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R.K. Sweets',
  description: '',
  image: logo.src,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scroll/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

