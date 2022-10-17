import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getGoods } from '../../redux/features/initialGoods/initialGoodsSlice';
import Spinner from '../../ui/Spinner/Spinner';
import MoreGoodsBtn from '../../ui/Button/MoreGoodsBtn/MoreGoodsBtn';
import OneGood from './OneGood/OneGood';
import { useGetGoodsQuery } from '../../redux/goodsApi';

const Goods = () => {
  // const loading = useSelector((state) => state.initialGoods.loading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getGoods());
  // }, []);

  const [limit, setLimit] = useState(10);
  const { data = [], isLoading } = useGetGoodsQuery(limit);

  const onClick = () => {
    setLimit((prev) => prev + 10);
  };

  if (isLoading) return <Spinner />;

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
