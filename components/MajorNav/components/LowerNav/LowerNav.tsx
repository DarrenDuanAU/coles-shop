'use client'

import React, { useEffect, useState } from 'react'
import DropDownButton from './components/DropDownButton/DropDownButton';
import { LuMilk } from "react-icons/lu";

export interface tab {
  name: string;
  href: string;
}

const TABS : tab[]= [
  {name: 'Bought before', href: '/'},
  {name: 'Specials', href: '/'},
  {name: 'Catalogues', href: '/'},
  {name: 'Offers & promotions', href: '/'},
  {name: 'Recipes & inspiration', href: '/'},
  {name: 'Coles plus', href: '/'},
  {name: 'Contact us', href: '/'},
]

const LowerNav = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  const ShortNavItemsNum = 3;
  
  return (
    <div className='flex justify-between px-8 py-2'>
      <div className='flex gap-2'>
        {/* {windowWidth} */}
        <button className='flex items-center gap-2 p-4 rounded hover:bg-slate-100'>
          <LuMilk size='20' color='#e81c24'/>
          <span className='font-semibold'>Shop products</span>
        </button>
        {windowWidth > 1300 &&
          TABS.map((tab) => (
          <button key={tab.name} className='p-4 rounded hover:bg-slate-100'>{tab.name}</button>
        ))}
        {windowWidth <= 1300 &&
        <div className='flex'>
          {TABS.slice(0,ShortNavItemsNum).map((tab) => (
              <button key={tab.name} className='p-4 rounded hover:bg-slate-100'>{tab.name}</button>
            ))}
          <DropDownButton items={TABS.slice(ShortNavItemsNum)}/>
        </div>
        }
      </div>
      <button className='border rounded-full px-4'>When</button>
    </div>
  )
}

export default LowerNav;
