import React, { useContext } from 'react'
import { GiShoppingBag } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/Productprovider';
import SideCart from './SideCart';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { settoggleClass, toogleSidebar, toggle, Cart, subTotal } = useContext(ProductContext)

  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <div className='w-[100%] h-[100px] flex justify-between items-center px-5'>
        <div className='flex items-center gap-5'>
          <Link to='/'><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt="" className='w-[150px]' /></Link>
          <ul className='flex items-center gap-6 font-semibold'>
            <li className='cursor-pointer'>EVERTHING</li>
            <li className='cursor-pointer'>MEN</li>
            <li className='cursor-pointer'>WOMEN</li>
            <li className='cursor-pointer'>ACCESSORIES</li>
          </ul>
        </div>
        <div className='flex items-center gap-5 list-none font-normal'>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li className='font-bold'>${subTotal}.00</li>
          <li className='flex items-center gap-1'><GiShoppingBag onClick={() => { settoggleClass('active'), toogleSidebar() }} fontSize='20px' /> <sup className='text-[16px] font-semibold'>{Cart.length}</sup></li>
          {isAuthenticated ? (<FaUser fontSize='20px' />) : (<button className='text-white py-1 w-[60px] bg-[#0084d6]'>Sign in</button>)}
        </div>
      </div>
      {toggle && <SideCart />}
    </>
  )
}

export default Navbar