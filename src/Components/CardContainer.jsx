import React, { useContext } from 'react'
import Cards from './Cards'
import { ProductContext } from '../Context/Productprovider'
import { Link } from 'react-router-dom'

function CardContainer() {
  const { item } = useContext(ProductContext)

  return (
    <div className='w-[100%] bg-[#f2f2f2] flex flex-col items-center'>
      <h1 className='text-4xl my-6 font-semibold'>Featured Products</h1>
      <span className='text-blue-700 text-xl w-[100px]'>___________</span>
      <div className='w-[90%] mt-10 p-2 grid grid-cols-5 gap-5'>
        {item?.map((product, index) => {
          return <div className='w-[100%]' key={index}><Link to='/order'><Cards product={product} /></Link></div>
        })}
      </div>
    </div>
  )
}

export default CardContainer