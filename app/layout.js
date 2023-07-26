import './globals.css'
import { Inter } from 'next/font/google'
import Scroll from '@/components/Scroll'
import logo from "../public/assets/logo.png"



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R.K. Sweets',
  description: 'Making your Occasions more sweeter',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="https://www.rksweets.in/assets/logo.png"/>
      </head>
      <Scroll/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

