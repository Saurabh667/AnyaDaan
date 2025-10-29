import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
