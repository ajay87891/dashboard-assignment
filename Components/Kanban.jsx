'use client'
import React, { useEffect, useState } from 'react'
import Statuscard from './KonbanComponents/Statuscard'
import ColumnContainer from './KonbanComponents/ColumnContainer'
// import {DndContext} from '@dnd-kit/core'


const todo=[
    {
        id: "1",
        heading:"important",
        time:2,
        progress:60,
        title: "Create sign up sheet for holiday student/parent conferences.",
        color:"red",
        users:[1,2,3,4]
      },
      {
        id: "1",
        heading:"",
        time:4,
        progress:30,
        title: "List admin APIs for dashboard",
        color:"white",
        users:[1,2,3,4,5]
      },
      {
        id: "1",
        heading:"BUGS FIXING",
        time:6,
        progress:80,
        title: "Payment gateway needs reauthorization.",
        color:"Yellow",
        users:[1,2]
      },
]

const doing=[
    {
        id: "1",
        heading:"video",
        time:2,
        progress:70,
        title: "Create sign up sheet for holiday student/parent conferences.",
        color:"yellow",
        users:[1,2,3,4],
        rotate:false
      },
      {
        id: "1",
        heading:"BUG FIXING",
        time:4,
        progress:30,
        title: "Payment gateway needs reauthorization.",
        color:"Yellow",
        users:[1,2,3],
        rotate:true
      },
    ]
      
    const done=[
        {
            id: "1",
            heading:"video",
            time:2,
            progress:70,
            title: "Create sign up sheet for holiday student/parent conferences.",
            color:"pink",
            users:[1,2,3,4]
          },
    ]
    
    const revised= null;
         

const Kanban = () => {
    
   
   
    
  return (
    <div className='bg-background min-h-[100vh]  pt-5'>

        <Statuscard/>
       
        <div className=" ml-4 lg:ml-64 overflow-scroll  ">
          <div className='grid grid-cols-5  min-w-[1500px]'>
        <ColumnContainer title="To-Do List" number={23} data={todo} />
        <ColumnContainer title="In Progress" number={2} data={doing} />
        <ColumnContainer title="Done" number={3} data={done}/>
        <ColumnContainer title="Revised" number={0} data={revised} />
        <ColumnContainer title="Completed Project" number={3} data={todo} />
        </div>
        
        </div>
        

      
    </div>
  )
}


export default Kanban
