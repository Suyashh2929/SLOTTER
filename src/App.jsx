import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Myappointments from './pages/Myappointments'
import Myprofile from './pages/Myprofile'
import Appointments from './pages/Appointments'

import Navbar from './components/navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' mx-4 sm:mx-[10%]'>  

      <Navbar/> 

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myappointments' element={<Myappointments/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
        <Route path='/appointment/:docId' element={<Appointments/>}/>
      </Routes>


      <Footer />

    </div>
  )
}

export default App
