import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "V-Store",
  description: "This is my Store",
  thumbnail: "https://www.blogtyrant.com/wp-content/uploads/2019/07/how-to-start-an-online-store-min.png",
  openGraph: {
    
    title: "V-Store",
    description: "This is my Store",
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
