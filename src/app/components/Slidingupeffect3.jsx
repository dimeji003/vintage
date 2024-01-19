"use client"
import { useEffect } from "react"
import Link from "next/link"



    const SlidingUpTextThree = () => {
        useEffect(() => {
        const slidingUpText = document.getElementById('slidingUpTextThree')
        slidingUpText.classList.remove('opacity-0', 'translate-y-8')
        slidingUpText.classList.add('opacity-100')
  
  
      }, [])
    
  return (
    <div>
      <Link href='/catalog'>
       <button id='slidingUpTextThree' className="bg-red-600 text-white p-4 h-11 flex items-center rounded-xl">SHOP NOW</button>
      </Link>
    </div>
  )
  }
  export default SlidingUpTextThree;
  
    