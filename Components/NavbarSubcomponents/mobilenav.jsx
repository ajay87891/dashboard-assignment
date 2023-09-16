"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import LanguageDropDown from "./langugeDropdown";
import bell from "../../public/icons/bell.png";
import office from "../../public/icons/office.png";
import checkbox from "../../public/icons/checkbox.png";
import vl from "../../public/icons/vl.png";
import pf from '../../public/icons/profilePicture.png'


export default function MobileNav() {
  return (
    <div className=" min-w-[100vw] flex justify-between items-center">
      <h2 className="md:hidden text-white pl-6 ">weframetech</h2>
      <div className="flex px-1 space-x-2">
        <img src={pf.src} alt="" className="w-10 h-10" />
        <div>
          <div>
            <h3 className="text-white text-xs sm:text-sm ">Instructor Day</h3>
            <p className=" text-blue-600 text-[9px] sm:text-xs">Super Admin</p>
          </div>
        </div>
        <Popover className="h-full">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-bg px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="text-sm">More</span>
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-secondary transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative flex flex-col bg-bg border-background p-7 lg:grid-cols-2 ">
                    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block md:w-[10vw] lg:w-[20vw] p-4 pl-20 text-sm bg-secondary rounded-3xl" placeholder="Search Here"/>
    </div>
                      <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4">
                        <li className="text-priamry"> Other Menus </li>
                      </ul>
                      <ul className="flex  p-4 space-x-6 flex-wrap">
                        <li>
                          {" "}
                          <div className="relative">
                            {" "}
                            <img src={bell.src} alt="" className="w-5" />
                            <span class="absolute bg-[#5ECFFF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">
                              12
                            </span>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="relative">
                            {" "}
                            <img src={vl.src} alt="" className="w-5" />
                            <span class="absolute bg-[#5ECFFF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">
                              12
                            </span>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="relative">
                            {" "}
                            <img src={checkbox.src} alt="" className="w-5" />
                            <span class="absolute bg-[#5ECFFF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">
                              12
                            </span>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="relative">
                            {" "}
                            <img src={office.src} alt="" className="w-5" />
                            <span class="absolute bg-[#E328AF] text-black font-bold px-2 py-1 text-[0.5rem]  rounded-full -top-4 -right-3">
                              !
                            </span>
                          </div>
                        </li>
                      </ul>
                      
                      <LanguageDropDown />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
