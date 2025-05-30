import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authdata = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 space-y-2  h-65' id='tasklist'>
        <div className='bg-red-400 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
            <h3 className='w-1/5 bg-red-600'>New Task</h3>
            <h5 className='w-1/5 bg-red-600'>Active Task </h5>
            <h5 className='w-1/5 bg-red-600'>Completed Task </h5>
            <h5 className='w-1/5 bg-red-600'>Failed Task </h5>
        </div>

        <div className='h-[80%]'>
            {authdata.employees.map(function(elem,idx){
            return <div key = {idx} className='bg-red-400 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>{elem.firstname}</h2>
            <h3 className='w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
      
    </div>
  )
}

export default AllTask
