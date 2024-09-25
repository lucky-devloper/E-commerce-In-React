import React, { useContext } from 'react'
import { ProductContext } from '../Context/Productprovider'
import { FaUserCircle } from "react-icons/fa";
import Rating from './Rating';

function Comments() {
    const { userComment } = useContext(ProductContext)
    return (
        <>
            {userComment && userComment.length > 0 ? (
                userComment.map((comment, index) => {
                    return <div key={index} className='mt-5 flex items-start gap-4'>
                        <FaUserCircle fontSize='40px' style={{ color: 'gray' }} />
                        <div className='flex flex-col gap-2'>
                            <p style={{ fontFamily: 'Lato, sans-serif', fontStyle: 'italic' }}>{comment.userName}</p>
                            <Rating byrating={comment.rating}/>
                            <p className='text-[16px]'>{comment.review}</p>
                        </div>
                    </div>
                })
            ) : (
            <p className='text-[17px] mt-3'>There are no reviews yet.</p>
            )}
        </>
    )
}

export default Comments