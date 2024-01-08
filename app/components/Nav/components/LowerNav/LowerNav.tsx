import React from 'react'

const LowerNav = () => {
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
    <div className='flex justify-between px-8 py-2'>
      <div className='space-x-2'>
        {TABS.map((tab) => (
          <button className='p-4 rounded hover:bg-slate-100'>{tab.name}</button>
        ))}
      </div>
      <button className='border rounded-full px-4'>When</button>
    </div>
  )
}

export default LowerNav;
