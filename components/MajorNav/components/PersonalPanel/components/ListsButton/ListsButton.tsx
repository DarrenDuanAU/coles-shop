import React from 'react'
import { LuClipboardList } from "react-icons/lu";
const ListsButton = () => {
  return (
    <button className='flex flex-col items-center hover:bg-slate-100 p-2 hover:underline'>
      <LuClipboardList size='20'/>
      <span className='text-sm'>Lists</span>
    </button>
  )
}

export default ListsButton