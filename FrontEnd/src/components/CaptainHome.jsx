import React,{useContext} from 'react'
import { CaptainContextData } from '../context/CaptainContext'

const CaptainHome = () => {
    const {captainData}=useContext(CaptainContextData)
    const {firstName,lastName}=captainData.fullName
  return (
    <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
    </div>
  )
}

export default CaptainHome