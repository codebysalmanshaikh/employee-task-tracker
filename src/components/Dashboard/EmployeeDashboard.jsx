import React from 'react'
import Header from '../other/header'
import TasklistNumbers from '../other/TasklistNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        
        <Header data = {data}/>
        <TasklistNumbers data = {data}/>
        <Tasklist data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
















