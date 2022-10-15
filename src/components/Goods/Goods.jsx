import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods, getMoreGoods } from '../../features/initialGoods/initialGoodsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Goods = () => {
  const goods = useSelector((state) => state.initialGoods.goods);
  const loading = useSelector((state) => state.initialGoods.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, []);

  const handleMoreGoods = () => {
    dispatch(getMoreGoods())
  }

  if (loading) {
    return (
      <p className='text-Black flex justify-center items-center w-full text-[50px]'>
        loading...
      </p>
    );
  }

  return (
    <>
      <div>
        {goods?.map((item) => {
          const { id, title, price } = item;
          return (
            <Link key={uuidv4()} to={`/goods/${id}`}>
              <div key={uuidv4()} className='border-2 border-black p-2'>
                <h1>{id}</h1>
                <h2>{title}</h2>
                <h2>{price}</h2>
              </div>
            </Link>
          );
        })}
      </div>
      <button onClick={handleMoreGoods} className='border-4 px-6 py-2 text-black'>Показать еще</button>
    </>
  );
};

export default Goods;
