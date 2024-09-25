import React, { useContext, useState } from 'react'
import Rating from './Rating';
import RelatedProduct from './RelatedProduct';
import { ProductContext } from '../Context/Productprovider';
import Comments from './Comments';

function Reviews() {
  const { userReview, OrderedProd } = useContext(ProductContext)
  const [rating, setrating] = useState()
  const [review, setreview] = useState('')
  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')


  const handleReview = (id) => {
    userReview({ id, userName, userEmail, review, rating })
    setrating()
    setreview('')
    setuserName('')
    setuserEmail('')
  }

  return (
    <div className='w-[100%] h-[100%]'>
      <Comments />
      <div className='w-[100%] h-[100%] my-16 p-6' style={{ border: '1px solid rgba(0,0,0,0.3)' }}>
        <h1>Add a review</h1>
        <p className='text-[16px]'>Your email address will not be published. Required fields are marked *</p>
        <div className='flex items-center gap-4 my-5'>Your rating * <Rating byrating={rating} onClick={(index) => setrating(index)} /></div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="review">Your review *</label>
          <textarea name="review" id="" cols="30" rows="3" value={review} onChange={(e) => setreview(e.target.value)} style={{ border: '1px dotted black', outline: 'none', padding: '10px', fontSize: '15px' }}></textarea>
        </div>
        <div className='flex gap-5 mt-6 text-[16px]'>
          <div className='flex flex-col w-[50%]'>
            <label htmlFor="">Name *</label>
            <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
          </div>
          <div className='flex flex-col w-[50%]'>
            <label htmlFor="">Email *</label>
            <input type="text" value={userEmail} onChange={(e) => setuserEmail(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
          </div>
        </div>
        {OrderedProd?.map(item => <button key={item.id} onClick={() => handleReview(item.id)} className='mt-4 w-[120px] h-[40px] bg-[#0084d6] text-white font-semibold'>SUBMIT</button>)}
      </div>
      <RelatedProduct />
    </div>
  )
}

export default Reviews