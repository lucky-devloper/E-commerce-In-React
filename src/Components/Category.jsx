import React, { useEffect, useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import ShoopingCategory from './ShoopingCategory';

function Category() {
    const [currentIndex, setcurrentIndex] = useState(0)

    const images = [
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png",
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png",
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png",
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png",
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            slideImage()
        }, 1000)
        return () => clearInterval(interval)
    }, [currentIndex])


    const slideImage = () => {
        setcurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % images.length
            return nextIndex
        })
    }

    return (
        <div className='w-[100%] h-[100%] flex flex-col justify-center items-center'>
            <div className='w-[75%] py-8'>
                <div className='w-[100%] flex justify-center items-center my-10 gap-5'>
                    <GrPrevious />
                    <div className="slider">
                        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="slider-image"
                                />
                            ))}
                        </div>
                    </div>
                    <GrNext />
                </div>
                <div className='w-[100%] flex justify-between items-center'>
                    <ShoopingCategory Category={"20% Off On Tank Tops"} image={"https://images.unsplash.com/photo-1620231619471-b28081fc3509?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFuayUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D"} />
                    <ShoopingCategory Category={"Latest Eyewear For You"} image={"https://plus.unsplash.com/premium_photo-1672239496593-f51cdc01c0f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D"} />
                    <ShoopingCategory Category={"15% Off on Heals !"} image={"https://plus.unsplash.com/premium_photo-1671379102016-5e1310ddaa39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHN8ZW58MHx8MHx8fDA%3D"} />
                </div>
            </div>
        </div>
    )
}

export default Category