import React, { useEffect, useState } from 'react'
import CartCount from './cart/Cartcount'
import CartEmpty from './cart/Cartempty'
import CartItem from './cart/Cartitem'
import { useDispatch, useSelector } from 'react-redux'
import { setClearQTY, setCloseCart, setGetTotals } from '../app/Cartslice'


const Cart = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((store) => store.cart.cartState)
  const cartItems = useSelector((store) => store.cart.cartItem)
  const totalAmount = useSelector((store) => store.cart.cartTotalAmount)
  const totalQuantity = useSelector((store) => store.cart.cartTotalQuantity)
  console.log(totalAmount);
  


  useEffect(() => {
    dispatch(setGetTotals());
  },[cartItems, dispatch])

  function onCartToggle(){
    dispatch(setCloseCart({
      cartState : false,
    }))
  }

  function onCLearCartItems(){
    dispatch(setClearQTY());
  }

  return (
    <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${cartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'} `}>
            <div className={`blur-effect-theme h-screen absolute right-0 max-w-xl w-full `}>
                <CartCount totalQuantity = {totalQuantity} onCartToggle = {onCartToggle} onCLearCartItems = {onCLearCartItems}/>
                {cartItems.length == 0 ? <CartEmpty onCartToggle = {onCartToggle}/> : 
                <div>
                  <div className='flex items-start flex-col justify-start gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3'>
                    {cartItems?.map((item,i) => (
                      <CartItem {...item} key={i}/>
                    ))}
                  </div>
                  <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid      items-center">
                    <div className="flex items-center justify-between">
                      <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                      <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
                    </div>

                    <div className="grid items-center gap-2">
                      <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                      <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
                    </div>
                  </div>
                </div>}
            </div>
        </div>
    </>
  )
}

export default Cart