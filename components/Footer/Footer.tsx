import React from 'react'
import FooterSectionContainer from './components/FooterSectionContainer';

const FOOTER_META_DATA : FooterSection []= [
  {
    name: 'Customer help',
    links: [
      { name: 'Contact us', href: '/' },
      { name: 'Help Centre', href: '/' },
      { name: 'Staying safe online', href: '/' },
      { name: 'Product recalls', href: '/' },
      { name: 'Accessibility', href: '/' },
    ]
  },
  {
    name: 'Useful links',
    links: [
      { name: 'Stores near you', href: '/' },
      { name: 'Browse Products', href: '/' },
      { name: 'Coles magazines', href: '/' },
      { name: 'Gift cards', href: '/' },
      { name: 'Coles Radio', href: '/' },
    ]
  },
  {
    name: 'About Coles',
    links: [
      { name: 'introducing us', href: '/' },
      { name: 'Our brands', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Our history', href: '/' },
      { name: 'Sustainability at Coles', href: '/' },
      { name: 'Media releases', href: '/' },
      { name: 'Investor information', href: '/' },
      { name: 'How Flybuys works', href: '/' },
    ]
  }
]

export interface FooterSection { 
  name: string;
  links: {name: string, href: string}[];
}

const Footer = () => {
  return (
    <div className='space-y-2 p-8'>
      <h2 className='text-xl font-bold'>Shop your way at Coles</h2>
      <div className='flex gap-32'>
        {FOOTER_META_DATA.map(columnData => (
          <FooterSectionContainer data ={columnData} />
        ))}
      </div>
    </div>
  )
}

export default Footer;
