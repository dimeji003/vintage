import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className='bg-red-900 h-[85vh] mt-24  text-center  '>
     <div className='flex flex-row w-[80%] m-auto items-center h-[90%]'>
        <div>
        <IoIosArrowRoundBack className='text-white text-3xl' />

        </div>
        <div  className='flex flex-col w-[80%] m-auto items-center '>
            <Image src='/passportphoto.webp' height={100} width={100} className='rounded-full '/>
            <p className='pt-10 text-white text-xl'>Pinaf is an excellent plant store eCommerce website template that I have used for my online store. The template is beautifully designed and easy to navigate, with a clean and modern aesthetic perfect for displaying plants and other products.</p>
            <h2 className='text-white pt-8'>Shubham Pawar</h2>

        </div>
        <div>
        <IoIosArrowRoundForward className='text-white text-3xl' />
        </div>

     </div>

    </div>
  )
}
