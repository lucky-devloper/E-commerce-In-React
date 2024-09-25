import React from 'react'
import RelatedProduct from './RelatedProduct'

function Description() {
  return (
    <div className='w-[100%] h-[100%]'>
      <h1 className='mt-16 text-3xl font-semibold'>Product description</h1>
      <p className='text-[15px] mt-4'>Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className='text-[15px] my-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <RelatedProduct />
    </div>
  )
}

export default Description