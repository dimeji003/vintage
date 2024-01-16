import React from 'react'
import styles from './main.module.css'
import Link from 'next/link'

export default function Category() {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-[200px] grid-rows-[220px_220px_220px] gap-6 w-[90%] m-auto mt-14'>
      <Link href='/catalog/men' className={`rounded-lg ${styles.firstgrid}`}>
      <div className={` rounded-lg text-red-600 text-2xl pl-6 pt-28 font-bold`}>MEN</div>
      <div className='pl-60'>
       <Link href='/catalog' className='relative w-40 text-right flex items-center'>
              <span className='border border-black  h-10 p-5 absolute left-2  rounded-[50%]'></span>
              <button className='absolute left-7 text-sm z-10 text-red-600'>SHOP NOW</button>
        </Link>
      </div>
         
      
      
      </Link>
      <Link href='/catalog/women' className={` rounded-lg ${styles.secondgrid}`}>
      <div className={` rounded-lg text-yellow-300 text-2xl pl-6 pt-28 font-bold`}>WOMEN</div>
      </Link>
      <Link href='/catalog/accessories' className={`rounded-lg ${styles.thirdgrid}`}>
      <div className={` rounded-lg text-green-600 text-2xl pl-6 pt-28 font-bold`}>ACCESSORIES</div>
      </Link>
        
    </div>
  )
}
