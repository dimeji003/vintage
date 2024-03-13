"use client"
import React, { useEffect, useState } from 'react'
import styles from './main.module.css'
import Link from 'next/link'


export default function Category() {
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
    <div className={` ${styles.section} ${isVisible && styles.visible} py-6`} id='animatedElement'>

      <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-[200px] grid-rows-[220px_220px_220px] gap-6 w-[90%]  m-auto mt-14'>
        <Link href='/catalog/men' className={`rounded-lg border-4 border-red-600 ${styles.firstgrid}`}>
        <div className={` rounded-lg text-red-600 text-2xl pl-6 pt-28 font-bold`}>MEN</div>
        </Link>
        <Link href='/catalog/women' className={`border-4 border-yellow-300 rounded-lg ${styles.secondgrid}`}>
        <div className={` rounded-lg text-yellow-300 text-2xl pl-6 pt-28 font-bold`}>WOMEN</div>
        </Link>
        <Link href='/catalog/accessories' className={`border-4 border-green-600 rounded-lg ${styles.thirdgrid}`}>
        <div className={` rounded-lg text-green-600 text-2xl pl-6 pt-28 font-bold`}>ACCESSORIES</div>
        </Link>
          
      </div>
    
    </div>
  )
}
