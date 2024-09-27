import { HeartIcon, MagnifyingGlassCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCart } from '../app/Cartslice';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch()

    const totalItem = useSelector((store) => store.cart.cartTotalQuantity)

    function onCartToggle(){
        dispatch(setOpenCart({
            cartState : true,
        }))
    }
    
    function navScroll(){
        if(window.scrollY > 30){
            setNavState(true);
        }
        else{
            setNavState(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', navScroll);

        return () =>{
            window.removeEventListener('scroll', navScroll)
        }
    },[])
  return (
    <>
        <header className={!navState ? `absolute top-7 left-0 right-0 opacity-[200] z-[200]` : 'fixed left-0 right-0 top-0 h-[9vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme'}>
            <nav className='flex items-center justify-between nike-container'>
                <div className='flex items-center'>
                    <img 
                        src={logo} 
                        alt="" 
                        className={`w-16 h-auto ${navState && 'filter brightness-0'}`}
                    />
                </div>
                <ul className=' flex items-center justify-center gap-2'>
                    <li><MagnifyingGlassCircleIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/></li>
                    <li><HeartIcon className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/></li>
                    <li> 
                        <button onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                            <ShoppingBagIcon 
                            className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
                            <div className={`absolute top-4 right-0  w-4 text-[0.65rem] leading-tight font-medium rounded-full cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'} `}>{totalItem}</div>
                        </button>
                    </li>

                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar