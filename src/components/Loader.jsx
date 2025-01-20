import React from 'react'
import logo from '../assets/logo.svg';

function Loader() {
  return (
    <div className='flex justify-center h-dvh items-center'>
        <img src={logo} />
    </div>
  )
}

export default Loader