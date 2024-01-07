import React from 'react'
import AccountButton from './components/AccountButton';
import MoreFromColesButton from './components/MoreFromColesButton';
import ListsButton from './components/ListsButton';

const PersonalPanel = () => {
  return (
    <div className='flex gap-6'>
      <MoreFromColesButton />
      <AccountButton />
      <ListsButton />
    </div>
  )
}

export default PersonalPanel;
