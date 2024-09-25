import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx";
import { ProductContext } from '../Context/Productprovider';
import SidecartProduct from './SidecartProduct';
import { Link } from 'react-router-dom';

function SideCart() {
    const { toggleClass, settoggleClass, toogleSidebar, Cart, subTotal } = useContext(ProductContext)
    console.log(subTotal);
    
    return (
        <div className={` bg-black bg-opacity-[0.3] w-[100%] h-[100%] flex justify-end absolute top-0 z-10`}>
            <div className={`${toggleClass} bg-white w-[500px] h-[100%] relative`}>
                <div className='w-[100%] flex items-center justify-between p-5' style={{ borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
                    <h1 className='font-semibold'>Shooping cart</h1>
                    <RxCross1 onClick={() => { settoggleClass('hide'), toogleSidebar() }} fontSize='20px' />
                </div>
                <div className='cart w-[100%] max-h-[400px] flex flex-col gap-3 p-4 overflow-y-auto'>
                    {Cart?.map((prod, index) => {
                        return <SidecartProduct key={index} prod={prod} />
                    })}
                </div>
                <div className='w-[100%] h-[200px] absolute bottom-0' style={{borderTop:'1px solid rgba(0,0,0,0.3)'}}>
                    <div className='flex justify-between items-center px-4 h-[50px]'>
                        <p>Subtotal:</p>
                        <p>${subTotal}.00</p>
                    </div>
                    <div className='p-4' style={{borderTop: '1px solid rgba(0,0,0,0.3)'}}>
                        <Link to='/order/cart'><button onClick={() => { settoggleClass('hide'), toogleSidebar() }} className='w-[100%] text-white text-xl font-semibold mb-4 h-[50px] bg-[#0084d6]'>VIEW CART</button></Link>
                        <Link to='/checkout'><button onClick={() => { settoggleClass('hide'), toogleSidebar() }} className='w-[100%] text-white text-xl font-semibold h-[50px] bg-[#0084d6]'>CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCart