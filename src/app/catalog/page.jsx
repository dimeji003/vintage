"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './shop.module.css'

import Shop from '../components/Shop'



export default function page() {
  return (
        <div >
            <div className={styles.shop}>
             <h2 className='text-6xl text-red-600 md:pt-80 pt-96 pl-14'>Shop</h2>
             <p className='text-white pl-16'><Link href='/'><span>Home</span></Link> - <span>Shop</span> </p>

            </div>
            <Shop />




        </div>
  )
}

