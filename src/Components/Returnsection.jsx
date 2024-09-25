import React from 'react'

function Returnsection() {

    return (
        <div className='w-[100%] h-[100%]'>
            <p className='my-5'>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
            <div className='w-[100%] flex gap-20 font-semibold mb-3'>
                <div className='flex flex-col gap-1 w-[50%]'>
                    <label htmlFor="">Username or email <sup className='text-[15px] text-red-600'>*</sup></label>
                    <input type="text" className='w-[100%] h-[40px] px-4 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
                </div>
                <div className='flex flex-col gap-1 w-[50%]'>
                    <label htmlFor="">Password <sup className='text-[15px] text-red-600'>*</sup></label>
                    <input type="text" className='w-[100%] h-[40px] px-4 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
                </div>
            </div>
            <div className='mb-2'>
                <input type="checkbox" name="check" />
                <label htmlFor="check" className='font-semibold'>Remember me</label>
            </div>
            <div className='mb-3'>
                <button className='w-[120px] h-[50px] text-white bg-[#0084d6] font-semibold'>LOGIN</button>
            </div>
            <button className='text-[17px]'><a href="#">Lost your password?</a></button>
        </div>
    )
}

export default Returnsection