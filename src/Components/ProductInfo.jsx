import React from 'react'
import RelatedProduct from './RelatedProduct'

function ProductInfo() {
  return (
    <div className='w-[100%] h-[100%]'>
      <div className='flex items-center w-[100%] mt-6'>
        <h1 style={{ border: '1px solid rgba(0,0,0,0.3)', width: '10%', padding: '5px' }}>Color</h1>
        <h1 style={{ border: '1px solid rgba(0,0,0,0.3)', width: '90%', padding: '5px' }}>Blue, Green, Red</h1>
      </div>
      <div className='mt-20'>
        <RelatedProduct />
      </div>
    </div>
  )
}

export default ProductInfo