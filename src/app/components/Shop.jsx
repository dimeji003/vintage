"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TbBoxPadding } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";

import Gridcatalog from '../components/Gridcatalog';
import Listcatalog from '../components/Listcatalog'
import ProductNav from "../catalog/ProductNav";


export const myProducts = [
    {
        id: '001',
        title: 'Plain Black Hoodie',
        gender: 'men',
        price: 12000,
        type: 'hoodies',
        image: 'menhoodies'
    },
    {
        id: '002',
        title: 'Plain Green Hoodie',
        gender: 'men',
        price: 12000, 
        type: 'hoodies',
        image: 'menhoodies2'
    },
    {
        id: '003',
        title: 'Color Block Hoodie',
        gender: 'men',
        price: 500,
        type: 'hoodies',
        image: 'menhoodies3'

    },
    {
        id: '004',
        title: 'Black EMRG Hoodie',
        gender: 'men',
        price: 500,
        type: 'hoodies',
        image: 'menhoodies4'
    },
    {
        id: '005',
        title: 'Contrast Color Hoodie',
        gender: 'men',
        price: 500,
        type: 'hoodies',
        image: 'menhoodies5'
    },
    {
        id: '006',
        title: 'Graphic Brown Hoodie',
        gender: 'men',
        price: 500,
        type: 'hoodies',
        image: 'menhoodies6'
    },
    {
        id: '007',
        title: 'Blue Cargo Pants',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants1'
    },
    {
        id: '008',
        title: 'Green Cargo Pants',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants2'
    },
    {
        id: '009',
        title: 'Drawstring Cargo Pants',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants3'
    },
    {
        id: '010',
        title: 'Mens Bolso Jeans',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants4'
    },
    {
        id: '011',
        title: 'Flap Cargo Pants',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants5'
    },
    {
        id: '012',
        title: 'Black Cargo Pants',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants6'
    },
    {
        id: '013',
        title: 'Elastic Waist Jeans',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants7'
    },
    {
        id: '014',
        title: '',
        gender: 'men',
        price: 500,
        type: 'pants',
        image: 'menpants8'
    },
    {
        id: '015',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee1'
    },
    {
        id: '016',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee2'
    },
    {
        id: '017',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee3'
    },
    {
        id: '018',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee4'
    },
    {
        id: '019',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee5'
    },
    {
        id: '020',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee6'
    
    },
    {
        id: '021',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee7'
    
    },
    {
        id: '022',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee8'
    
    },
    {
        id: '023',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee9'
    
    },
    {
        id: '024',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee10'
    
    },
    {
        id: '025',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee11'
    
    },
    {
        id: '026',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee12'
    
    },
    {
        id: '027',
        title: 'clothes',
        gender: 'men',
        price: 500,
        type: 'tee',
        image: 'mentee13'
    
    },
    {
        id: '028',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress1'
    
    },
    {
        id: '029',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress2'
    
    },
    {
        id: '030',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress3'
    },
    {
        id: '031',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress4'
    },
    {
        id: '032',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress5'
    },
    {
        id: '033',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress6'
    },
    {
        id: '034',
        title: 'Woman Satin Midi Dress',
        gender: 'women',
        price: 18000,
        type: 'dresses',
        image: 'womendress7'
    },
    {
        id: '035',
        title: 'clothes',
        gender: 'women',
        price: 500,
        type: 'dresses',
        image: 'womendress8'
    }
   
   
    
]


export default function Shop() {
    const [showCat, setShowCat] = useState(true)
    

    function onClick(){
        setShowCat(true)
    }
    function listStyle(){
        setShowCat(false)
    }

    const productGrp = myProducts.map(cloth => (
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
    const productGrp2 = myProducts.map(cloth => (
        <section key={cloth.id} className='grid grid-cols-[1fr_4fr] w-4/5 m-auto gap-11'>
         <div>
            <Link href={`/products/${cloth.title.split(' ').join('-')}`}>
            <Image src={`/images/${cloth.image}.jpg`}  alt={cloth.title} width={200} height={200} className='text-center' />
            </Link>

         </div>
         <div className='flex flex-col relative'>
            <h2>{cloth.title}</h2>
            <h2>{cloth.price}</h2>
            <div className='pt-16'>
            <button className='bg-red-700 h-11 w-28 absolute bottom-0'>Add to Cart</button>

            </div>


         </div>
            


        </section>

    ))
  return (
    <div className="min-h-screen py-36">
    
    
        

         <div className='flex flex-row  w-[75%] m-auto items-center justify-between'>
          <div className='flex flex-row gap-4'>
            <button className='text-xl border-2 p-2'>
            <TbBoxPadding onClick={onClick}/>

            </button>
            <button className='text-xl bg-gray-200 p-2'>
            <VscListSelection onClick={listStyle} />

            </button>

         </div> 
         <div>
            <ProductNav />
            
            </div>

        

            </div>

         { showCat ?
         <Gridcatalog product = {productGrp}/>
         :
         <Listcatalog product2 = {productGrp2} />
         }
    </div>
    
    
  )
}