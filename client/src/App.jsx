import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Singnup from './Singnup'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Singnup/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
