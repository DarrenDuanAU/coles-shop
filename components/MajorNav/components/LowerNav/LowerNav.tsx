'use client'

import React, { useEffect, useState } from 'react'
import DropDownButton from './components/DropDownButton/DropDownButton';

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

  const TABS = [
    {name: 'Bought before', href: '/'},
    {name: 'Specials', href: '/'},
    {name: 'Catalogues', href: '/'},
    {name: 'Offers&promotions', href: '/'},
    {name: 'Recipes&inspiration', href: '/'},
    {name: 'coles plus', href: '/'},
    {name: 'contact us', href: '/'},
  ]

  return (
    <div className='flex justify-between px-8 py-2 ease-in-out duration-600'>
      <div className='space-x-2'>
        {/* {windowWidth} */}
        {windowWidth > 1300 &&
          TABS.map((tab) => (
          <button key={tab.name} className='p-4 rounded hover:bg-slate-100'>{tab.name}</button>
        ))}
        {windowWidth <= 1300 &&
        <div className='flex'>
          {TABS.slice(0,3).map((tab) => (
              <button key={tab.name} className='p-4 rounded hover:bg-slate-100'>{tab.name}</button>
            ))}
          <DropDownButton />
        </div>
        }
      </div>
      <button className='border rounded-full px-4'>When</button>
    </div>
  )
}

export default LowerNav;
