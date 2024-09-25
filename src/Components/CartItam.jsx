import React, { useContext, useEffect, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { ProductContext } from '../Context/Productprovider';

function CartItam({ prod }) {
    const { setupdatedQty, updateCartQty, deletedCartItem } = useContext(ProductContext)
    const [prodqty, setprodqty] = useState(prod.qty)
    const [mounted, setmounted] = useState(true)
    const [toggle, settoggle] = useState(false)

    const updateQtyval = (id) => {
        updateCartQty(id)
        window.location.reload()
    }

    useEffect(() => {
        if (mounted) {
            return
        } else {
            settoggle(true)
            setupdatedQty(prodqty)
        }
    }, [prodqty])



    return (
        <div className='w-[100%] h-[230px]' style={{ border: '1px solid rgba(0,0,0,0.3)' }}>
            <div className='flex items-center w-[100%] font-semibold' style={{ borderBottom: '1px solid rgba(0,0,0,0.3)', height: '50px', backgroundColor: 'white' }}>
                <div className='w-[50%] text-center'>
                    <p>Product</p>
                </div>
                <div className='w-[50%] flex justify-evenly'>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
            </div>
            <div className='flex items-center w-[100%]' style={{ borderBottom: '1px solid rgba(0,0,0,0.3)', height: '100px' }}>
                <div className='w-[50%] flex items-center gap-20 px-5'>
                    <TiDeleteOutline onClick={() => deletedCartItem(prod.id)} fontSize='25px' />
                    <img src={prod.image} alt="" className='w-[70px] h-[70px] object-cover' />
                    <p>{prod.productName}</p>
                </div>
                <div className='w-[50%] flex justify-evenly'>
                    <p>${prod.price}.00</p>
                    <input type="number" value={prodqty} onChange={(e) => { setprodqty(e.target.value), setmounted(false) }} className='w-[55px] py-1 px-2 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
                    <p>${prod.price * prod.qty}.00</p>
                </div>
            </div>
            <div className='float-right p-4'>
                {toggle === true ? (
                    <button onClick={() => updateQtyval(prod.id)} disabled={false} className='w-[150px] h-[50px] bg-[#0084d6] text-white font-semibold'>UPDATE CART</button>
                ) : (
                    <button disabled={true} className='w-[150px] h-[50px] bg-[#93acbb] text-white font-semibold'>UPDATE CART</button>
                )}
            </div>
        </div>
    )
}

export default CartItam