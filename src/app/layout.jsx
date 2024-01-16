import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Vintage Vanguard',
  description: 'Where bold style meets individuality.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <div className='min-h-screen'>
        {children}

        </div>
        <Footer />
        
        </body>
    </html>
  )
}
