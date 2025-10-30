import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignupPage from './components/auth/recieverSignUp';
import Login from './components/auth/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
