import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "V-Store",
  description: "Shopping",
  openGraph: {
    
    title: "V-Store",
    description: "Your 24/7 shopping place",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
