'use client'

import React, { useEffect, useState } from 'react';
import PersonalPanel from './components/PersonalPanel';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import CartButton from './components/CartButton';
import LowerNav from './components/LowerNav';
import classNames from 'classnames';

const MajorNav = () => {
  const [distToTop, setDistToTop] = useState(0);
  const threshold = 50;
  useEffect(() => {
    const handleScroll = () => {
      setDistToTop(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  return (
    <div className='fixed w-full'>
      <div className={
        classNames(
          'w-full transition border-b bg-white', 
          {'translate-y-20': distToTop <= 50}, 
          {'-translate-y-20': distToTop > 50}, 
        )}>
          <LowerNav />
      </div>
      <div className='flex w-full h-20 items-center gap-6 px-6 bg-white -translate-y-20'>
        <Logo/>
        <SearchBar />
        <PersonalPanel />
        <CartButton />
      </div>
    </div>
  )
}

export default MajorNav;
