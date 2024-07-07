import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices';
import CategorySlice from './CategorySlice';
import SearchSlice from './SearchSlice';
import SetActiveSlice from './SetActiveSlice';
import NameSlice from './NameSlice';
const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
    setActive:SetActiveSlice,
    SetName :NameSlice,
  },
})
export default store;
