import React from 'react'

function About() {
  return (
    <div className='w-[100%] h-[100%] bg-[#f2f2f2] flex justify-center items-center flex-col'>
      <div className='w-[90%] h-[500px] bg-[#4784ad] bg-[url(sticker.png)] bg-center bg-cover bg-no-repeat bg-fixed flex flex-col justify-center items-start pl-20 text-white'>
        <p className='text-2xl font-semibold'>Limited Time Offer</p>
        <h1 className='text-5xl font-semibold my-4'>Special Edition</h1>
        <p className='w-[600px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate earum sunt quod ea, id laudantium. Lorem ipsum dolor sit amet.</p>
        <p className='text-xl font-semibold  my-4'>Buy This T-shirt  At 20% Discount , Use Code OFF20</p>
        <button className='w-[120px] h-[40px] bg-white text-black hover:text-white hover:bg-black mt-6'>SHOP NOW</button>
      </div>
      <div className='w-[75%] h-[400px] flex justify-center gap-5 items-center'>
        <div className='w-[300px] h-[200px] flex flex-col justify-center items-center'>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt="" className='w-[50px]' />
          <h1 className='font-semibold text-xl my-3'>Worldwide Shipping</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='w-[300px] h-[200px] flex flex-col justify-center items-center'>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt="" className='w-[50px]' />
          <h1 className='font-semibold text-xl my-3'>Best Quality</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='w-[300px] h-[200px] flex flex-col justify-center items-center'>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt="" className='w-[50px]' />
          <h1 className='font-semibold text-xl my-3'>Best Offers</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='w-[300px] h-[200px] flex flex-col justify-center items-center'>
          <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt="" className='w-[50px]' />
          <h1 className='font-semibold text-xl my-3'>Secure Payments</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default About