import React from 'react'
import { IoMdGlobe } from "react-icons/io";
import { MdRestartAlt } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

export default function Assurance() {
  return (
    <div className='flex md:flex-row flex-col md:w-4/5  m-auto gap-2 mt-14 md:py-16'>
        <div className='flex flex-col text-center place-content-center items-center px-7'>
        <IoMdGlobe className='md:text-6xl text-3xl text-center'/>

        <h2 className='pt-3'>Free Shipping</h2>
        <p className='text text-xs pt-3'>Buy product over $100 and get free home delivery offer</p>
        </div>
        <div className='flex flex-col items-center text-center border-r border-r-gray-200 border-l border-l-gray-200 px-7'>
        <MdRestartAlt className='md:text-6xl text-3xl' />
        <h2 className='pt-3'>Money Back Guarantee</h2>
        <p className='text-xs pt-3'>You have 30-days return guarantee for every single order</p>

        </div>
        <div className='flex flex-col items-center text-center px-7'>
        <AiOutlineSafety className='md:text-6xl text-3xl' />
        <h2 className='pt-3'>Safe Payment</h2>
        <p className='text-xs pt-3'>We conform you that payment system are totally secure</p>
        </div>
    </div>
  )
}
