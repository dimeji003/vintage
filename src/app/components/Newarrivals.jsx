"use client"
import React from 'react'
import { myProducts } from './Shop'
import Link from 'next/link'
import Image from 'next/image'

export default function Newarrivals() {
    const newArrivals= myProducts.slice(0,4).map(cloth => (
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
  return (
    <div className='bg-gray-100'>
     <div className='pt-32 w-4/5 m-auto pb-9'>
        <div className='text-center'>
            <h2 className='text-xs text-red-600'>ONLY THE BEST</h2>
            <h1 className='text-5xl pt-5'>NEW ARRIVALS</h1>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 mt-6'> 
                {newArrivals}
            </div>
        </div>
     </div>

    </div>
  )
}
