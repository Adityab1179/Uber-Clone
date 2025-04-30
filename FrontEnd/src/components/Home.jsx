import React from 'react'
import Logo from "../assets/Logo.webp"
import { Link } from 'react-router-dom'

const Home=()=> {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8  w-full bg-red-500 flex justify-between flex-col'>
        <img className='w-16 ml-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt='Logo'/>
        <div className='bg-white py-4 px-4 pb-7 font-bold text-3xl'>
        <h2>Get Started with Uber</h2>
        <Link className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5' to={"/login"}>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home