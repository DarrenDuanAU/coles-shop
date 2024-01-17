import React from 'react'
import { LuLayoutGrid } from "react-icons/lu";

const MoreFromColesButton = () => {
  return (
    <button className='flex flex-col items-center hover:bg-slate-100 p-2 hover:underline'>
      <LuLayoutGrid size='20'/>
      <span className='text-sm'>More from Coles</span>
     
    </button>
  )
}

export default MoreFromColesButton