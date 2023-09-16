import React from "react";
import companylogo from "../../public/icons/companyLogo.png";
import user from "../../public/icons/user.png";
import btnback from "../../public/icons/btnback.png";

const Statuscard = () => {
  return (
    <div className="md:ml-72 mr-10 bg-bg pt-10 flex border-0 rounded-lg ">
        <div className="flex flex-col w-full px-7">
             <div className="flex justify-between w-full">
        <div className="flex items-center justify-center space-x-2">
          <img src={btnback.src} alt="" />
          <div>
          <h2 className="text-white">School November Tasks</h2>
          <p className="text-[#A5A5A5] text-sm">Created by Instructor Day on November 31, 2022</p>
          </div>
         
        </div>
        <div className="flex space-x-1">
          <div className="flex flex-col pt-4">
            <h3 className="text-white">Centered Martial Arts</h3>
            <p className="text-[#A5A5A5] text-sm"> Sunnyvale, Ca</p>
          </div>
          <div>
            <img src={companylogo.src} className="w-15" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex items-center justify-center space-x-2">
            <img src={user.src} alt="" className="w-24"/>
            <button type="button" class="text-white bg-[#7879F1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2 mr-2 mb-2 focus:outline">Edit</button>

        </div>

      </div>



      </div>
    </div>
  );
};

export default Statuscard;
