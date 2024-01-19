import React from 'react'

export default function SearchBar() {
  return (
  
      <form className='w-[80%] absolute z-40 left-11 top-[90px] m-auto bg-transparent'>
        <input type="text"  className='w-[100%] bg-white border-2 border-red-600 rounded-xl h-11 text-center' placeholder='Search' />
      </form>

    
  )
}
