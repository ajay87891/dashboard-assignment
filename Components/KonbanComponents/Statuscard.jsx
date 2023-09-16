'use client'
import React from "react";
import companylogo from "../../public/icons/companyLogo.png";
import user from "../../public/icons/user.png";
import btnback from "../../public/icons/btnback.png";
import invite from "../../public/icons/invite.png";
import chat from "../../public/icons/chat2.png";
import ProgressBar from "@ramonak/react-progress-bar";

const Statuscard = () => {
    const Percentage = 60; // Use as state



  return (
    <div className="md:ml-72 mx-2 md:mr-10 bg-bg pt-2 flex border-0 rounded-lg pb-10">
      <div className="flex flex-col w-full px-1 md:px-7">
        <div className="flex  justify-between w-full">
          <div className="flex items-center justify-center space-x-2">
            <img src={btnback.src} alt="" />
            <div>
              <h2 className="text-white text-sm lg:text-lg">School November Tasks</h2>
              <p className="text-[#A5A5A5] text-xs lg:text-base">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="flex flex-col pt-4">
              <h3 className="text-white text-sm lg:text-lg">Centered Martial Arts</h3>
              <p className="text-[#A5A5A5] text-xs lg:text-base"> Sunnyvale, Ca</p>
            </div>
            <div>
              <img src={companylogo.src} className="w-15" alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex flex-wrap  items-center justify-center space-y-2 space-x-2">
            <img src={user.src} alt="" className="w-24" />
            <button
              type="button"
              className="text-white bg-priamry hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2  focus:outline flex  space-x-1"
            >
              <img src={invite.src} className="w-4" alt="" />
              Invite People
            </button>
            
            <button className="relative inline-flex items-center justify-center bg-transparen p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  border-2 border-[#7879F1] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              <span className="relative px-2.5 py-1.5 transition-all ease-in duration-75  text-white rounded-md group-hover:bg-opacity-0">
                Private
              </span>
              
            </button>
            <button
              type="button"
              className="text-white bg-[#7879F1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2  focus:outline"
            >
              Edit
            </button>
            <button className="relative inline-flex items-center justify-center  bg-transparen px-1  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  border-2 border-[#7879F1] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              <img src={chat.src} alt="" className="w-4"/><span className="relative px-2.5 py-1.5  transition-all ease-in duration-75  text-white rounded-md group-hover:bg-opacity-0">
              45 Comments
              </span>
            </button>
          </div>

          <div className="flex space-x-2 flex-wrap flex-col md:flex-row  text-white">
            <h3>Total Progress</h3>
            <div className=" w-40 md:w-52 lg:w-72"><ProgressBar completed={60} /></div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Statuscard;
