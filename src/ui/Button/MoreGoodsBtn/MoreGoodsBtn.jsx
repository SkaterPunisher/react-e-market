import React from 'react';

const MoreGoodsBtn = ({ onClick }) => {

  return (
    <button onClick={onClick} className='border-2 px-6 py-1 mb-4 rounded-3xl hover:bg-slate-200 duration-200'>
      Показать еще
    </button>
  );
};

export default MoreGoodsBtn;
