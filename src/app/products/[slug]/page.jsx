"use client"
import ProductNav from '@/app/catalog/ProductNav'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { myProducts } from '@/app/components/Shop'

export default function page(props) {
    const productInfo = myProducts.find(cloth => cloth.title.split(' ').join('-') == props.params.slug)
    const related = myProducts.filter(cloth => cloth.type == productInfo.type && cloth.title !== productInfo.title )

    const relatedProducts = related.map(cloth => (
        <section key={cloth.id} className='shadow-xl '>
            <Link href={`/products/${cloth.title.split(' ').join('-')}`}>
            <Image src={`/images/${cloth.image}.jpg`} alt={cloth.title} width={200} height={200}/>
            <h2 className='text-center pt-2'>{cloth.title}</h2>
            <h2 className='text-center pb-2'> &#8358; {cloth.price}</h2>
            </Link>
        </section>
    ))
  return (
    <div>
        <ProductNav />
     <div className='md:relative md:top-28 md:w-[90%] w-[90%] m-auto place-content-center'>

     <div className='md:grid md:grid-cols-[1fr_2fr] md:gap-32 flex flex-col items-center  md:w-[90%] md:m-auto '>
        <div>
            <Image src={`/images/${productInfo.image}.jpg`} alt={productInfo.title} width={350} height={350}/>
        </div>
        <div>
        
            <h1 className='md:text-3xl md:text-red-600 md:font-bold'>{productInfo.title}</h1>
            <p className='md:text-2xl'>&#8358;{productInfo.price}</p>
            <p>{productInfo.type}</p>
            <h2 className='md:mt-12 md:pb-2'>Size</h2>
            <button className='md:bg-gray-300 md:px-1 md:py-1 md:focus:bg-red-950 md:focus:text-white md:text-xs md: w-9 md:h-9 '>XS</button><button className='bg-gray-300 p-2 ml-2  focus:bg-red-950 focus:text-white text-xs  w-9 h-9'>S</button><button className='bg-gray-300 p-2 ml-2  focus:bg-red-950 focus:text-white text-xs w-9 h-9'>M</button><button className='bg-gray-300 p-1 ml-2  focus:bg-red-950 focus:text-white text-xs w-9 h-9'>L</button><button className='bg-gray-300 p-1 ml-2 text-xs focus:bg-red-950 focus:text-white  w-9 h-9'>XL</button><button className='bg-gray-300 p-1 ml-2 focus:bg-red-950 text-xs focus:text-white  w-9 h-9'>XXL</button>
            <h2 className='md:mt-8'>Quantity</h2>
            <input type="number" name='num' id='num' min={1} max={30} className='md:h-7 md:w-12 md:border-2 md:border-gray-400' /><br />
            <button className='text-center bg-red-600 w-40 p-4 mt-2'>Add to Cart</button>
        </div>
    </div>

        

        
     

        <div className='mt-[70px]'>
            <h2 className='text-2xl text-red-600'>Related Products</h2>
            <div className='grid grid-cols-5 gap-11 rounded-sm '>
                {relatedProducts}
            </div>
        </div>
    </div>
    
    </div>
  )
}
