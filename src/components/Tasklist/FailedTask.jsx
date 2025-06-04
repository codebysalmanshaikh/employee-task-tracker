import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#11142B] rounded-xl text-[#FFFFFF] border-1 border-[#2FA4FF] shadow-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-5'>{data.description}</p>
            <div className='mt-4 '>
                <button className='bg-red-500 py-1 px-2'>Failed Task</button>
            </div>
        </div>
  )
}

export default FailedTask
