import React, { useEffect, useState } from 'react';
import { addGoods } from '../../redux/features/initialGoods/initialGoodsSlice';
import Spinner from '../../ui/Spinner/Spinner';
import MoreGoodsBtn from '../../ui/Button/MoreGoodsBtn/MoreGoodsBtn';
import OneGood from './OneGood/OneGood';
import { useGetGoodsQuery } from '../../redux/goodsApi';
import { useDispatch, useSelector } from 'react-redux';

const Goods = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.initialGoods.limit);

  const { data = [], isLoading } = useGetGoodsQuery(limit);

  if (isLoading) return <Spinner />;

  const onClick = () => {
    dispatch(addGoods());
  };

  return (
    <>
      <OneGood data={data} />
      <div className='text-center'>
        <MoreGoodsBtn onClick={onClick} />
      </div>
    </>
  );
};

export default Goods;
