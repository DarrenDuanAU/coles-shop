import React from 'react';
import PersonalPanel from './components/PersonalPanel';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import CartButton from './components/CartButton';

const Nav = () => {
  return (
    <div className='flex h-20 items-center border-b-2 gap-6 px-6'>
      <Logo/>
      <SearchBar />
      <PersonalPanel />
      <CartButton />
    </div>
  )
}

export default Nav