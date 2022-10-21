import React from 'react';

const SearchTitle = () => {
  return (
    <div className='flex justify-center'>
      <input
        className='bg-gray-100 w-[90%] px-6 py-2 rounded-full mt-2 mb-4'
        placeholder='Поиск по названию товара'
      />
    </div>
  );
};

export default SearchTitle;
