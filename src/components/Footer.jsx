import React from 'react'
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/frontend/assets'
const Footer = () => {
    const navigate=useNavigate()
  return (
    <div className='md:mx-10 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img onClick={()=>{navigate('/'); scrollTo(0,0)}} className='mb-5 w-40' src={assets.main_logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to SLOTTER, your trusted partner in managing your healthcare needs conveniently and efficiently. At SLOTTER, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            </div>



            <div>
                <p className='text-xl font-medium mb-5 '>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>    
                    <li><button onClick={()=>{navigate('/'); scrollTo(0,0)}}>Home</button></li>
                    <li><button onClick={()=>{navigate('/About'); scrollTo(0,0)}}>About Us</button></li>
                    <li><button onClick={()=>{navigate('/Contact'); scrollTo(0,0)}}>Contant Us</button></li>
                    <li><button onClick={()=>{navigate('/Contact'); scrollTo(0,0)}}>Privacy Policy</button></li>
                </ul>
            </div>



            <div>
            <p className='text-xl font-medium mb-5 '>Get In Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-8303117951</li>
                    <li>suyashh05@gmail.com</li>
                </ul>
            </div>


        </div>
    </div>
  )
}

export default Footer