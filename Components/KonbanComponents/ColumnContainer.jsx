import React from 'react'
import addbtn from '../../public/icons/btnAdd.png'

const ColumnContainer = (props) => {
  return (
    <div className=' min-h-[50vh] bg-background w-64 mt-5 rounded-lg '>
        <div className="flex justify-between w-full">
        <h2 className='text-white'>{`${props.title} (${props.number})`}</h2>
        <button><img src={addbtn.src} alt='' className='w-10'/></button>
        </div>
        
      
    </div>
  )
}

export default ColumnContainer
