'use client'
import React from 'react'
import Statuscard from './KonbanComponents/Statuscard'
import ColumnContainer from './KonbanComponents/ColumnContainer'
import { DndContext } from '@dnd-kit/core'
import { SortableContext4 } from '@dnd-kit/sortable'


const Kanban = () => {
    
  return (
    <div className='bg-background min-h-[100vh] min-w-[100vw] pt-10'>

        <Statuscard/>
        <DndContext>
        <div className="ml-72 flex space-x-4 flex-wrap">
        <ColumnContainer title="To-Do List" number={24} />
        <ColumnContainer title="In Progress" number={2} />
        <ColumnContainer title="Done" number={3} />
        <ColumnContainer title="Revised" number={3} />
        <ColumnContainer title="Completed Project" number={3} />
        
        </div></DndContext>
        

      
    </div>
  )
}

export default Kanban
