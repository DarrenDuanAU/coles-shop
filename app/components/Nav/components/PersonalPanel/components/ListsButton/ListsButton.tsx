import React from 'react'
import { LuClipboardList } from "react-icons/lu";
const ListsButton = () => {
  return (
    <div className='flex flex-col items-center'>
      <LuClipboardList size='20'/>
      <span className='text-sm'>Lists</span>
    </div>
  )
}

export default ListsButton