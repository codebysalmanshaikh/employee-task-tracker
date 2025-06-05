// import React, { useContext, useEffect } from 'react'
// import Login from './components/Auth/login'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getlocalStorage, SetlocalStorage } from './Utils/Localstorage'
// import { useState } from 'react'
// import { AuthContext } from './context/AuthProvider'



// const App = () => {

//   const [User, setUser] = useState(null)

//   const authData = useContext(AuthContext)

//   const handlelogin = (email, password)=>{

//     if(email == 'admin@me.com' && password == '123')
//     {
//       setUser('admin')
//     }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password))
//       {
//       setUser('employee')
//     }  
//     else{
//       alert("invalid credentials ")
//     }
//   }
//   const data = useContext(AuthContext)
//   console.log(data)



//   return (
//     <>
//     {!User ?<Login handlelogin = {handlelogin}/>:''}
//     {User == 'admin' &&<AdminDashboard/> }
//     {User == 'employee' &&<EmployeeDashboard/>}
//     </>
//   )
// }

// export default App

import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [User, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setuserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }


  }, [])




  // const handlelogin = (email, password) => {
  //   if (userData?.admin?.find(admin => admin.email === email && admin.password === password)) {
  //     setUser('admin')
  //     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  //   }
  //   else if (userData) {
  //     const employee = userData.find(emp => emp.email === email && emp.password === password)

  //     if (employee) {
  //       setUser('employee')
  //       setloggedInUserData(employee)
  //       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
  //     }

  //   } else {
  //     alert("Invalid credentials")
  //   }
  // }



  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!User ? (
        <Login handlelogin={handleLogin} />
      ) : User === 'admin' ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />

      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  )

}

export default App
