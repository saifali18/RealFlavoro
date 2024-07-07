import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import SingUp from './Component/FakeComponent/SingUp'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<Error />} />
          <Route path='/singup' element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App