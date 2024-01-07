import React from 'react'
import { VscAccount } from "react-icons/vsc";

const AccountButton = () => {
  return (
    <div className='flex flex-col items-center'>
      <VscAccount size='20'/>
      <span className='text-sm'>Account</span>
    </div>
  )
}

export default AccountButton;
