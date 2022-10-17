import React from 'react';
import { useDispatch } from 'react-redux';
import { getMoreGoods } from '../../../redux/features/initialGoods/initialGoodsSlice';

const MoreGoodsBtn = () => {
  const dispatch = useDispatch();
  const handleMoreGoods = () => {
    dispatch(getMoreGoods());
  };

  return (
    <button onClick={handleMoreGoods} className='border-2 px-6 py-1 mb-4 rounded-3xl hover:bg-slate-200 duration-200'>
      Показать еще
    </button>
  );
};

export default MoreGoodsBtn;
