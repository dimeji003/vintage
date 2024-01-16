import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className='text-center m-auto'>
        <div className={styles.contactcover}>

        </div>
        <div className='w-4/5 m-auto'>
        <h2 className='pt-[90px] text-red-700 text-xl text-center'>Contact Us</h2>
        <h1 className='text-4xl text-center pt-7'>Our Contact Details</h1>
        <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, biny injected humour, or randomise</p>

        </div>
        <div className='grid grid-cols-3 mt-16 '>
            <section className='flex flex-col text-center items-center px-10'>
                
                
            
             <FaPhoneAlt className='text-red-500 text-3xl text-center' /> 
             <h3 className='text-xl text-center pt-5'>Phone</h3>

             <Link  href='tel:+2348163901595' className='text-center text-sm'>08163901595</Link>


            </section>
            
                    


            <section className='flex flex-col items-center border-l border-gray-200 border-r px-10 '>
                
                    

                <FaLocationDot className='text-red-500 text-3xl' />
                   
                
                
                <h3 className=' text-xl pt-5'>Address</h3>
                <p className='text-sm text-center'>7 oreta road, Igbogbo</p>
                

            </section>
            <section className='flex flex-col items-center px-10'>
                
                <CiMail className='text-red-500 text-3xl'/>
                
                
                <h3 className='text-xl pt-5'>Email</h3>
                <Link className='text-sm' href='mailto:oladimejilawal14@gmail.com'>oladimejilawal14@gmail.com</Link>
                

            </section>

        </div>


        <div className='mt-[100px] w-[100%] m-auto'> 
            <h2>Send Us A Message</h2>
            <h1 className='text-4xl'>Get In Touch With Us</h1>

            <div className='mt-[30px] text-left w-4/5 m-auto'>
                <form className='relative'>
                    <input type="text" name='fname' placeholder='First Name' className='w-[47%] h-12 border border-gray-300 focus:border focus:border-red-600 rounded text-xs pl-5' />
                    <input type="text" name='lname' placeholder='Last Name'  className='w-[47%] h-12 border border-gray-300 rounded pl-5 text-xs absolute right-0' /><br /><br />
                    <input type="text" name='email' placeholder='Email' className='w-[47%] h-12 border border-gray-300 rounded pl-5 text-xs' />
                    <input type="text" name='subject' placeholder='Subject' className='w-[47%] h-12 border border-gray-300 ml-[40px] rounded pl-5 text-xs absolute right-0'/><br />
                    <textarea maxLength='5000' name="description" placeholder='Your Message' className='w-[100%] mt-6 h-60 border border-gray-300 rounded pl-5 text-xs pt-4' ></textarea><br />
                    <div className='text-center'>
                    <button className='bg-red-500 w-[40%] items-center text-center h-12 font-bold mt-3'>SEND MESSAGE</button>

                    </div>

                </form>
            </div>



        </div>

        
    </div>
  )
}
