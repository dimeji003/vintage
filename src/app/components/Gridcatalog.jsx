import React from 'react'

export default function Gridcatalog({product}) {
  return (
    <div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-[20px] w-4/5 m-auto relative top-[100px] rounded bg-white '>
        {product}
        
        </div>

    </div>
  )
}
