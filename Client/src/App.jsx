import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import About from './Pages/About'
import { Dashboard } from './Pages/Dashboard'
import Projects from './Pages/Projects'
import SignIn from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/SignUp' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
 