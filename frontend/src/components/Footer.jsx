import React from 'react'
import logo from "../assets/Johar_Tourism_01.png";

function Footer() {
  return (
    <div>
      <footer className='grid grid-cols-1 md:grid-cols-3 p-4'>
        <div>
            <div className='flex items-center'>
                <img src={logo} alt="" className='h-12 w-14' />
                <h1 className='font-bold text-xl'>Johar <span className='text-blue-500'>Tourism</span></h1>
            </div>
        </div>
        <div>
            <ul className='text-md cursor-pointer'>
                <li>Home</li>
                <li>Privacy Policy</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div>Right</div>
      </footer>
    </div>
  )
}

export default Footer
