import React from 'react'
import Header from '../other/header'
import TasklistNumbers from '../other/TasklistNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        
        <Header changeUser = {props.changeUser} data = {props.data}/>
        <TasklistNumbers data = {props.data}/>
        <Tasklist data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard
















