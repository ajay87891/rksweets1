import './globals.css'
import { Inter } from 'next/font/google'
import Scroll from '@/components/Scroll'
import logo from "../public/assets/logo.png"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R.K. Sweets',
  description: 'Making your Occasions more sweeter',
  openGraph: {
    image:"https://www.rksweets.in/_next/static/media/logo.0581772b.png"
    
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scroll/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

