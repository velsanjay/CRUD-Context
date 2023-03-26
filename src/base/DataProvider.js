
import React, { createContext, useContext, useState } from 'react'
import { Studentdata, TeacherData } from '../component/data';

const DataContext = createContext();

function DataProvider({children}) {
    const [user , setUser] = useState(Studentdata)
    const [data , setData] = useState(TeacherData)
  return (
    <DataContext.Provider
    value={
        {
            user,
            setUser,
            data,
            setData
        }
    }
    >
        {children}
    </DataContext.Provider>
  )
}

export const UseData = () => {
    return useContext(DataContext)
}

export default DataProvider