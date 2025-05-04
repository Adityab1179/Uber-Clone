import React, { createContext,useState } from 'react'

export const CaptainContextData=createContext()
const CaptainContext = ({children}) => {
    const [captainData,setCaptainData]=useState()
    const [isLoading,setIsLoading]=useState();
    const[error,setError]=useState();
    const updateCaptain=(captainData)=>{
        setCaptainData(captainData)
    }
    const value={
        captainData,
        setCaptainData,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }
  return (
    <CaptainContextData.Provider value={value}>
        <div>{children}</div>
    </CaptainContextData.Provider>
  )
}

export default CaptainContext