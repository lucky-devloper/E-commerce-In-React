import React, { useContext, useState } from 'react'
import Color from './Color'
import Description from './Description'
import ProductInfo from './ProductInfo'
import Reviews from './Reviews'
import { ProductContext } from '../Context/Productprovider'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Order() {
  const { OrderedProd, quantity, setquantity, addToCart, Cart } = useContext(ProductContext)
  const [activesection, setactivesection] = useState('description')
  
  const handleSection = (section) => {
    setactivesection(section)
  }

  return (
    <div className='bg-[#f2f2f2] w-[100%] flex justify-center'>
      <div className='w-[80%]'>
        {Cart && Cart.length > 0 ? (
          <div className='border-t-2 border-black mt-10 flex justify-between py-4 px-10'>
            <p className='flex items-center'><FaCheckCircle /> “Blue Denim Shorts” has been added to your cart.</p>
            <Link to='/order/cart'><button className='w-[120px] h-[40px] text-white font-semibold bg-[#0084d6]'>VIEW CART</button></Link>
          </div>
        ) : ""}
        {OrderedProd?.map((item, index) => {
          return <div key={index} className='w-[100%] h-[600px] flex gap-10 my-10'>
            <div className='w-[50%] h-[100%]'>
              <img src={item.image} alt="" className='h-[100%] float-right' />
            </div>
            <div className='w-[50%] h-[100%] text-gray-600 flex flex-col gap-3'>
              <p>Home/{item.category}/DNK {item.productName}</p>
              <p>{item.category}</p>
              <h1 className='text-3xl font-semibold text-black'>DNK {item.productName}</h1>
              <p className='text-2xl text-black font-semibold'>${item.actualPrice}.00 - ${item.price}.00 <span className='text-[17px] text-gray-600'>+ Free Shipping</span></p>
              <p className='w-[600px]'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
              <div className='flex gap-3 my-4'>
                <Color color={'bg-red-600'} />
                <Color color={'bg-green-600'} />
                <Color color={'bg-blue-600'} />
              </div>
              <span style={{ border: '1px solid rgba(0,0,0,0.2)', width: '80%' }}></span>
              <div className='flex gap-4'>
                <input type="number" value={quantity} onChange={(e) => setquantity(e.target.value)} className='w-[50px] py-1 px-2 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
                <button onClick={() => addToCart(item.id)} className='active:bg-opacity-[0.6] w-[250px] bg-[#0084d6] text-white font-bold'>ADD TO CART</button>
              </div>
              <span style={{ border: '1px solid rgba(0,0,0,0.2)', width: '80%' }}></span>
              <p className='text-black'>SKU:N/A Category:{item.category}</p>
            </div>
          </div>
        })}

        <div className='w-[100%] flex flex-col text-xl'>
          <span className='border-t-2 border-gray-400 w-[100%] relative'></span>
          {activesection === 'description' ? (<span className='border-2 border-black w-[100px] absolute'></span>) : ("")}
          {activesection === 'Information' ? (<span className='border-2 border-black w-[190px] absolute left-64'></span>) : ("")}
          {activesection === 'review' ? (<span className='border-2 border-black w-[100px] absolute left-[30%]'></span>) : ("")}
          <div className='text-[18px] flex gap-4 font-semibold mt-2'>
            <button onClick={() => handleSection('description')}>Description</button>
            <button onClick={() => handleSection('Information')}>Additional information</button>
            <button onClick={() => handleSection('review')}>Reviews(0)</button>
          </div>
          <div className='w-[100%]'>
            {activesection === 'description' && <Description />}
            {activesection === 'Information' && <ProductInfo />}
            {activesection === 'review' && <Reviews />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order