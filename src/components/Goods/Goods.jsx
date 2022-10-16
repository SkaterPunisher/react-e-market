import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../features/initialGoods/initialGoodsSlice';
import Spinner from '../../ui/Spinner/Spinner';
import MoreGoodsBtn from '../../ui/Button/MoreGoodsBtn/MoreGoodsBtn';
import AddCardBtn from '../../ui/Button/AddCardBtn/AddCardBtn';
import OneGood from './OneGood/OneGood';

const Goods = () => {
  const loading = useSelector((state) => state.initialGoods.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <OneGood />
      <div className='text-center'>
        <MoreGoodsBtn />
      </div>
    </>
  );
};

export default Goods;
