import React from 'react'

function ShoopingCategory({Category, image}) {
    
  return (
    <div className='w-[360px] h-[500px]' style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
        <div className='w-[100%] h-[100%] flex flex-col gap-5 justify-end items-start text-white p-5 font-semibold hover:bg-black hover:bg-opacity-[0.3]'>
        <h2 className='text-3xl'>{Category}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ipsam.</p>
        <button className='w-[120px] h-[40px] font-semibold bg-white text-black hover:bg-black hover:text-white transition-all'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default ShoopingCategory