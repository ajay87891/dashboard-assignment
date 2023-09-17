'use client'
import { icons } from '@/public/icons'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'

import bell from './../public/icons/bell.png'
import office from './../public/icons/office.png'
import checkbox from './../public/icons/checkbox.png'
import vl from './../public/icons/vl.png'


const navigation = [
  { name: 'Dashboard', href: '#', icon: icons.dashboard, current: false },
  { name: 'Email', href: '#', icon: icons.email, current: false },
  { name: 'Chat', href: '#', icon: icons.chat, current: false },
  { name: 'Kanban', href: '#', icon: icons.kanban, current: true },
  { name: 'Calender', href: '#', icon: icons.calender, current: false },
  { name: 'Courses', href: '#', icon: icons.courses, current: false },
  { name: 'Shop', href: '#', icon: icons.shop, current: false },
  { name: 'Invoices', href: '#', icon: icons.invoices, current: false },
  { name: 'Settings', href: '#', icon: icons.settings, current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({sidebarOpen,setSidebarOpen}) {
  // const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
     
      <div className=''>
        {/* {mobile sidebar} */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              
              <div className="relative flex-1 flex flex-col max-w-xs w-full px-3 bg-bg">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0  pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex items-center justify-start py-3">
                    <h2 className='text-white text-[18px] px-2'>
                    weframetech
                    </h2>
                  </div>
                  <div className="flex-1 h-8 pt-5 pb-4 overflow-y-auto no-scrollbar">

                  <div className="relative ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none my-2">
        <svg className="w-4 h-4 text-gray-500  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block  lg:w-[20vw] p-4 py-2 pl-10 text-sm bg-secondary rounded-3xl xl:text-base lg:text-sm" placeholder="Search here"/>
    </div>



                  <ul className='flex  p-4  space-x-8'>
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
                
                  
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <div 
                          className={classNames(
                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        > <item.icon/></div>
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex  p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                       
                      <img src={icons.banner.src} alt="" className=" w-40" />
                       
                      </div>
                     
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* sidebar for desktop */}
        <div className="hidden lg:flex md:w-52 lg:flex-col lg:fixed lg:inset-y-0 ">
         
          <div className="flex-1 flex flex-col min-h-0 bg-bg">
            <div className="flex-1 flex flex-col  pb-4 overflow-y-auto no-scrollbar">
              <div className="flex items-center justify-center pt-4">


                <h2 className='text-white lg:text-sm xl:text-lg 2xl:text-2xl font-normal'>weframetech</h2>
              </div>
              <div>
              
              <nav className="mt-4 xl:mt-5 flex-1 px-2 space-y-1">
              <h3 className='text-white font-openSans  xl:text-sm px-2 2xl:text-lg'>MAIN MENU</h3>


                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? ' text-priamry border-0 border-r-4 border-priamry ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium '
                    )}
                  >
                    <div
                      className={classNames(
                        item.current ? 'fill-priamry' : ' group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    >
                      <item.icon/>
                    </div>
                    {item.name}
                  </a>
                ))}



              </nav>
              </div>
            </div>
            <div className="flex-shrink-0 flex  p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                   <img src={icons.banner.src} alt="" className="w-40" />
                  </div>
                
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className="fixed top-[14px] z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            {/* <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset "
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button> */}
          </div>
         
        </div>
      </div>
    </>
  )
}
