import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Video from '../components/Video'

export default function page() {
  return (
    <div>
      <div>
        <div className={styles.about}>
          <h1 className='text-white md:text-3xl text-xl md:pt-80 pt-96 pl-5'>Home - About Us</h1>

        </div>
        <div className='py-36'>
          
        <div className='lg:w-[55%] w-[90%] m-auto '><Image src='/blogpost1.jpg' alt='' height={300} width={700} className='rounded-xl '/></div>
        <div className='flex flex-col items-center gap-3 lg:w-[80%] w-[90%] m-auto pt-11'>
        <h2 className='text-red-600 text-lg md:text-xl'>Welcome to Vintage Vanguard</h2>
        <h1 className='md:text-4xl text-2xl'>Our Journey to Dreams</h1>
        <p className='text-center'>Pinaf is a plant eCommerce template with a clean and modern design. It was created to help you build your dream online store. With Pinaf, you can start planning for tomorrow today to take the first step toward the lifestyle of your dreams</p>
        <span className='flex flex-row gap-3 pt-9'><p>Lawal Oladimeji</p> - <em className='text-gray-500'>Ceo Vintage Vanguard</em></span>

        </div>
        <Video />
        <div className='w-[80%] m-auto py-16'>
          <h1 className='text-center text-3xl'>Our Expert Team</h1>
          <p className='text-gray-600 md:w-[60%] w-[95%] text-center text-sm pt-5 m-auto'>We have a team of experts who are passionate about helping our clients reach their full potential. Contact us today to learn more.</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-14 py-14'>
            <div>
              <Image src='/background4.webp' height={200} width={500} />
              <div className='p-4 rounded-b-xl bg-red-800 text-white flex flex-col items-center'>
                <h1 className='text-3xl'>Orlando Wagner</h1>
                <em>CO Vintage Vanguard</em>
              </div>
            </div>
            <div>
            <Image src='/background4.webp' height={200} width={500} />
              <div className='p-4 rounded-b-xl bg-red-800 text-white flex flex-col items-center'>
                <h1 className='text-3xl'>Orlando Wagner</h1>
                <em>CO Vintage Vanguard</em>
              </div>
            </div>
            <div>
            <Image src='/background4.webp' height={200} width={500} />
              <div className='p-4 rounded-b-xl bg-red-800 text-white flex flex-col items-center'>
                <h1 className='text-3xl'>Orlando Wagner</h1>
                <em>CO Vintage Vanguard</em>
              </div>
            </div>
          </div>
        </div>
        
        
        </div>

      </div>
        
    </div>
  )
}
