"use client"
import React from 'react'
import { myProducts } from './Shop'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './main.module.css'

export default function Dailydeals() {

    const dailyCard = myProducts.slice(0, 8).map(cloth => (
        <section key={cloth.id} className='flex flex-col place-items-center'>
            <Link href={`/products/${cloth.title.split(' ').join('-')}`}>
            <Image src={`/images/${cloth.image}.jpg`}  alt={cloth.title} width={200} height={200} className='text-center' />
            <div className='border-l-2 border-b-2 border-r-2 border-gray-300 px-5 py-5 text-sm'>
             <h2 className='text-center text-red-950'>{cloth.title}</h2>
             <h2 className='text-center text-red-500'>&#8358; {cloth.price}</h2>

            </div>
            </Link>

         


        </section>

    ))
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
    function handleScroll(){
      const element = document.getElementById('animatedElement')
      if (element) {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        setIsVisible(elementTop < windowHeight / 1.5)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={`w-4/5 m-auto mt-28 ${styles.section} ${isVisible && styles.visible }`} id='animatedElement'>
        <div className='flex flex-row w-[100%] justify-between'>
            <div className='md:text-4xl text-2xl '>Daily Deals</div>
            <div className='flex items-center'>
                <Link href='/catalog' className='relative w-40 text-right flex items-center'>
              <span className='border border-black  h-10 p-5 absolute left-2 rounded-[50%]'></span>
              <button className='absolute left-7 text-sm z-10 text-red-600 bg-white'>SHOP NOW</button>
                </Link>

            </div>
            
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 sm:grid-cols-2 gap-5 mt-9'>
        {dailyCard}
            
        </div>
    </div>
  )
}
