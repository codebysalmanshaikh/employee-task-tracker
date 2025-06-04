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
        <div className=' bg-[#0B0D20] border-2  border-[#2FA4FF] rounded-xl p-10'>
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
                 className='text-[#FFFFFF] bg-[#11142B] outline-none border-1 border-[#2FA4FF] py-3 px-5 text-xl rounded-xl placeholder:text-gray-400' type="email" placeholder=' your email ' />
                <input
                  value={password}
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                 required 
                 className=' text-[#FFFFFF] bg-[#11142B] outline-none border-1 border-[#2FA4FF] py-3 px-5 text-xl rounded-xl placeholder:text-gray-400 mt-4' type="password" placeholder='your password'/>
                <button id='loginbtn' className='text-[#020013] outline-none  bg-[#65F1D2] py-2 px-5 text-xl rounded-xl placeholder:text-black mt-4 font-bold'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
