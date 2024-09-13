import React from 'react'
import Header from '../components/header'
import SpecialityMenu from '../components/specialityMenu'
import Topdoctors from '../components/topdoctors'
import Banner from '../components/banner'

const Home = () => {
  return (
    <div>
         <Header />
         <SpecialityMenu />
         <Topdoctors />
         <Banner />
    </div>
  )
}

export default Home