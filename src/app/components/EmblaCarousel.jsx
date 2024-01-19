import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './main.module.css'
import SlidingUpText from './Slidingupeffect'
import SlidingUpTextTwo from './Slidingupeffect2'
import SlidingUpTextThree from './Slidingupeffect3'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className={`embla ${styles.embla}`} ref={emblaRef}>
      <div className={`embla__container ${styles.embla__container}`}>
        <div className={`embla__slide  ${styles.slide1}`}> <div className='pl-7'><h2 className='md:pt-44 pt-96 md:w-[50%] w-[60%]'><SlidingUpText/></h2>
        <p className='w-[80%]'><SlidingUpTextTwo/></p>
        <p><SlidingUpTextThree/></p>
          </div> </div>
        <div className= {`embla__slide ${styles.slide2}`}>Slide 2</div>
        <div className= {`embla__slide ${styles.slide3}`}>Slide 3</div>
      </div>
    </div>
  )
}
export default EmblaCarousel;

