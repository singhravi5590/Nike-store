import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setIncreaseQTY, setRemoveItemFromCart, setDecreaseQTY } from '../../app/Cartslice';


const CartItem = ({color, id, img, price, shadow, text, title, cartQuantity}) => {

  let dispatch = useDispatch();

  function onRemove(){
    let item = {title, id, price, shadow}
    dispatch(setRemoveItemFromCart(item))
  }

  function onIncrease(){
    let item = {title, id, price, shadow}
    dispatch(setIncreaseQTY(item))
  }

  function onDecrease(){
    let item = {title, id, price, shadow}
    dispatch(setDecreaseQTY(item))
  }

  return (
    <>
      <div className=' flex items-center justify-between w-full px-5'>
        <div className=' flex items-center gap-5'>
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid items-center`}>
            <img src={img} alt="cart/img" className='w-36 h-auto object-fill lg:w-28' />
          </div>
          <div className='grid items-center gap-4'>
            <div className='grid item-center leading-none'>
              <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
            </div>
            <div className='flex items-center justify-around w-full'>
              <button onClick={onDecrease} className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'> 
                <MinusIcon
                  className='h-5 w-5 lg:w-4 lg:h-4 text-white stroke-[2]'
                /> 
              </button>

              <div className='bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-7 lg:h-5 lg:w-6 flex items-center justify-center'>{cartQuantity}</div>

              <button onClick={onIncrease} className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'> 
                <PlusIcon
                  className='h-5 w-5 lg:w-4 lg:h-4 text-white stroke-[2]'
                /> 
              </button>
            </div>
          </div>
        </div>
        <div className='grid items-center gap-5'>
          <div className='grid items-center justify-center'>
            <h1 className='text-lg lg:text-base text-slate-900 font-medium'>${price * cartQuantity}</h1>
          </div>
          <div>
            <button onClick={ onRemove } className='bg-theme-cart rounded p-1 grid items-center justify-center'>
              <TrashIcon 
                className='h-5 w-5 text-white'
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem