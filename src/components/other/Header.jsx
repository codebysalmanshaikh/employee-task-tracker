import React from 'react'
import { SetlocalStorage } from '../../Utils/Localstorage'

const Header = ({data}) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>there </span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'>Log Out </button>
    </div>
  )
}

export default Header



