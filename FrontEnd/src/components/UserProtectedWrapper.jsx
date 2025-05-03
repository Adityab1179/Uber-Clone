import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContextData } from '../context/UserContext'

const UserProtectedWrapper = ({children}) => {
const token=localStorage.getItem('token')
console.log(token)
const navigate=useNavigate()
if(!token){
    navigate("/login")
}

  return (
    <>{children}</>
  )
}

export default UserProtectedWrapper