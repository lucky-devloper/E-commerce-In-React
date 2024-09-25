import React, { useContext } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { ProductContext } from '../Context/Productprovider';

function SidecartProduct({ prod }) {
    const { deletedCartItem } = useContext(ProductContext)

    return (
        <div className='w-[100%] h-[60px] flex justify-between items-center'>
            <div className='flex gap-5 justify-center'>
                <img src={prod.image} alt="" className='w-[60px] h-[100%] object-cover' />
                <div>
                    <p className='text-[17px] font-semibold'>{prod.productName}</p>
                    <p>{prod.qty} × ${prod.price}.00</p>
                </div>
            </div>
            <RxCrossCircled fontSize='25px'  onClick={() => deletedCartItem(prod.id)}/>
        </div>
    )
}

export default SidecartProduct