import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'
const CreateTask = () => {

  const [userData, setuserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [asignTo, setasignTo] = useState('')
  const [Category, setCategory] = useState('')

  const [Newtask, setNewtask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()


    setNewtask({ taskTitle, taskDescription, taskDate, Category, active: false, NewTask: true, failed: false, copleted: false })

    const data = userData



    data.forEach(function (elem) {
      if (asignTo == elem.firstname) {
        elem.tasks.push(Newtask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;

      }
    })
    setuserData(data)

    console.log(data);


    // localStorage.setItem('employees',JSON.stringify(data))

    settaskDescription('')
    settaskDate('')
    setasignTo('')
    setCategory('')
    settaskTitle('')

  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)

      }} className='flex flex-wrap rounded-xl w-full bg-black items-start  justify-between text-xl mt-10 border-2 border-[#2FA4FF]' >
        <div className='w-1/2 p-10 space-y-4 '>
          <div>
            <h3 className='text-base mb-2 text-[#FFFFFF]'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value)
              }}
              type="text" placeholder='i.e. Make a UI design' className='bg-[#11142B] text-[#FFFFFF] text-sm placeholder:text-gray-400 outline-none py-2 px-5  rounded-lg w-[80%]'/>
          </div>

          <div>
            <h3 className='text-base mb-2 text-[#FFFFFF]' >Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value)
              }}
              type="date" className=' bg-[#11142B] placeholder:text-gray-400 outline-none py-2 px-5 text-sm text-[#FFFFFF] rounded-lg w-[80%]'/>
          </div>

          <div>
            <h3 className='text-base mb-2 text-[#FFFFFF]' >Assign To</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setasignTo(e.target.value)
              }}
              type="text" placeholder='i.e. Ajay' className=' bg-[#11142B] text-[#FFFFFF] placeholder:text-gray-400 outline-none py-2 px-5 text-sm   rounded-lg w-[80%]' />
          </div>

          <div>
            <h3 className='text-base mb-2 text-[#FFFFFF]'>Category</h3>
            <input
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}

              type="text" placeholder='i.e. Design, Writing, Documentation etc' className=' bg-[#11142B] placeholder:text-gray-400 outline-none py-2 px-5 text-sm text-[#FFFFFF] rounded-lg w-[80%]' />
          </div>

          <div className='mt-5 '>
            <button id='loginbtn' className=' bg-[#65F1D2] placeholder:text-gray-400 outline-none py-2 px-5 text-lg  rounded-lg w-[60%] font-bold'>Create Task</button>
          </div>
        </div>

        <div className='w-1/2 pt-10'>
          <h3 className='text-base mb-2 text-[#FFFFFF]'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value)
            }}
            name="" id="" cols='30' rows='10' placeholder='Description of your task' className=' bg-[#11142B] outline-none py-2 px-5 w-[80%] text-sm text-[#FFFFFF] rounded-xl'></textarea>
        </div>

      </form>
    </div>
  )
}

export default CreateTask



