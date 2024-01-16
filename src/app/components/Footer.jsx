import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div  className='h-[70vh] bg-gray-100 relative top-56'>
        <div className='flex flex-row w-[90%] m-auto gap-14 pt-32'>
            <section className='flex flex-col w-[500px]'>
                <span className='inline-flex flex-row'><Image src='/vanguard.png' width={60} height={90} /><span className='pt-3 font-bold pl-2 text-3xl'>Vintage Vanguard</span></span>
                <p>With V.V., you can easily order amazing fashion accessories with a variety of different styles.</p>
                <p>Powered by Webflow</p>

            </section>
            <section className='w-[400px]'>
                <h2 className='text-2xl mt-4'>Contact Info</h2>
                <p className='mt-7'>7 oreta road, igbogbo, ikorodu, Lagos.</p>
                <h2 className='mt-7 text-xl font-bold'>Phone/Web:</h2>
                <p className='mt-5'><Link href='tel:+2348163901595'>08163901595</Link></p>
                <p><Link href=''>www.vintagevanguard.com</Link></p> 
                
                


            </section>
            <section className='w-[400px]'>
                <h2 className='text-2xl mt-4'>Information</h2>
                <p className='mt-7'>About</p>
                <p className='pt-3'>Contact</p>
                <p className='pt-3'>Style Guide</p>
                <p className='pt-3'>Change Log</p>
                <p className='pt-3'>License</p>


            </section>
            <section className='w-[400px]'>
                <h2 className='text-2xl mt-4'>Newsletter</h2>
                <input type="text" className='w-[100%] h-12 bg-transparent border border-gray-400 mt-5 text-center' placeholder='Enter Your Email'/>
                <button className='bg-black text-white w-[100%] h-12 mt-4 text-sm'>SUBSCRIBE </button>

            </section>

        </div>
        
    </div>
  )
}
