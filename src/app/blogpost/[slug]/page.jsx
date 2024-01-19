import { blogPosts } from '@/app/blog/page'
import Image from 'next/image'
import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


export default function page(props) {
    const blogInfo = blogPosts.find(blog => blog.subject.split(' ').join('-') == props.params.slug)
    const recentPosts = blogPosts.slice(3, 6).map(blog => (
        <section key={blog.id} className='flex flex-row gap-5'>
            <Image src={`/${blog.image}.jpg`} width={100} height={100} />
            <div className='flex flex-col justify-between'>
            <span className='flex flex-row items-center text-sm text-gray-600 gap-2'><IoCalendarOutline /> <em>{blog.date}</em></span>
            <h2>{blog.subject}</h2>


            </div>


        </section>
    ))
  return (
    <div className='w-[85%] m-auto pt-11'>
        <div className='flex flex-row gap-16 '>
            <div className='flex flex-col  md:w-[55%] w-[90%] m-auto '>
                <div className='border-b border-gray-400 pb-11'>
                <Image src={`/${blogInfo.image}.jpg`} alt={blogInfo.subject} width={600} height={300} className='w-[600px]'/>
                <div className='flex flex-row justify-between mt-4 text-sm text-gray-500'><p><em>{blogInfo.userName}</em></p><p><em className='flex flex-row items-center gap-1'><IoCalendarOutline />{blogInfo.date}</em></p></div>
                <h2 className='mt-3 text-4xl'>{blogInfo.subject}</h2>
                <p className='mt-2 text-sm text-gray-600'>{blogInfo.note}</p>
            

                </div>
                <p className='flex flex-row items-center'>Share: <span className='flex flex-row gap-3 ml-5 items-center'><FaSquareFacebook /><FaSquareXTwitter /><RiInstagramFill /></span></p>
                
            </div>
            <div className=' flex-col w-[33%] hidden md:block'>
                <div className='flex flex-col border border-gray-200 h-40 rounded'>
                    <div className='w-4/5 m-auto h-[60%]'>
                    <h2 className='text-xl font-bold'>Search Here</h2>
                  
                    <input type="text" name='searchbar' placeholder='Search.. ' className='w-[100%] m-auto mt-3 border border-gray-300 h-11 rounded text-sm pl-3' />

                    </div>

                </div>

                <div className='border border-gray-200 mt-11 rounded'>
                    <div className='w-[75%] m-auto py-7'>
                      <h2 className='text-xl font-bold'>Recent Posts</h2>
                      <div className='flex flex-col gap-11 mt-3'>
                         {recentPosts}
                     </div>

                    </div>

                </div>

                
                       
                       

                    


            </div>

        </div>
    </div>
  )
}
