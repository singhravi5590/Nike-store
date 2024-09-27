import React from 'react'
import Title from '../utils/Title';

const Footer = ({titles, links}) => {
    
  return (
    <>
        <footer className='bg-theme pt-7 pb-5'>
            <div className='nike-container text-slate-200'>
                <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 '>
                    {titles.map((val, i) => (
                        <div className='grid items-center' key={i}>
                            <h1 className='text-lg md:text-sm lg:text-base uppercase font-semibold'>{val.title}</h1>
                        </div>
                    ))}
                    {links.map((list, i) => (
                        <ul key={i} className='grid items-center gap-1'>
                            {list.map((val, i) => (
                                <li className='text-sm sm:text-xs' key={i}>{val.link}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer