"use client"
import { useEffect } from "react"



    const SlidingUpText = () => {
        useEffect(() => {
        const slidingUpText = document.getElementById('slidingUpText')
        slidingUpText.classList.remove('opacity-0', 'translate-y-8')
        slidingUpText.classList.add('opacity-100')
  
  
      }, [])
    
  return (
    <div>
        <h2 id='slidingUpText' className='text-red-700 md:text-6xl md:pt-7 text-4xl md:pb-5 pt-28 font-bold transform translate-y-8 opacity-0 transition-all delay-75 duration-500 ease-in'><span className='text-white md:text-6xl text-3xl font-light'>SHOP </span>Vintage Vanguard<span className='text-white text-2xl md:text-7xl'>.</span></h2>
     
    </div>
  )
  }
  export default SlidingUpText;
  
    