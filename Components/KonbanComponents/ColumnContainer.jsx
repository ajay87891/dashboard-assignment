"use client";
import React  from "react";
import addbtn from "../../public/icons/btnAdd.png";
import TaskContainer from "./TaskContainer";
import NullContainer from "./NullContainer";

const ColumnContainer = ({ data, title, number }) => {
//   const [Taskdata, setData] = useState(null);
//   useEffect(() => {
//     setData(data);
//   }, []);
  return (
    <div className=" min-h-[50vh] bg-background w-64 mt-5 rounded-lg ">
      <div className="flex justify-between w-full">
        <h2 className="text-white">{`${title} (${number})`}</h2>
        <button>
          <img src={addbtn.src} alt="" className="w-10" />
        </button>
      </div>
      <div className="w-full flex-col space-y-2">
        {
            data?"":<NullContainer></NullContainer>
        }
        {data?.map((item, index) => {
          return (
            <div key={index} className="">
              <TaskContainer
                title={item.title}
                heading={item.heading}
                time={item.time}
                colour={item.color}
                progress={item.progress}
                users={item.users}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnContainer;
