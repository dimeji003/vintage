"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { myProducts } from '@/app/components/Shop'
import ProductNav from '../ProductNav'
import ProductNav2 from '@/app/components/ProductNav2'

const pants = myProducts.filter(cloth => cloth.type == 'pants')

const pantGrp = pants.map(cloth => (
    <section key={cloth.id} className='flex flex-col place-items-center bg-white rounded-xl'>
        <Link href={`/products/${cloth.title.split(' ').join('-')}`} title= {`${cloth.title}`}>
        <Image src={`/images/${cloth.image}.jpg`} alt={cloth.title} width={200} height={200} className='text-center'/>
        <div className='border-l border-gray-300 border-r border-b px-3 py-3'>
        <h2 className=' text-center'>{cloth.title}</h2>
        <p className='text-center text-red-600'>{cloth.price}</p>

        </div>
        </Link>
    </section>
))
export default function page() {
  return ( 
    <div>
      <ProductNav2 />

      <div className='grid md:grid-cols-3 grid-cols-2 gap-[20px] w-4/5 m-auto mt-11'>{pantGrp}</div>
    </div>
  )
}