import React from 'react'

const AddButton = ({ onClick, text, type }) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className='border-2 px-6 py-1 rounded-3xl bg-green-100 hover:bg-green-300 duration-200'
  >
    {text}
  </button>
  )
}

export default AddButton