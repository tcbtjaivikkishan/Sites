import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/server/Footer'
import ReduxProvider from "../store/ReduxProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TCBT JAIVIK KISHAN',
  description: 'प्राकृतिक खेती के लिए TCBT तकनीक',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  )
}
