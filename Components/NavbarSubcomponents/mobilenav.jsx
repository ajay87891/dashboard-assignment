"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import LanguageDropDown from "./langugeDropdown";
import bell from "../../public/icons/bell.png";
import office from "../../public/icons/office.png";
import checkbox from "../../public/icons/checkbox.png";
import vl from "../../public/icons/vl.png";

export default function MobileNav() {
  return (
    <div className="  w-full max-w-[100vw] ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-bg px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Solutions</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
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
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4">
                      <li className="text-priamry"> Other Menus </li>
                    </ul>
                    <ul className="flex  p-4 space-x-2 ">
                      <li>
                        {" "}
                        <img src={bell.src} alt="" className="w-5" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src={vl.src} alt="" className="w-5" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src={checkbox.src} alt="" className="w-5" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src={office.src} alt="" className="w-5" />{" "}
                      </li>
                    </ul>
                    <LanguageDropDown />
                  </div>
                  <div className="bg-gray-50 p-4"></div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
