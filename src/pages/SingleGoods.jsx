import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getGood } from '../features/goodSlice/goodSlice';

const SingleGoods = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const good = useSelector((state) => state.good.good);
  const loading = useSelector((state) => state.good.loading);

  useEffect(() => {
    dispatch(getGood(id));
  }, []);

  const { title, price } = good;

  if (loading) {
    return (
      <p className='text-Black flex justify-center items-center w-full text-[50px]'>
        loading...
      </p>
    );
  }

  return (
    <div>
      {id}, {title}, {price},
    </div>
  );
};

export default SingleGoods;
