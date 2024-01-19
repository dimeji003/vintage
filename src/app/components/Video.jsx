import React from 'react'
import styles from './main.module.css'
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Link from 'next/link';

export default function Video() {
  return (
   <div className={`md:mt-32 mt-8 ${styles.video}`}>

    <div className='md:w-[35%] w-[70%] pt-24 pl-8'>

    <h2 className='md:text-4xl text-3xl text-white'>We believe in the power of shoes.</h2>
    <p className='pt-6 text-gray-600 text-xl'>Get up to 20% off on New Arrivals</p>
    <div className='flex flex-row items-center gap-2 pt-14'>
      <Link target='_blank' href='https://www.youtube.com/watch?v=bmd5NigtmRc' className='flex flex-row items-center gap-2 pt-14'>
    <MdOutlinePlayCircleOutline className='text-white'/> <p className='text-red-600'>WATCH VIDEO</p>
      </Link>
    </div>

    </div>

   </div>
  )
}
