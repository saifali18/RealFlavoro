import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div style={{ textAlign: "center", height:"100vw"}} className='ErrorColor'>
      <h1 className='font-bold text-red-600 pt-7'>You ARE  Type Wrong Path...</h1>
      <h1 className='font-bold text-red-600 pt-3'>This Pase Is ERROR</h1>
      <br />
      <br />
      <br />
      <div className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ' style={{ width: "200px", marginLeft: "630px" }}>
        <NavLink to={'/'} >GO TO SHOPPING PAGE</NavLink>
      </div>
    </div>
    
    </>
  )
}

export default Error