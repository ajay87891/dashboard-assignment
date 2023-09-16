import React from 'react'
import LanguageDropDown from './NavbarSubcomponents/langugeDropdown'
// import icons from '@/public/icons'
// import { icons } from '@/public/icons'
import bell from './../public/icons/bell.png'
import office from './../public/icons/office.png'
import checkbox from './../public/icons/checkbox.png'
import vl from './../public/icons/vl.png'
import MobileNav from './NavbarSubcomponents/mobilenav'
import pf from './../public/icons/profilePicture.png'


export default function Navbar() {
  return (
    <>
    
<nav className="bg-bg ">
  <div className="max-w-[100vw] flex flex-wrap  mx-auto p-4">
  <div className='hidden md:block'>
  <div className="flex md:order-2 md:pl-64">
    
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block md:w-[10vw] lg:w-[20vw] p-4 pl-20 text-sm bg-secondary rounded-3xl" placeholder="Search Here"/>
    </div>
    <ul className=' font-medium flex flex-col px-4 mt-4'>
      <li className='text-priamry'> Other Menus  </li>
    </ul>
    <ul className='flex  p-4 space-x-6 flex-wrap'>
      <li > <div className='relative'> <img src={bell.src} alt="" className='w-5'/> 
      <span className="absolute bg-[#5ECFFF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">12</span></div>
      </li>
      <li > <div className='relative'> <img src={vl.src} alt="" className='w-5'/> 
      <span className="absolute bg-[#5ECFFF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">12</span></div>
      </li>
      <li > <div className='relative'> <img src={checkbox.src} alt="" className='w-5'/> 
      <span className="absolute bg-[#5ECFFF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">12</span></div>
      </li>
      <li > <div className='relative'> <img src={office.src} alt="" className='w-5'/> 
      <span className="absolute bg-[#E328AF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">!</span></div>
      </li>
     
     
    </ul>
    <LanguageDropDown/>
    <div className='flex px-1 lg:px-10 space-x-2'>
      <img src={pf.src} alt='' className='w-6 h-6 lg:w-10 lg:h-10 '/>
      <div>
        <h3 className='text-white text-sm  lg:text-base'>Instructor Day</h3>
        <p className=' text-blue-600 text-xs lg:text-sm'>Super Admin</p>
      </div>
    </div>
    </div>
    

   
    
  </div>

  {/* mobile nav bar */}
  <div className='md:hidden'>
    <MobileNav/>

  </div>


 
    
  </div>
</nav>

      
    </>
  )
}


