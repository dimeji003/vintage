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
import SearchBar from './SearchBar';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function onclick(){
    setShowNav (!showNav)
  }
  const [showSearch, setShowSearch] = useState(false)
  function openSearch(){
    setShowSearch (!showSearch)
  }

  function leaveNav(){
    setShowNav(false)
  }

  
  
  return (
    <div>

    <nav className='flex flex-row bg-white md:text-center sm:h-20 h-16 gap-[20px] items-center md:mt-0 justify-between w-[100%] border-b-4 border-red-600 px-6'>
      <div className='flex flex-row md:w-[50%] w-[60%] items-center'>
      <SiRevanced className='md:text-5xl text-4xl items-center md:text-red-600 text-red-600 pl-2 md:pl-5'/>

      </div>

      <div className='flex flex-row items-center pr-2 '>

      <div className=''>

        <ul className={`flex lg:flex-row flex-col lg:items-center text-black  lg:text-red-600 sm:gap-7 lg:gap-12 gap-2 text-xs lg:justify-center transition-transform transform ease-in-out duration-500 ${showNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}  md:pt-0 bg-white z-50 lg:h-10 fixed left-0 top-0 lg:relative lg:[70%] w-[60%] h-[100vh] pt-6 ${styles.sidebar}`} >
          <div className='flex lg:flex-row flex-col  lg:gap-11 gap-12 '>
            <div className='border-b border-black h-12'>

            <MdCancel className='lg:hidden items-center text-5xl xl pl-4 cursor-pointer ' onClick={onclick}/>
            </div>
            <div className='flex lg:flex-row flex-col  lg:justify-center lg:gap-10'>

           <Link href='/' className='focus:border-b-2 focus:border-red-600' onClick={leaveNav}>
            <li className='flex sm:gap-3 gap-2 items-center hover:cursor-pointer lg:h-20 h-12 hover:border-b-2 border-b-red-600 pl-4 lg:pl-0'>
            <IoHome />
                <span className='text-black'>HOME</span>
                </li>
           </Link>
          <Link href='/catalog' className='focus:border-b-2 focus:border-red-600 ' onClick={leaveNav}>
            <li className='flex sm:gap-3 gap-2 items-center  hover:cursor-pointer lg:h-20 h-12 lg:pl-0 pl-4 hover:border-b-2 border-b-red-600'>
            <FiShoppingCart />
                <span  className='text-black'>SHOP</span>
                </li>
          </Link>
          <Link href='/blog' onClick={leaveNav}>
            <li className='flex gap-3 items-center  hover:cursor-pointer lg:h-20 h-12 hover:border-b-2 border-b-red-600 lg:pl-0 pl-4'>
            <MdOutlineCollectionsBookmark />
                <span className='text-black'>BLOG</span>
                </li>
          </Link>
            <Link href='/contact' className='focus:border-b-2 focus:border-red-600' onClick={leaveNav}>
            <li className='flex gap-3 items-center  hover:border-b-2 border-b-red-600 hover:cursor-pointer h-12 lg:h-20 lg:pl-0 pl-4'>
            <IoMdCall />
                <span className='text-black'>CONTACT</span>
                </li>
            </Link>    
            <Link href='/about' className='focus:border-b-2 focus:border-red-600' onClick={leaveNav}>
             <li className='flex gap-3 items-center  hover:border-b-2 border-b-red-600 hover:cursor-pointer h-12 lg:h-20 lg:pl-0 pl-4'>
              <FaPerson />
                <span className='text-black'>ABOUT</span>
                </li>
            </Link>    
            </div>
          </div>
        
        
        </ul>
            
      </div>
      
      </div>

        <div>

        <ul className='flex flex-row items-center gap-2 text-2xl rounded-full'>
        <li className='flex items-center hover:cursor-pointer h-20'>
        <IoIosSearch onClick={openSearch} className='text-2xl text-red-600' />

        </li>
        
          <li>
            <MdOutlineShoppingCart className='border border-gray-400 rounded-full p-2 text-4xl text-red-600' />
       

          </li>
        

        <GiHamburgerMenu className='lg:hidden block text-red-600 cursor-pointer'  onClick={onclick} />  
        </ul>
        </div>
      


    

        




    </nav>
    <div className={`${showSearch ? "flex" : "hidden"} w-[100%]`}> 
    <SearchBar />

    </div>
   
      
    
    </div>
  )
}

