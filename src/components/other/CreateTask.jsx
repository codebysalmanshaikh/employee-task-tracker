import React from 'react'

const CreateTask = () => {
    const submitHandler = () =>{
      e.preventDefault()
      console.log("task created")

    }

  return (
    <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
          
        }} className='flex flex-wrap rounded-xl w-full bg-black items-start  justify-between  text-xl mt-10' >
          <div className='w-1/2 p-10 space-y-4 '>
            <div>
              <h3 className='text-base mb-2'>Task Title</h3>
              <input type="text"  placeholder='make a ui design' className=' border-2 border-emerald-600 placeholder:text-gray-400 outline-none py-2 px-5 text-sm rounded-full' />
            </div>

            <div>
              <h3 className='text-base mb-2' >Date</h3>
              <input type="date"   className=' border-2 border-emerald-600 placeholder:text-gray-400 outline-none py-2 px-5 text-sm rounded-full'/>
            </div>

            <div>
              <h3 className='text-base mb-2' >Assign To</h3>
              <input type="text" placeholder='employee name '  className=' border-2 border-emerald-600 placeholder:text-gray-400 outline-none py-2 px-5 text-sm rounded-full'/>
            </div>

            <div>
              <h3 className='text-base mb-2'>Category</h3>
              <input type="text" placeholder='design, dev, etc'  className=' border-2 border-emerald-600 placeholder:text-gray-400 outline-none py-2 px-5 text-sm rounded-full' />
            </div>
            
            <div className='mt-5 '>
              <button  className=' border-2 border-emerald-600 bg-emerald-600 py-2 px-5 text-base rounded-full'>Create Task</button>
            </div>
          </div>

          <div className='w-1/2 pt-10'>
            <h3 className='text-base mb-2'>Description</h3>
            <textarea name="" id="" cols='30' rows='10'  className=' border-2 border-emerald-600 outline-none py-2 px-5 text-sm rounded-xl'></textarea>
          </div>

        </form>
    </div>
  )
}

export default CreateTask
