import React from 'react'
import Rating from './Rating';
import { ProductContext } from '../Context/Productprovider';
import { useContext } from 'react';

function Cards({ product }) {
    const { getProduct, RelatedProduct, productReview } = useContext(ProductContext)

    return (
        <div onClick={() => {
            getProduct(product.id)
            RelatedProduct(product.category)
            productReview(product.id)
        }} className='w-[250px] h-[380px] leading-7'>
            <img src={product.image} alt="" className='h-[230px] w-[100%] object-cover' />
            <h1 className='text-xl font-semibold'>{product.productName}</h1>
            <p className='text-gray-400'>{product.category}</p>
            <span className='flex gap-2'><p className='line-through text-gray-400'>${product.actualPrice}.00</p> ${product.price}.00</span>
            <Rating />
        </div>
    )
}

export default Cards