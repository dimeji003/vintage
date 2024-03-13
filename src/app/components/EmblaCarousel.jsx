import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './main.module.css'

import SlidingUpTextTwo from './Slidingupeffect2'
import SlidingUpTextThree from './Slidingupeffect3'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className={`embla ${styles.embla}`} ref={emblaRef}>
      <div className={`embla__container ${styles.embla__container} mb-5`}>
        <div className={`embla__slide  ${styles.slide1} `}> <div className='lg:pl-7 lg:pt-32 flex flex-col lg:gap-5'><h2 className='md:pt-32 pt-[450px] md:w-[90%] text-white font-bold text-center lg:text-left lg:text-6xl text-[34px]'>VINTAGE VANGUARD</h2>
        <em className='lg:w-[30%] text-white lg:text-xl text-sm text-center lg:text-left px-5 lg:px-0'>Celebrating Style, Embracing Elegance: Where Fashion Becomes a Statement.</em>
        <div className='text-white lg:text-xl text-xs text-center lg:p-4  font-bold rounded-lg m-auto lg:m-0 bg-red-700 w-[30%] p-3 lg:w-[13%] mt-6'>SHOP NOW</div>
          </div> </div>
        <div className= {`embla__slide ${styles.slide2} px-3 flex place-content-center`}> <em className='text-white text-xl pt-[400px]'>Beyond Fashion, we're Archiitects of Expression.Builidng confidence, one outfit at a time.</em></div>
        <div className= {`embla__slide ${styles.slide3}`}>Slide 3</div>
      </div>
    </div>
  )
}
export default EmblaCarousel;

