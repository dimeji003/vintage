"use client"
import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from './navbar.modules.css'
import Link from 'next/link';
import Image from 'next/image';
import { SiRevanced } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function onclick(){
    setShowNav (!showNav)
  }

  
  
  return (
    <div>

    <nav className='flex flex-row bg-white  md:text-center sm:h-20 h-12 items-center md:mt-0 md:px-6'>
      <div>
      <SiRevanced className='text-5xl items-center text-red-600 pl-5'/>

      </div>


    
      <div className='md:pl-20'>

        <ul className={`md:flex md:flex-row flex-col md:pl-14 md:items-center text-black md:text-red-600 sm:gap-7 md:gap-12 gap-2 text-xs md:justify-center ${showNav ? "flex" : "hidden"}  md:pt-0 bg-white z-50 md:h-10 fixed left-0 top-0 md:relative w-[60%] h-[100vh] pt-6 ${styles.sidebar}`} >
          <div className='md:flex md:flex-row md:pl-64 md:gap-11 gap-12 '>
            <div className='border-b border-black h-12'>

            <MdCancel className='md:hidden items-center text-5xl xl pl-4 cursor-pointer ' onClick={onclick}/>
            </div>
            <div className='md:flex md:flex-row md:justify-center md:gap-14'>

           <Link href='/' className='focus:border-b-2 focus:border-red-600'>
            <li className='flex sm:gap-3 gap-2 items-center hover:cursor-pointer md:h-20 h-12 hover:border-b-2 border-b-red-600 pl-4 md:pl-0'>
            <IoHome />
                <span className='text-black'>HOME</span>
                </li>
           </Link>
          <Link href='/catalog' className='focus:border-b-2 focus:border-red-600 '>
            <li className='flex sm:gap-3 gap-2 items-center  hover:cursor-pointer md:h-20 h-12 md:pl-0 pl-4 hover:border-b-2 border-b-red-600'>
            <FiShoppingCart />
                <span  className='text-black'>SHOP</span>
                </li>
          </Link>
          <Link href='/blog'>
            <li className='flex gap-3 items-center  hover:cursor-pointer md:h-20 h-12 hover:border-b-2 border-b-red-600 md:pl-0 pl-4'>
            <MdOutlineCollectionsBookmark />
                <span className='text-black'>BLOG</span>
                </li>
          </Link>
            <Link href='/contact' className='focus:border-b-2 focus:border-red-600'>
            <li className='flex gap-3 items-center  hover:border-b-2 border-b-red-600 hover:cursor-pointer h-12 md:h-20 md:pl-0 pl-4'>
            <IoMdCall />
                <span className='text-black'>CONTACT</span>
                </li>
            </Link>    
            <Link href='/about' className='focus:border-b-2 focus:border-red-600'>
             <li className='flex gap-3 items-center  hover:border-b-2 border-b-red-600 hover:cursor-pointer h-12 md:h-20 md:pl-0 pl-4'>
              <FaPerson />
                <span className='text-black'>ABOUT</span>
                </li>
            </Link>    
            </div>
          </div>
        
        
        </ul>
            
      </div>
      

        
        <ul className='flex flex-row items-center gap-1 text-2xl rounded-full md:pl-20 pl-[250px]'>
        <li className='flex items-center hover:cursor-pointer h-20'>
        <IoIosSearch className='text-2xl text-red-600'/>

        </li>
        
          <li>
            <MdOutlineShoppingCart className='border border-gray-400 rounded-full p-2 text-4xl text-red-600' />
       

          </li>

        <GiHamburgerMenu className='md:hidden block text-red-600 cursor-pointer'  onClick={onclick} />  
        </ul>
      

        




    </nav>
   
      
    
    </div>
  )
}

