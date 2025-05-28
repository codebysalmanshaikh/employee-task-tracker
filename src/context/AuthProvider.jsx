import React, { createContext, useState } from 'react'
import { getlocalStorage, SetlocalStorage } from '../Utils/Localstorage'
import { useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)

  useEffect(() => {
    SetlocalStorage()
    const {employees, admin} = getlocalStorage()
    setuserData({employees,admin})
  
    
  }, [])
  


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
