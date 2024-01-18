import React from 'react';
import { FooterSection } from '../../Footer';

const FooterSectionContainer = ( { data } : { data : FooterSection } ) => {
  return (
    <div>
      <div className='py-4'>
        {data.name}
      </div>
      <div className='flex flex-col gap-4'>
        {data.links.map((link) => 
          <a href={link.href} className='hover:underline'>
          {link.name}
          </a>)}
      </div>
    </div>
  )
}

export default FooterSectionContainer;
