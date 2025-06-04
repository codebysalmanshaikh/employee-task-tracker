import React from 'react'
import { SetlocalStorage } from '../../Utils/Localstorage'
import { useState } from 'react'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    // console.log(props.changeUser)
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end  justify-between '>
      <h1 className=' text-[#FFFFFF] text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold text-[#FFFFFF]'>there</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'>Log Out </button>
    </div>
  )
}

export default Header



