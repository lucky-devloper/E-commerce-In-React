import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-[100%] h-[500px]'>
        <h2 className='text-3xl font-semibold ml-[10%] my-12'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h2>
        <hr />
        <div className='mt-10 mx-[10%] h-[380px] flex'>
            <div className='w-[40%] h-[100%] mt-24'>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt=""  className='w-[100px]'/>
                <p className='text-2xl font-semibold mt-10'>The best look anytime, anywhere.</p>
            </div>
            <div className='w-[60%] h-[100%] mt-24 flex gap-24'>
                <div className='list-none leading-7 text-gray-500'>
                    <h1 className='text-2xl text-black mb-3'>For Her</h1>
                    <li>Women Jeans</li>
                    <li>Top and Shirts</li>
                    <li>Women Jackets</li>
                    <li>Heels and Flats</li>
                    <li>Women Accessories</li>
                </div>
                <div className='list-none leading-7 text-gray-500'>
                    <h1 className='text-2xl text-black mb-3'>For Him</h1>
                    <li>Men Shoes</li>
                    <li>Men Shirts</li>
                    <li>Men Jeans</li>
                    <li>Men Accessories</li>
                    <li>Men Jackets</li>
                </div>
                <div className='flex flex-col items-start gap-4'>
                <h1 className='text-2xl text-black mb-3'>Subscribe</h1>
                <input type="email" placeholder='Your email address...'  className='border-2 border-gray-400 py-2 px-3 outline-none w-[250px]'/>
                <button className='w-[120px] h-[40px] bg-[#0084d6] text-white font-semibold'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex items-center justify-between px-32 py-10'>
            <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
            <div className='flex items-center gap-6 text-2xl'>
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://youtube.com"><FaYoutube /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://instagram.com"><IoLogoInstagram /></a>
                <a href="https://google.com"><FaGoogle /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer