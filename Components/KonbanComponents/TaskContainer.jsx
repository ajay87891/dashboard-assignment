"use client";
import React from "react";
import ich from "../../public/icons/icH.png";
import clock from "../../public/icons/clock.png";
import ProgressBar from "@ramonak/react-progress-bar";


const TaskContainer = (props) => {
  return (
    <div className="min-h-[200px] max-w-[272px] bg-[#07051A] rounded-lg relative ">
      <div className={`min-h-[200px] flex flex-col space-y-3 bg-secondary rounded-lg w-full h-full shadow-black shadow-lg ${props.rotate?"rotate-12 absolute top-4 left-8 ":" "} `}>
      
      <div className="flex justify-between pt-2">
        <div className="flex px-2 items-center justify-center space-x-2">
          <span
            style={{ backgroundColor: `${props.colour}` }}
            className="h-[8px] w-[8px] rounded-full"
          >
            {" "}
          </span>
          <p className="text-xs font-sans" style={{ color: `${props.colour}` }}>
            {props.heading}
          </p>
        </div>

        <button>
          {" "}
          <img src={ich.src} className="w-8 px-2" alt="" />
        </button>
      </div>
      <div className="text-white text-sm md:text-bas lg:text-base xl:text-lg px-3">
        {props.title}
      </div>
      <div className="px-3">
        <ProgressBar
          completed={props.progress}
          bgColor={props.colour}
          baseBgColor="#1E1C3A"
          isLabelVisible={false}
          height="7px"
        />
      </div>
      <div className="flex justify-between mt-4 mx-3">
        <div className="flex -space-x-2">
          {props.users?.map((item, index) => {
            return (
              <span
                key={index}
                className="h-7 w-7 rounded-full bg-gray-400 border-priamry border"
              ></span>
            );
          })}
        </div>
        <div className="flex items-center justify-center ">
            <img className="w-3" src={clock.src} alt=""/>
            <span className="text-xs text-gray-400 pl-1"> Due in {props.time} days</span>

        </div>
      </div>
      </div>
    </div>
  );
};

export default TaskContainer;
