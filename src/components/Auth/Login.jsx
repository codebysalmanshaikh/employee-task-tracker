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
        <div className='  border-2  border-emerald-600 rounded-xl p-10'>
            <form
            
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-cemter'>
                <input
                 value={email}
                 onChange={(e)=>{
                  setemail(e.target.value)
                 }} 
                 required 
                 className='text-black outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='enter your email ' />
                <input
                  value={password}
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                 required 
                 className='text-black outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-4' type="password" placeholder='enter password'/>
                <button className='text-black outline-none border-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-4'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
