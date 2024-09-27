import React from 'react'

const Sociallinks = ({icon}) => {
  return (
    <div>
        <img 
            src={icon}
            alt="social-icon"
            className='w-8 h-8 flex items-center cursor-pointer md:h-6 md:w-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110'
        />
    </div>
  )
}

export default Sociallinks