import React from 'react'
const AcceptTask = ({data}) => {
  return (
    
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#11142B] border-1 border-[#2FA4FF] rounded-xl shadow-xl'>
        
            <div className='flex justify-between items-center text-[#FFFFFF]'>
                <h3 className='bg-red-600 text-sm text-[#FFFFFF] px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm  '>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-[#FFFFFF] '>{data.title} </h2>
            <p className='text-sm mt-5 text-[#FFFFFF] '>{data.description}</p>
            <div className='flex justify-between mt-4 text-[#FFFFFF]'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed </button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed </button>
            </div>
        </div>
  
  )
}

export default AcceptTask
