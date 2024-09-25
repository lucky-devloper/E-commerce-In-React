import React, { useContext } from 'react'
import Rating from './Rating'
import { ProductContext } from '../Context/Productprovider'

function RelatedProduct() {
    const { relatedProd } = useContext(ProductContext)
    
    return (
        <>
            <h1 className='text-5xl font-semibold'>Related products</h1>
            <div className='h-[500px] mt-6 grid grid-cols-4 gap-20'>
                {relatedProd && relatedProd.length > 0 ? (
                    relatedProd.map((item, index) => {
                        return <div key={index} className='w-[300px] h-[400px] text-[17px]'>
                            <img src={item.image} alt="" className='h-[300px] w-[100%] object-cover' />
                            <h1 className='font-semibold'>DNK {item.productName}</h1>
                            <p className='text-gray-400'>{item.category}</p>
                            <span className='font-semibold'>${item.actualPrice}.00 – ${item.price}.00</span>
                            <Rating />
                        </div>
                    })
                ) : (
                    <p>There is no related Product</p>
                )}
            </div>
        </>
    )
}

export default RelatedProduct