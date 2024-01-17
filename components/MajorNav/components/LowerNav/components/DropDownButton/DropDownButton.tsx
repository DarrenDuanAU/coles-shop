import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const DropDownButton = () => {
  return (
    <button className='flex items-center gap-2 p-4 rounded hover:bg-slate-100'>
      More
      <IoIosArrowDown/>
    </button>
  )
}

export default DropDownButton;
