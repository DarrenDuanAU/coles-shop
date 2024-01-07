import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  return (
    <button className='border flex px-4 py-2 rounded-full'>
      <LuShoppingCart size='20'/>
      <span>$0.00</span>
    </button>
  )
}

export default CartButton;
