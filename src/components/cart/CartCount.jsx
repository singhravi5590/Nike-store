import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Cartcount = ({totalQuantity, onCartToggle, onCLearCartItems}) => {
    
  return (
    <>
        <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
            <div className='flex gap-4 items-center'>
                <div onClick={onCartToggle} className='grid items-center cursor-pointer' >
                    <ChevronDoubleLeftIcon
                        className='w-5 h-5'/>
                </div>
                <div className='grid items-center text-slate-900 hover:text-orange-500 stroke-[2]'>
                    <h1 className='text-base font-medium text-slate-900'>Your Cart <span 
                    className='bg-theme-cart rounded px-1 py-0.5 font-normal text-xs text-slate-100'>({totalQuantity} items)</span></h1>
                </div>
            </div>
            <div className='flex items-center'>
                <button onClick={onCLearCartItems} className='rounded bg-theme-cart active:scale-90 p-0.5'
                >
                    <XMarkIcon 
                        className='w-5 h-5 text-white stroke-[2]'/>
                </button>
            </div>
        </div>
    </>
  )
}

export default Cartcount