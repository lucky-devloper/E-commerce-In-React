import React, { useContext, useEffect, useState } from 'react'
import { PiKeyReturn } from "react-icons/pi";
import Returnsection from './Returnsection';
import { ProductContext } from '../Context/Productprovider';
import Payment from './Payment';

function CheckOut() {
    const { Cart, subTotal, getuserInfo, UserInfo } = useContext(ProductContext)
    const [toggleReturn, settoggleReturn] = useState(false)
    const [addClass, setaddClass] = useState('top')
    const [country, setcountry] = useState()
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [selectedCountry, setselectedCountry] = useState('India')
    const [postcode, setpostcode] = useState()
    const [city, setcity] = useState('')
    const [street, setstreet] = useState('')
    const [phone, setphone] = useState()
    const [email, setemail] = useState('')

    const [check, setcheck] = useState(false)

    console.log(UserInfo);



    useEffect(() => {
        if (toggleReturn) {
            setaddClass('top')
            // console.log("top To bottom");

        } else {
            setaddClass('bottom')
            // console.log("bottom TO Top");
        }
    }, [toggleReturn])



    useEffect(() => {
        fetch('https://api.first.org/data/v1/countries')
            .then((res) => res.json())
            .then((res) => setcountry(Object.values(res.data).map(countryname => countryname.country)))
            .catch((error) => {
                console.log("fetching error", error);
            })
    }, [])

    const savainfo = () => {
        getuserInfo({ firstname, lastname, companyName, selectedCountry, postcode, city, street, phone, email })
        setfirstname('')
        setlastname('')
        setcompanyName('')
        setpostcode('')
        setcity('')
        setstreet('')
        setphone('')
        setemail('')
    }



    return (
        <div className='w-[100%] bg-[#f2f2f2] flex justify-center'>
            <div className='w-[80%] relative'>
                <h1 className='text-6xl text-center font-semibold my-10 text-gray-500'>Checkout</h1>
                <div className='w-[100%] h-[320px] border-t-2 mb-10 border-black'>
                    <p className='flex items-center gap-2 p-3'><PiKeyReturn fontSize='25px' /><span>Returning customer? <button onClick={() => settoggleReturn(prev => !prev)} className='active:text-blue-600'><a href="#">Click here to login</a></button></span></p>
                    <Returnsection />
                </div>
                <div className={`${addClass} w-[100%] h-[240px] bg-[#f2f2f2] border-t-2 border-black z-0`}>
                    <p className='flex items-center gap-2 p-3'><PiKeyReturn fontSize='25px' /><span>Have a coupon? <button className='hover:text-blue-600 text-semibold'><a href="#">Click here to enter the code</a></button></span></p>
                    <p className='mt-12'>If you have a coupon code, please apply it below.</p>
                    <div className='my-5'>
                        <input type="text" className='w-[250px] h-[40px] px-3 outline-none' style={{ border: '1px solid rgba(0,0,0,0.3)' }} />
                        <button className='h-[35px] w-[150px] ml-3 bg-[#0084d6] text-white font-semibold'>APPLY COUPON</button>
                    </div>
                </div>
                <div className='w-[100%] h-[1000px] flex gap-10 bg-[#f2f2f2]'>
                    <div className='w-[60%] h-[100%]'>
                        <h1 className='text-xl font-semibold pt-8 pb-4 border-b-2 border-gray-300'>Billing Details</h1>

                        <div className='w-[100%] flex gap-10 my-3'>
                            <div className='flex flex-col gap-1 font-semibold w-[50%]'>
                                <label htmlFor="">First Name <sup className='text-red-600 text-[18px]'>*</sup></label>
                                <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                            </div>
                            <div className='flex flex-col gap-1 font-semibold w-[50%]'>
                                <label htmlFor="">Last Name <sup className='text-red-600 text-[18px]'>*</sup></label>
                                <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                            </div>
                        </div>

                        <div className='flex gap-1 flex-col font-semibold'>
                            <label htmlFor="">Company name (optional)</label>
                            <input type="text" value={companyName} onChange={(e) => setcompanyName(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                        </div>

                        <div className='flex gap-1 flex-col font-semibold my-3'>
                            <label htmlFor="">Country / Region <sup className='text-red-600 text-[18px]'>*</sup></label>
                            <select value={selectedCountry} onChange={(e) => setselectedCountry(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }}>
                                {country?.map((countryname, index) => {
                                    return <option key={index} value={countryname}>{countryname}</option>
                                })}
                            </select>
                        </div>

                        <div className='w-[100%] flex gap-10'>
                            <div className='flex flex-col gap-1 font-semibold w-[50%]'>
                                <label htmlFor="">Postcode / ZIP <sup className='text-red-600 text-[18px]'>*</sup></label>
                                <input type="text" value={postcode} onChange={(e) => setpostcode(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                            </div>
                            <div className='flex flex-col gap-1 font-semibold w-[50%]'>
                                <label htmlFor="">Town / City <sup className='text-red-600 text-[18px]'>*</sup></label>
                                <input type="text" value={city} onChange={(e) => setcity(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                            </div>
                        </div>

                        <div className='flex gap-3 flex-col font-semibold my-3'>
                            <label htmlFor="">Street address <sup className='text-red-600 text-[18px]'>*</sup></label>
                            <input type="text" value={street} onChange={(e) => setstreet(e.target.value)} placeholder='House number and street name' className='py-2 px-4 outline-none font-normal' style={{ border: '1px dotted' }} />
                            <input type="text" placeholder='Apartment, suite, unit,etc.(optional)' className='py-2 px-4 outline-none font-normal' style={{ border: '1px dotted' }} />
                        </div>

                        <div className='flex gap-1 flex-col font-semibold'>
                            <label htmlFor="">Phone <sup className='text-red-600 text-[18px]'>*</sup></label>
                            <input type="number" value={phone} onChange={(e) => setphone(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                        </div>

                        <div className='flex gap-1 flex-col font-semibold my-3'>
                            <label htmlFor="">Email address <sup className='text-red-600 text-[18px]'>*</sup></label>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className='py-2 px-4 outline-none' style={{ border: '1px dotted' }} />
                        </div>

                        <h1 className='text-xl font-semibold pb-3 border-b-2 border-gray-300'>Additional information</h1>

                        <div className='flex gap-1 flex-col font-semibold my-3'>
                            <label htmlFor="">Order notes (optional)</label>
                            <textarea cols="30" rows="2" placeholder='Notes about your order, e.g. special notes for delivery' className='py-2 px-4 outline-none font-normal' style={{ border: '1px dotted' }}></textarea>
                        </div>
                    </div>
                    <div className='w-[40%] h-[64%] border-2 border-gray-400 p-6'>
                        <h1 className='text-xl font-semibold'>Your Order</h1>
                        <div className='w-[100%] h-[44%] mt-5'>
                            <div className='border-b-2 border-gray-300 flex justify-between py-4 font-semibold'>
                                <p>Product</p>
                                <p>Subtotal</p>
                            </div>
                            {Cart?.map((item, index) => {
                                return <div key={index} className='border-b-2 border-gray-300 flex justify-between py-3'>
                                    <p>DNK {item.productName} × {item.qty}</p>
                                    <p>${item.price}.00</p>
                                </div>
                            })}
                            <div className='border-b-2 border-gray-300 flex justify-between py-4'>
                                <p>Subtotal</p>
                                <p>${subTotal}.00</p>
                            </div>
                            <div className='border-b-2 border-gray-300 flex justify-between py-4'>
                                <p>Total</p>
                                <p>${subTotal}.00</p>
                            </div>
                        </div>
                        <div className='w-[100%] h-[200px] mt-6'>
                            <div className='w-[100%] flex gap-2 py-2'>
                                <input type="radio" checked={check} onChange={() => {setcheck(prev => !prev), savainfo()}} name="1" />
                                <p>Direct bank transfer</p>
                            </div>
                            <div className='w-[100%] flex gap-2 py-2'>
                                <input type="radio" name="1" checked={check} onChange={() => {setcheck(prev => !prev), savainfo()}} />
                                <p>Check payments</p>
                            </div>
                            <div className='w-[100%] flex gap-2 py-2'>
                                <input type="radio" name="1" checked={check} onChange={() => {setcheck(prev => !prev), savainfo()}} />
                                <p>Cash on delivery</p>
                            </div>
                            <div className='w-[100%] flex items-center gap-2 py-2'>
                                <input type="radio" name="1" checked={check} onChange={() => {setcheck(prev => !prev), savainfo()}} />
                                <p>PayPal</p>
                                <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="" className='h-[50px] w-[50%] object-cover' />
                            </div>
                        </div>
                        {UserInfo && check && UserInfo.length > 0 ? (
                            <Payment />
                        ) : (
                            <button disabled={true} className='w-[100%] h-[50px] text-white font-semibold bg-[#a0a3a5] mt-2'>Pay Now</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut