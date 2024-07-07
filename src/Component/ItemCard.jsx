import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { removeFromCart, Decrement, Increment } from '../Redux/Slices';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const ItemCard = ({ id, img, price, name, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 '>
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, qty }));
          toast(`${name} Remove`, {
            icon: "🖐️"
          })
        }}
        className='absolute right-7 text-gray-600 cursor-pointer' />
      <img src={img}

        alt='..'
        className='w-[50px] h-[50px]'
      />
      <div className='leading-5 '>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between '>
          <span className='text-green-500 font-bold'>₹{price}</span>
          <div className='flex justify-center items-center gap-2 absolute right-7' >

            <FaMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl  transition-all ease-linear cursor-pointer"
              onClick={() => qty > 1 ? dispatch(Decrement({ id })) : dispatch(removeFromCart({ id, img, name, qty }))} />

            <FaPlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl  transition-all ease-linear cursor-pointer"
              onClick={() => dispatch(Increment({ id }))} />
            <span>{qty}</span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard