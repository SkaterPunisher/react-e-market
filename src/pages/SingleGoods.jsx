import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getGood } from '../features/initialGood/goodSlice';
import { Link } from 'react-router-dom';

const SingleGoods = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const good = useSelector((state) => state.good.good);
  const loading = useSelector((state) => state.good.loading);

  useEffect(() => {
    dispatch(getGood(id));
  }, [id]);

  const { title, price } = good;

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
        {id}, {title}, {price},
      </div>
      <Link to={`/goods/${id}/edit`}>Редактировать товар</Link>
    </>
  );
};

export default SingleGoods;
