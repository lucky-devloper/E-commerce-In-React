import React, { useContext } from 'react'
import CartItam from './CartItam';
import { ProductContext } from '../Context/Productprovider';
import { Link } from 'react-router-dom';

function CartStore() {
    const { Cart, subTotal } = useContext(ProductContext)


    return (
        <div className='w-[100%] bg-[#f2f2f2] flex flex-col items-center'>
            <h1 className='text-6xl my-10 text-gray-500 font-semibold'>Cart</h1>
            <div className='w-[80%] h-[100%] flex flex-col gap-10 items-end'>
                {Cart?.map((item, index) => {
                    return <CartItam key={index} prod={item} />
                })}
                <div className='mb-10 w-[550px]' style={{ border: '1px solid rgba(0,0,0,0.3)' }}>
                    <div className='p-3 text-xl font-semibold' style={{ borderBottom: '1px solid rgba(0,0,0,0.3)', height: '55px', backgroundColor: 'white' }}>
                        <p>Cart Totals</p>
                    </div>
                    <div className='px-6 w-[100%]'>
                        <div className='w-[100%] h-[60px] flex items-end pb-3 ' style={{ borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
                            <p className='w-[40%]'>Subtotal</p>
                            <p className='w-[60%]'>${subTotal}.00</p>
                        </div>
                        <div className='w-[100%] h-[60px] flex items-end pb-3 ' style={{ borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
                            <p className='w-[40%]'>Total</p>
                            <p className='w-[60%]'>${subTotal}.00</p>
                        </div>
                        <Link to='/checkout'><button className='h-[70px] w-[100%] my-6 text-2xl text-white font-semibold bg-[#0084d6]'>CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartStore