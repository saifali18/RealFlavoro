import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetSearch } from '../Redux/SearchSlice';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { SetActive } from '../Redux/SetActiveSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.setActive.setActive);
  const Name = useSelector(state => state.SetName.SetName);
  // console.log(Name, "Name...");
  let FilterName = Name.split('@')[0];
  const [TimeId, setTimeId] = useState(null);



  const HandleChange = (value) => {
    clearTimeout(TimeId);
    const newTimeoutId = setTimeout(() => {
      dispatch(SetSearch(value));

    }, 1000);
    setTimeId(newTimeoutId);
  };
  return (
    <div  className='navbarcol fixed-top' style={{height:'95px'}} >
      <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 ' >
        <div>
          <h3 className='text-xl font- bold text-gray-600'>
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className='text-2xl font-bold'>Flavoro Foods</h1>
        </div>

        <div>
          <input type='search' placeholder='Search Here..' name='search'
            onChange={(e) => HandleChange(e.target.value)}
            autoCapitalize='off'
            className='form-control p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
        </div>
        {
          active ? <div style={{ display: "flex", gap: 5 }}> <div style={{ display: "flex", gap: 5, textAlign: "center", height: "45px" }}
            className='px-3 py-2 bg-gray-200 font-bold rounded-lg bg-gray-300 hover:bg-green-500 hover:text-white ' onClick={() => alert("Already Login")}>
            <FaUser className="mt-1" />{FilterName}</div>
            <div >
              <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white' onClick={() => {
                var result = window.confirm("Do you want to log out?");
                if (result) {
                  dispatch(SetActive(false));
                } else {
                }
              }}>
                <RiLogoutCircleRLine />
              </button>
            </div>

          </div> : <div className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white" style={{ alignItems: "center", height: "50px" }}>
            <NavLink to="/singup" className="flex items-center">
              <h1 className="text-2xl font-bold ml-2   animate-bounce delay-500 transition-all">Login Page</h1>
              <FaUser className="ml-1 animate-bounce delay-500 transition-all" />
            </NavLink>
          </div>
        }
      </nav>
    </div>
  )
}

export default Navbar