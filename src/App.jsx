import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Index from './component/users/Index'
import Creat from './component/users/Creat'
export default function App() {
  return (
  <Routes>
        <Route path='/users/index' element={<Index />}/>   
        <Route path='/users/creat' element={<Creat />}/>  

  </Routes>
  )
}
