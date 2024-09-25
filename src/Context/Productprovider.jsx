import React, { createContext, useEffect, useState } from 'react'
import products from '../products'

export const ProductContext = createContext()
function Productprovider({ children }) {
    const [item, setitem] = useState(products)
    const [OrderedProd, setOrderedProd] = useState(null)
    const [relatedProd, setrelatedProd] = useState([...Array.from({ length: 3 }, () => null)])
    const [comments, setcomments] = useState([])
    const [userComment, setuserComment] = useState(null)
    const [quantity, setquantity] = useState(1)
    const [Cart, setCart] = useState([])
    const [updatedQty, setupdatedQty] = useState()
    const [toggleClass, settoggleClass] = useState('hide')
    const [toggle, settoggle] = useState(false)
    const [subTotal, setsubTotal] = useState(0)
    const [UserInfo, setUserInfo] = useState([])

    const toogleSidebar = () => {
        settoggle(prev => !prev)
    }

    // store user information for place the order

    const getuserInfo = (info) =>{
        setUserInfo([{...info}])
    }

    // show the selected product if user select it
    const getProduct = (id) => {
        const selectedItem = item.filter((prod) => prod.id === id)
        setOrderedProd(selectedItem);
    }

    // show the  related item in bottom side of the selected product
    const RelatedProduct = (category) => {
        const commonprod = item.filter((prod) => prod.category === category)
        setrelatedProd(commonprod.slice(0, 3))
    }

    // store the product review to given by user
    const userReview = (comments) => {
        setcomments((prevcomments) => [{ ...comments }, ...prevcomments])
    }

    // show the product review in review section
    const productReview = (id) => {
        const data = JSON.parse(localStorage.getItem("Review"))
        const productComment = data.filter((comment) => comment.id === id)
        setuserComment(productComment);
    }
    
    // store comment in local storage
    useEffect(() => {
        const comment = JSON.parse(localStorage.getItem('Review'))

        if (comment && comment.length > 0) {
            setcomments(comment)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Review", JSON.stringify(comments))
    }, [comments])

    // add the selected product in a cart after for buy and if selected product are already exist then user get alert message you just only increase and decrease quantity
    const addToCart = (id) => {
        const cartData = JSON.parse(localStorage.getItem("cart"))
        const alreadyavaLiable = cartData.find((item) => item.id === id)
        if (alreadyavaLiable) {
            alert("Data already exit")
            const avaliableItemUpdate = cartData.map((item) => item.id === id ? { ...item, qty: quantity } : item)
            setCart(avaliableItemUpdate)
        } else {
            const cartProd = item.find((item) => item.id === id)
            setCart((prevprod) => [{ ...cartProd, qty: quantity }, ...prevprod])
        }
    }

    // update the product quantity if user wants to update
    const updateCartQty = (id) => {
        const data = JSON.parse(localStorage.getItem("cart"))
        const updatedCart = data.map((item) => item.id === id ? { ...item, qty: updatedQty } : item)
        setCart(updatedCart)
    }


    // store selected product in localstorage
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        if (cart && cart.length > 0) {
            setCart(cart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(Cart))
    }, [Cart])

    // add total cost of added product in cart
    useEffect(() => {
        const total = Cart.map((item) => {
            return Number(item.price * item.qty)
        })
        const totalproductCost = total.reduce((acc, curr) => {
            return acc + curr
        }, 0)
        setsubTotal(totalproductCost)
    }, [Cart])

    // delete selected product if user is want
    const deletedCartItem = (id) => {
        const cartData = JSON.parse(localStorage.getItem("cart"))
        const afterDeleteCartItem = cartData.filter((item) => item.id !== id)
        setCart(afterDeleteCartItem)
    }


    return (
        <ProductContext.Provider value={{ item, getProduct, OrderedProd, RelatedProduct, relatedProd, userReview, productReview, userComment, addToCart, Cart, quantity, setquantity, updateCartQty, setupdatedQty, subTotal, setsubTotal, deletedCartItem, toggleClass, settoggleClass, toogleSidebar, toggle, getuserInfo, UserInfo }}>
            {children}
        </ProductContext.Provider>
    )
}

export default Productprovider