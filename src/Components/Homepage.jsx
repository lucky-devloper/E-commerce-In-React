import React, { useContext, useState } from 'react'
import Category from './Category'
import CardContainer from './CardContainer'
import About from './About'
import Footer from './Footer'
import { GiShoppingBag } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react'
import SideCart from './SideCart'
import { ProductContext } from '../Context/Productprovider'


function Homepage() {
  const { settoggleClass, toogleSidebar, toggle, Cart, subTotal } = useContext(ProductContext)

  const { loginWithRedirect } = useAuth0()
  const { logout } = useAuth0()
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='w-[100%] h-[100%] bg-[url(poster.avif)] bg-cover bg-center bg-no-repeat bg-fixed'>
      <div className='homepage w-[100%] h-[100%] bg-black bg-opacity-[0.3] flex flex-col gap-32'>
        <div className='w-[100%] h-[100px] bg-black bg-opacity-[0.1] flex justify-between items-center px-5'>
          <div className='flex items-center gap-5'>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png" alt="" className='w-[150px]' />
            <ul className='flex items-center gap-6 text-white font-semibold'>
              <li className='cursor-pointer'>EVERTHING</li>
              <li className='cursor-pointer'>MEN</li>
              <li className='cursor-pointer'>WOMEN</li>
              <li className='cursor-pointer'>ACCESSORIES</li>
            </ul>
          </div>
          <div className='flex items-center gap-5 list-none text-white font-normal'>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li className='font-bold'>${subTotal}.00</li>
            <li className='flex items-center gap-1'><GiShoppingBag onClick={() => { settoggleClass('active'), toogleSidebar() }} fontSize='20px' /> <sup className='text-[16px] font-semibold'>{Cart.length}</sup></li>
            {isAuthenticated ? (
              <div className='flex items-center gap-4'>
                <FaUser />
                <button onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }), handlebtn() }}>Sign out</button>
              </div>
            ) : (
              <button onClick={() => { loginWithRedirect(), handlebtn() }}>Sign In</button>
            )}
          </div>
        </div>
        <div className='w-[50%] px-[5%]'>
          <h1 className='main text-7xl font-semibold'>Raining Offers For <br /> Hot Summer!</h1>
          <p className='main text-3xl font-semibold my-6'>25% Off on All Products</p>
          <span className='btn'>
            <button className='w-[120px] h-[40px] mr-5 bg-white font-semibold hover:bg-black hover:text-white'>SHOP NOW</button>
            <button className='border-2 w-[120px] h-[40px] font-semibold text-white hover:bg-white hover:text-black hover:border-none'>FIND MORE</button>
          </span>
        </div>
        {toggle && <SideCart />}
      </div>
      <Category />
      <CardContainer />
      <About />
      <Footer />
    </div>
  )
}

export default Homepage