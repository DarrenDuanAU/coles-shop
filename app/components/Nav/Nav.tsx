'use client'

import React, { useEffect, useState } from 'react';
import PersonalPanel from './components/PersonalPanel';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import CartButton from './components/CartButton';
import LowerNav from './components/LowerNav';

const Nav = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 50;
      setIsAtTop(scrollTop < threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  return (
    <div className='fixed w-full border-b'>
      <div className='flex w-full h-20 items-center gap-6 px-6'>
        <Logo/>
        <SearchBar />
        <PersonalPanel />
        <CartButton />
      </div>
      {isAtTop &&
        <LowerNav />
      }
    </div>
  )
}

export default Nav;
