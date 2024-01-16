import React from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

export default function ProductNav() {
  return (
    <nav className='flex flex-row text-center md:text-sm text-xs '>
        <ul className={`flex flex-row md:gap-3 sm:gap-3 gap-1 pl-8 text-red-700 bg-transparent`}>
            <Link href={`/catalog`}>
            <li className='px-2 '>All</li>

            </Link>
            <Link href='/catalog/men'>
            <li className='px-2 md:px-4'>Men</li>
            </Link>
            <Link href='/catalog/women'>
            <li className='px-2 md:px-4'>Women</li>
            </Link>
            <Link href='/catalog/tees'>
            <li className='px-2 md:px-4'>Tees</li>
            </Link>
            <Link href='/catalog/hoodies'>
            <li className='px-2 md:px-4'>Hoodies</li>
            </Link>
            <Link href='/catalog/dresses'>
            <li className='px-2 md:px-4'>Dresses</li>
            </Link>
            <Link href='/catalog/pants'>
            <li className='px-2 md:px-4'>Pants</li>
            </Link>
        </ul>
    </nav>
  )
}
 