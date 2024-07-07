import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AllDelete } from '../Redux/Slices';

const Success = () => {
  const cart = useSelector((state) => state.cart.cart);
  let totalQty = cart.reduce((totalQty, item) => totalQty + item.qty, 0);
  let totalPrices = cart.reduce((totalprices, item) => totalprices + item.price, 0);

  const dispatch = useDispatch();

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  })
  return (
    <div className=' successColor flex flex-col items-center justify-center h-screen'>
      {
        loader ? <PropagateLoader color="#36d7b7" /> : <div>

          <h2 className='text-3xl font -semibold mb-4 text-center text-green-500 '>{totalQty} Item And Prices Is : { `₹ ${totalPrices}`} Order Successful!</h2>
          <p className=' text-green-500 '>Your order has been Successfully placed</p>

          <div className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ' style={{ width: "200p", marginTop: "40px", textAlign: "center" }}>
            <NavLink to={'/'} onClick={() => dispatch(AllDelete())}>GO TO SHOPPING PAGE</NavLink>
          </div>
        </div>
      }
    </div>
  )
}

export default Success