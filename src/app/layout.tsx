import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/CustomComponent/Footer'
import Navbar from '@/components/CustomComponent/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Machine Learning with AWS Cloud',
  description: 'Machine Learning with AWS Cloud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
     
        {/* <Footer /> */}
      </body>
    </html>
  )
}
