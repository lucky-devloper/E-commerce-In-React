import React from 'react'

function Color({color}) {
    return (
        <div className='h-[30px] w-[30px] border-2 border-black rounded-full p-1'>
            <div className={`w-[100%] h-[100%] rounded-full ${color}`}></div>
        </div>
    )
}

export default Color