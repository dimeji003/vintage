import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { IoCalendarOutline } from "react-icons/io5";

export const blogPosts = [
  {
    id: '001',
    subject: 'Trending Fall Fashion 2023',
    description: 'Discover the latest fashion trends for fall 2023. Stay stylish and cozy this season!',
    userName: 'Fashionista101',
    date: 'September 15, 2023',
    image: 'blogpost1',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non id eligendi aspernatur architecto, possimus nemo voluptatibus suscipit impedit aliquam voluptatum maiores deleniti rem? Voluptas inventore ducimus error qui sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae atque et dicta sunt est, necessitatibus, nemo deleniti non nobis ducimus ipsa asperiores eos mollitia possimus? Quaerat culpa quam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus dolorem esse at tempore maiores nam architecto quaerat ut. Mollitia earum nesciunt illo fuga totam odio quo, vitae et dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolore officia quasi odit, tempora doloremque modi eum magnam veniam molestias ut nisi earum vitae placeat et? Laborum, nesciunt dolorem.'
  },
  {
    id: '002',
    subject: 'Guide to Sustainable Clothing',
    description: 'Learn about sustainable clothing practices and how to shop for eco-friendly fashion.',
    userName: 'EcoFashionGuru',
    date: 'October 8, 2023',
    image: 'blogpost2',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non id eligendi aspernatur architecto, possimus nemo voluptatibus suscipit impedit aliquam voluptatum maiores deleniti rem? Voluptas inventore ducimus error qui sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae atque et dicta sunt est, necessitatibus, nemo deleniti non nobis ducimus ipsa asperiores eos mollitia possimus? Quaerat culpa quam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus dolorem esse at tempore maiores nam architecto quaerat ut. Mollitia earum nesciunt illo fuga totam odio quo, vitae et dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolore officia quasi odit, tempora doloremque modi eum magnam veniam molestias ut nisi earum vitae placeat et? Laborum, nesciunt dolorem.'
  },
  {
    id: '003',
    subject: 'Winter Wardrobe Essentials',
    description: 'Essential clothing items you need to keep warm and stylish during the winter months.',
    userName: 'StyleSensei',
    date: 'November 20, 2023',
    image: 'blogpost3',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non id eligendi aspernatur architecto, possimus nemo voluptatibus suscipit impedit aliquam voluptatum maiores deleniti rem? Voluptas inventore ducimus error qui sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae atque et dicta sunt est, necessitatibus, nemo deleniti non nobis ducimus ipsa asperiores eos mollitia possimus? Quaerat culpa quam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus dolorem esse at tempore maiores nam architecto quaerat ut. Mollitia earum nesciunt illo fuga totam odio quo, vitae et dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolore officia quasi odit, tempora doloremque modi eum magnam veniam molestias ut nisi earum vitae placeat et? Laborum, nesciunt dolorem.'
  },
  {
    id: '004',
    subject: 'Spring Fashion Must-Haves',
    description: 'Explore the essential fashion pieces to revamp your style for the upcoming spring season.',
    userName: 'ChicStylist',
    date: 'March 5, 2024',
    image: 'blogpost4',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non id eligendi aspernatur architecto, possimus nemo voluptatibus suscipit impedit aliquam voluptatum maiores deleniti rem? Voluptas inventore ducimus error qui sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae atque et dicta sunt est, necessitatibus, nemo deleniti non nobis ducimus ipsa asperiores eos mollitia possimus? Quaerat culpa quam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus dolorem esse at tempore maiores nam architecto quaerat ut. Mollitia earum nesciunt illo fuga totam odio quo, vitae et dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolore officia quasi odit, tempora doloremque modi eum magnam veniam molestias ut nisi earum vitae placeat et? Laborum, nesciunt dolorem.'
  },
  {
    id: '005',
    subject: 'The Art of Mixing Prints',
    description: 'Master the art of mixing different prints and patterns in your outfits for a unique look.',
    userName: 'PatternPro',
    date: 'April 18, 2024',
    image: 'blogpost5',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non id eligendi aspernatur architecto, possimus nemo voluptatibus suscipit impedit aliquam voluptatum maiores deleniti rem? Voluptas inventore ducimus error qui sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae atque et dicta sunt est, necessitatibus, nemo deleniti non nobis ducimus ipsa asperiores eos mollitia possimus? Quaerat culpa quam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus dolorem esse at tempore maiores nam architecto quaerat ut. Mollitia earum nesciunt illo fuga totam odio quo, vitae et dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolore officia quasi odit, tempora doloremque modi eum magnam veniam molestias ut nisi earum vitae placeat et? Laborum, nesciunt dolorem.'
  },
  {
    id: '006',
    subject: 'Summer Fashion Trends',
    description: 'Discover the hottest fashion trends for a stylish and breezy summer wardrobe.',
    userName: 'SunshineFashion',
    date: 'June 10, 2024',
    image: 'blogpost6',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non id eligendi aspernatur architecto, possimus nemo voluptatibus suscipit impedit aliquam voluptatum maiores deleniti rem? Voluptas inventore ducimus error qui sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae atque et dicta sunt est, necessitatibus, nemo deleniti non nobis ducimus ipsa asperiores eos mollitia possimus? Quaerat culpa quam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus dolorem esse at tempore maiores nam architecto quaerat ut. Mollitia earum nesciunt illo fuga totam odio quo, vitae et dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolore officia quasi odit, tempora doloremque modi eum magnam veniam molestias ut nisi earum vitae placeat et? Laborum, nesciunt dolorem.'
  }
  
];


const blogSection = blogPosts.map(blog => (
  <section key={blog.id} className='flex flex-col'>
    <Link href={`/blogpost/${blog.subject.split(' ').join('-')}`}>
    <Image src={`/${blog.image}.jpg`} alt={blog.subject} width={400} height={400}  />
    <div className='flex flex-row justify-between mt-6 text-sm text-gray-500'><p><em>{blog.userName}</em></p> <p><em className='flex flex-row gap-1 items-center'><IoCalendarOutline /> {blog.date}</em></p></div>
    <h2 className='mt-6 text-xl hover:text-red-600'>{blog.subject}</h2>
    <p className='mt-3 text-sm'>{blog.description}</p>
    <p className='mt-6 text-sm hover:text-red-600'>Read More</p>
    </Link>
    


  </section>

))


export default function page() {
  return (
    <div>
      <div className={styles.blogcover} >
        <h1 className='text-6xl text-red-600 pt-44 pl-14 font-bold'>Blog Post</h1>
        <p className='pt-5 pl-16'><Link href='/'><span>Home</span></Link> - <span>Blog</span> </p>

      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11 w-[85%] m-auto mt-24'>
      {blogSection}

      </div>
    </div>
  )
}
