import React from 'react'
import { VscAccount } from "react-icons/vsc";

const AccountButton = () => {
  return (
    <div className='flex flex-col items-center hover:bg-slate-100 p-2 hover:underline'>
      <VscAccount size='20'/>
      <span className='text-sm'>Account</span>
    </div>
  )
}

export default AccountButton;
