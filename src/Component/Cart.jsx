import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"; const Cart = () => {
  const item = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const login = useSelector((state) => state.setActive.setActive)

  let totalQty = item.reduce((totalQty, item) => totalQty + item.qty, 0);

  let TotalPrices = item.reduce(((total, item) => total + item.qty * item.price), 0)
  const [stateActive, setstateActive] = useState(false);

  return (
    <>

    
        <div className={` fixed right-0 top-0 w-full lg:w-[20vw] mt-12 h-full ${item.length >= 5 ? "overflow-y-scroll  overflow-x-hidden" : ""}   bg-red-100 p-5 mb-3 transition-transform duration-300 ${stateActive ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className='flex justify-between items-center my-1'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>

            <MdClose
              onClick={() => setstateActive(!stateActive)}
              className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
          </div>

          {
            item.length ? item.map((food) => {
              return <ItemCard key={food.id}
                id={food.id}
                img={food.img}
                price={food.price}
                name={food.name}
                qty={food.qty}
              />
            }) : 'Your Cart Is Empty..'

          }

          <div className={` ${item.length >= 5 ? '' : "absolute bottom-0"} `}>
            <h3 className='font-semibold text-gray-800'>items :{totalQty} </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount : {TotalPrices}</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2' />
            <button
              onClick={() => {
                if (item.length) {
                  if (login) {
                    navigate('/success');
                  } else {
                    setstateActive(false);
                    alert("You are not logged in");

                  }
                }
                else {
                  setstateActive(false);
                  alert("Add Item Your Card Is Empty ");
                }
              }}
              className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] m-2 mb-5'
            >
              Checkout
            </button>

          </div>
        </div >

        {
          !stateActive ? <FaShoppingCart
            onClick={() => setstateActive(!stateActive)}
            className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"
              }`

            } /> : ""
        }
       
    </>
  )
}

export default Cart