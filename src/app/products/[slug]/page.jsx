"use client"
import ProductNav from '@/app/catalog/ProductNav'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { myProducts } from '@/app/components/Shop'
import { FaArrowLeftLong } from "react-icons/fa6";


export default function page(props) {
    
    const productInfo = myProducts.find(cloth => cloth.title.split(' ').join('-') == props.params.slug)
    const related = myProducts.filter(cloth => cloth.type == productInfo.type && cloth.title !== productInfo.title )

    const relatedProducts = related.map(cloth => (
        <section key={cloth.id} className='rounded-sm flex flex-col place-content-center items-center '>
            <Link className='flex flex-col items-center md:items-start' href={`/products/${cloth.title.split(' ').join('-')}`}>
            <Image src={`/images/${cloth.image}.jpg`} alt={cloth.title} width={150} height={150}/>
            <h2 className='text-center pt-2'>{cloth.title}</h2>
            <h2 className='text-center pb-2 text-red-700'> &#8358; {cloth.price}</h2>
            </Link>
        </section>
    ))
  return (
    <div className=''>
        <FaArrowLeftLong className='absolute left-9 top-28 text-red-600 text-3xl cursor-pointer'/>
        
     <div className='   m-auto place-content-center md:pt-3 '>

     <div className='md:grid md:grid-cols-2 lg:gap-11 md:gap-9 flex flex-col items-center place-content-center  lg:w-[70%] md:w-[70%] md:m-auto py-28 '>
        <div>
            <Image src={`/images/${productInfo.image}.jpg`} alt={productInfo.title} width={250} height={220} className=''/>
        </div>
        <div className='flex flex-col md:items-start items-center gap-2'>
        
            <h1 className='  text-black pt-5 lg:pt-0 text-2xl md:font-bold'>{productInfo.title}</h1>
            <p className=' text-red-600'>&#8358;{productInfo.price}</p>
            <em>({productInfo.type})</em>
            <h2 className=' text-red-600'>Size</h2>
            <div className='flex flex-row'><button className='md:bg-gray-300 bg-gray-300 md:px-1 md:py-1 md:focus:bg-red-950 md:focus:text-white md:text-xs md: w-9 md:h-9 '>XS</button><button className='bg-gray-300 p-2 ml-2  focus:bg-red-950 focus:text-white text-xs  w-9 h-9'>S</button><button className='bg-gray-300 p-2 ml-2  focus:bg-red-950 focus:text-white text-xs w-9 h-9'>M</button><button className='bg-gray-300 p-1 ml-2  focus:bg-red-950 focus:text-white text-xs w-9 h-9'>L</button><button className='bg-gray-300 p-1 ml-2 text-xs focus:bg-red-950 focus:text-white  w-9 h-9'>XL</button><button className='bg-gray-300 p-1 ml-2 focus:bg-red-950 text-xs focus:text-white  w-9 h-9'>XXL</button></div>
            
            <h2 className=' text-red-600'>Quantity</h2>
            <input type="number" name='num' id='num' min={1} max={30} className='md:h-7 w-12 md:border-2 md:border-gray-400' />
            <button className='text-center bg-red-600 w-40 p-4 lg:mt-2'>Add to Cart</button>
        </div>
    </div>

        

        
     

        <div className='py-14 mt-24 bg-gray-200 lg:px-20 px-10'>
            <h2 className='text-2xl text-red-600'>Related Products</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-11 pt-5  '>
                {relatedProducts}
            </div>
        </div>
    </div>
    
    </div>
  )
}
