import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../Data/Data';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const HandleTost = (name) => {
    toast.success(` Added ${name}`)
  };
  const FilterFoodData = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    }
    else {
      return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())

    }
  });
  return (
    <>
      <Toaster position='top-center ' reverseOrder={false}></Toaster>
      <div className='  flex flex-wrap gap-6 justify-center lg:justify-start mx-6 my-10'>

        {FilterFoodData.length > 0 ? (
          FilterFoodData.map((item) => (
            <FoodCart
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              desc={item.desc}
              rating={item.rating}
              img={item.img}
              HandleTost={HandleTost}
            />
          ))
        ) : (
          <p className='text-3xl font -semibold mb-4 text-center  text-pink-300' >No Data Found <span className='text-rose-600'>!</span> </p>
        )
        }
      </div>
    </>
  )
};

export default FoodItems