import React from 'react'

const SelectedVehicle = (props) => {
    const {vehicleImageURL,location,destination} = props;
  return (
    <div className="fixed bottom-0 w-screen bg-white z-50 px-2 py-4 transition-all duration-800 ease-in-out transform translate-y-0 opacity-100">
        <h1 className='text-2xl font-bold text-center w-full'>Confirm Your Ride</h1>
        <div className='flex flex-col justify-center items-center gap-4 mt-4'>
        <img className='h-40 w-full' src={vehicleImageURL} alt="Selected Vehicle" />
            <div>{location}</div>
            <div></div>
            <div></div>
        </div>
        <button className='bg-green-600 text-white w-full py-3 rounded-xl mt-4'>Confirm Ride</button>
    </div>
  )
}

export default SelectedVehicle