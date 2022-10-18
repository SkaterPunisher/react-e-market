import React from 'react'
import { MdRemove } from "react-icons/md";

const DecrementGoodsBtn = () => {
  return (
    <button className='mr-2 border-2 p-2 rounded-3xl bg-gray-200 hover:bg-gray-400 hover:text-white duration-200'><MdRemove /></button>
  )
}

export default DecrementGoodsBtn