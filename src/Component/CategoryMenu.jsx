import React, { useEffect, useState } from 'react'
import FoodData from '../Data/Data';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/CategorySlice';

const CategoryMenu = () => {
  const [Categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const listUniquwCategories = () => {
    const uniqueCotegories = [
      ...new Set(FoodData.map((item) => item.category))
    ];
    setCategories(uniqueCotegories);
  }
  useEffect(() => {
    listUniquwCategories();
  }, []);


  const selectcategory = useSelector((state) => state.category.category);
  return (
    <div className='  ml-6 ' style={{marginTop:"100px"}} >
      {/* / margin */}
      <h3 className='text-xl font-semibold'>Find the best food</h3>


      <div className='my-5 flex gap-3 '>
        <button

          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectcategory === "All" && "bg-green-500 text-white"}`}>All</button>

        {
          Categories.map((category, index) => {
            return <button
              key={index}
              onClick={() => dispatch(setCategory(category))}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectcategory === category && "bg-green-500	 text-white"}`}>{category}</button>

          })
        }
      </div>
    </div>
  )
}

export default CategoryMenu