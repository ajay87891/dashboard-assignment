'use client'
import React, { useEffect, useState } from 'react'
import Statuscard from './KonbanComponents/Statuscard'
import ColumnContainer from './KonbanComponents/ColumnContainer'
import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'

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
        heading:"",
        time:6,
        progress:80,
        title: "List admin APIs for dashboard",
        color:"black",
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
        users:[1,2,3,4]
      },
      {
        id: "1",
        heading:"",
        time:4,
        progress:30,
        title: "List admin APIs for dashboard",
        color:"white",
        users:[1,2,3]
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
    <div className='bg-background min-h-[100vh] min-w-full pt-10'>

        <Statuscard/>
        <DndContext>
        <div className=" ml-4 md:ml-72 flex space-x-4 flex-wrap">
        <ColumnContainer title="To-Do List" number={23} data={todo} />
        <ColumnContainer title="In Progress" number={2} data={doing} />
        <ColumnContainer title="Done" number={3} data={done}/>
        <ColumnContainer title="Revised" number={0} data={revised} />
        <ColumnContainer title="Completed Project" number={3} data={todo} />
        
        </div></DndContext>
        

      
    </div>
  )
}

export default Kanban
