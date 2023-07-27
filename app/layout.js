import './globals.css'
import { Inter } from 'next/font/google'
import Scroll from '@/components/Scroll'




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
      <link rel="icon" type="image/x-icon" href="https://www.rksweets.in/favicon.ico" />
      </head>
      <Scroll/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

