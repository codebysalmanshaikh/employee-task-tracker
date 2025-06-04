import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setuserData] = useContext(AuthContext)


  return (
    <div className='bg-black p-5 rounded-xl mt-5 space-y-2  h-65 border-2 border-[#2FA4FF]' id='tasklist'>
        <div className='bg-[#11142B] py-2 px-4 flex justify-between rounded text-[#FFFFFF]'>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task </h5>
            <h5 className='w-1/5 '>Completed Task </h5>
            <h5 className='w-1/5 '>Failed Task </h5>
        </div>

        <div id='tasklist' className='h-[80%] overflow-auto  '>
            {userData.map(function(elem,idx){
            return <div key = {idx} className='bg-none border-1 border-[#2FA4FF]  py-2 px-4 mb-3 flex justify-between rounded'>
            <h2 className='w-1/5  text-white  '>{elem.firstname}</h2>
            <h3 id='newtask' className='w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 id='activetask' className='w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 id='completedtask' className='w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 id='failedtask' className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
      
    </div>
  )
}

export default AllTask
