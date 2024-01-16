"use client"
import { useEffect } from "react"
const SlidingUpTextTwo = () => {
    useEffect(() => {
    const slidingUpText = document.getElementById('slidingUpTextTwo')
    slidingUpText.classList.remove('opacity-0', 'translate-y-8')
    slidingUpText.classList.add('opacity-100')


  }, [])

return (
<div>
    <p id='slidingUpTextTwo' className='text-white pb-5 text-xs md:text-xl transform translate-y-8 opacity-0 transition-all duration-500 delay-500 ease-in'>{`Celebrating Style, Embracing Elegance: Where Fashion Becomes a Statement.`}






</p>
</div>
)
}
export default SlidingUpTextTwo;
