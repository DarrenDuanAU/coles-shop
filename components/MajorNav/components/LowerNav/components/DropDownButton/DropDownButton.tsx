'use client'

import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { tab } from '../../LowerNav';

const DropDownButton = ( { items }: { items: tab[] }) => {
  const [dropDownMenuVisiable, setDropDownMenuVisiable] = useState(false);

  useEffect(() => {
    if(dropDownMenuVisiable === true) {
      const handleDocumentClick = () => {
        setDropDownMenuVisiable(false)
      };
      document.addEventListener('click', handleDocumentClick);
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [dropDownMenuVisiable]);

  return (
    <div className='relative'>
      <button 
        className='flex items-center gap-2 p-4 rounded hover:bg-slate-100'
        onClick={() => setDropDownMenuVisiable(true)}>
          More
        <IoIosArrowDown/>
      </button>
      {dropDownMenuVisiable &&
        <div className='bg-white absolute top-16 border rounded shadow-xl p-2'>
          {items.map((tab) => (
            <button key={tab.name} className='p-4 whitespace-nowrap rounded hover:bg-slate-100'>{tab.name}</button>
          ))}
        </div>
      }
    </div>
  )
}

export default DropDownButton;
