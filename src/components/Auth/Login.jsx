import React, { useState } from 'react'

const Login = ({handlelogin}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    handlelogin(email,password)
    setemail("")
    setpassword("")
    
  }

  return (
    <div className=' flex w-screen items-center justify-center mt-50'>
        <div className='  border-2  border-white rounded-xl p-10'>
            <form
            
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-cente'>
                <input
                 value={email}
                 onChange={(e)=>{
                  setemail(e.target.value)
                 }} 
                 required 
                 className='text-black outline-none border-1 border-white py-3 px-5 text-xl rounded-xl placeholder:text-gray-400' type="email" placeholder='enter your email ' />
                <input
                  value={password}
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                 required 
                 className='text-black outline-none border-1 border-white py-3 px-5 text-xl rounded-xl placeholder:text-gray-400 mt-4' type="password" placeholder='enter password'/>
                <button id='loginbtn' className='text-black outline-none border-1  bg-[#111] py-3 px-5 text-xl rounded-xl placeholder:text-black mt-4'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
