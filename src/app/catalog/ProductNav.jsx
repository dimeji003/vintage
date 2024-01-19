"use client"
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link'
import styles from './nav.module.css'


export default function ProductNav() {
  const [IsOpen, setIsOpen] = useState(false)
  function productNav(){

    setIsOpen(!IsOpen)
  }
  return (
    <div >
      <button onClick={productNav} className='border flex flex-row border-gray-300 md:w-[200px] w-[120px] p-2 items-center text-center justify-between md:justify-center m-auto'><div>Category</div><div><RiArrowDropDownLine /></div></button>
      {IsOpen && (
        <div className='bg-white border absolute md:left-[412px] z-20 border-gray-300 md:w-[200px] w-[120px]'>
          <div className='flex flex-col items-center'>
            <Link href={'/catalog'} className='w-[100%]'>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>All</p>
            </Link>
            <Link href={'/catalog/men'} className='w-[100%]'>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>Men</p>
            </Link>
            <Link href={'/catalog/women'} className='w-[100%]'>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>Women</p>
            </Link>
            <Link href={'/catalog/tees'} className='w-[100%]'>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>Tees</p>
            </Link>
            <Link className='w-[100%]' href={'/catalog/hoodies'}>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>Hoodies</p>
            </Link>
            <Link href={'/catalog/pants'} className='w-[100%]'>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>Pants</p>
            </Link>
            <Link href={'/catalog/dresses'} className='w-[100%]'>
            <p className='text-red-600 border-b text-center border-b-gray-300 w-[100%] py-2'>Dresses</p>
            </Link>
          </div>
        </div>
      )}

    </div>
  )
}
