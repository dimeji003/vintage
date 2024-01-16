import Image from 'next/image'
import Main from './components/Main'
import Category from './components/Category'
import Footer from './components/Footer'
import Dailydeals from './components/Dailydeals'
import Video from './components/Video'
import Newarrivals from './components/Newarrivals'
import Assurance from './components/Assurance'
import Testimonials from './components/Testimonials'


export default function Home() {
  return (
    <main>
      <Main />
      <Category />
      <Dailydeals />
      <Video />
      <Newarrivals />
      <Assurance />
      <Testimonials />
      
      
    </main>
   
  )
}
