import React from 'react'
import styles from './main.module.css'
import Link from 'next/link'

export default function Category() {
  return (
    <div>

      <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-[200px] grid-rows-[220px_220px_220px] gap-6 w-[90%]  m-auto mt-14'>
        <Link href='/catalog/men' className={`rounded-lg ${styles.firstgrid}`}>
        <div className={` rounded-lg text-red-600 text-2xl pl-6 pt-28 font-bold`}>MEN</div>
        </Link>
        <Link href='/catalog/women' className={` rounded-lg ${styles.secondgrid}`}>
        <div className={` rounded-lg text-yellow-300 text-2xl pl-6 pt-28 font-bold`}>WOMEN</div>
        </Link>
        <Link href='/catalog/accessories' className={`rounded-lg ${styles.thirdgrid}`}>
        <div className={` rounded-lg text-green-600 text-2xl pl-6 pt-28 font-bold`}>ACCESSORIES</div>
        </Link>
          
      </div>
    
    </div>
  )
}
