import React, { createContext, useState } from 'react'
import { getlocalStorage } from '../Utils/Localstorage'
import { useEffect } from 'react'
import { SetlocalStorage } from '../Utils/Localstorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)


    useEffect(() => {
        SetlocalStorage()
        const {employees} = getlocalStorage()
        setuserData(employees)
    }, [])
  


  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
