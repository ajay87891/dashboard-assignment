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
import arrow from '../public/icons/arrow.png'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'


export default function Navbar({setSidebarOpen}) {
  return (
    <>
    
<nav className="bg-bg ">
  <div className="max-w-[100vw] flex flex-wrap  mx-auto px-4 py-1.5">
  <div className=' w-full'>
    <div className="flex lg:justify-end justify-between items-center w-full">
      <div className='lg:hidden flex items-center justify-center '>
      <button
              type="button"
              className=" h-8 w-8 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset "
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        <h1 className='text-xl text-white'>weframetech</h1>
      </div>

  <div className="lg:flex  md:pl-52 items-center justify-center hidden">
    
    <div className="relative ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none my-2">
        <svg className="w-4 h-4 text-gray-500  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block  lg:w-[20vw] p-4 py-2 pl-10 text-sm bg-secondary rounded-3xl xl:text-base lg:text-sm" placeholder="Search here"/>
    </div>
    <ul className=' font-medium flex lg:px-2 xl:px-4 justify-center items-center'>
      <li className='text-priamry underline lg:text-sm 2xl:text-xl'> Other Menus  </li>
    </ul>
    <ul className='flex  p-4 lg:space-x-6  2xl:space-x-8'>
      <li > <div className='relative'> <img src={bell.src} alt="" className='w-5 h-5 xl:w-8 xl:h-8'/> 
      <span className="absolute bg-[#5ECFFF] text-white font-bold w-4 h-4 xl:h-5 xl:w-5 text-xs  rounded-full -top-2 -right-2 xl:-top-3 xl:-right-3 flex xl:text-xs text-[7px] items-center justify-center">12</span></div>
      </li>
      <li > <div className='relative'> <img src={vl.src} alt="" className='w-5 h-5 xl:w-8 xl:h-8'/> 
      <span className="absolute bg-[#5ECFFF] text-white font-bold w-4 h-4 xl:h-5 xl:w-5  rounded-full -top-2 -right-2 xl:-top-3 xl:-right-3 xl:text-xs text-[7px]  flex items-center justify-center">12</span></div>
      </li>
      
      <li > <div className='relative'> <img src={checkbox.src} alt="" className='w-5 h-5 xl:w-8 xl:h-8'/> 
      <span className="absolute bg-[#5ECFFF] text-white font-bold w-4 h-4 xl:h-5 xl:w-5 xl:text-xs text-[7px]  rounded-full -top-2 -right-2 xl:-top-3 xl:-right-3  flex items-center justify-center">12</span></div>
      </li>
      <li > <div className='relative'> <img src={office.src} alt="" className='w-5 h-5 xl:w-8 xl:h-8'/> 
      <span className="absolute bg-[#E328AF] text-white font-bold w-4 h-4 xl:h-5 xl:w-5 xl:text-xs text-[7px]  rounded-full -top-2 -right-2 xl:-top-3 xl:-right-3  flex items-center justify-center">!</span></div>
      </li>
     
     
    </ul>
    <LanguageDropDown/>
    </div>

    <div className='flex px-1 lg:px-2 xl:px-10 2xl:px-16 space-x-2 border-l-[1px] mx-2'>
      <img src={pf.src} alt='' className='w-6 h-6 xl:w-10 xl:h-10 '/>
      <div>
        <h3 className='text-white xl:text-lg  lg:text-[9px]'>Instructor Day</h3>
        <p className=' text-blue-600 xl:text-sm lg:text-[9px]'>Super Admin</p>

      </div>
      <div className=' flex items-center justify-center'>
      <img src={arrow.src} alt='' className='w-3 h-2 xl:w-4 xl:h-3'/></div>
    </div>
    </div>
    
   



    </div>
    

   
    
  

  {/* mobile nav bar */}
  {/* <div className='md:hidden'>
    <MobileNav/>

  </div> */}


 
    
  </div>
</nav>

      
    </>
  )
}


