import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getGood } from '../features/initialGood/goodSlice';
import { Link } from 'react-router-dom';

const SingleGoods = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const good = useSelector((state) => state.good.good);
  const loading = useSelector((state) => state.good.loading);
  const auth = useSelector((state) => state.users.auth);

  useEffect(() => {
    dispatch(getGood(id));
  }, [id]);

  if (loading) {
    return (
      <p className='text-Black flex justify-center items-center w-full text-[50px]'>
        loading...
      </p>
    );
  }

  const goBack = () => navigate('/goods');

  const { title, price } = good;
  return (
    <>
      <button
        onClick={goBack}
        className='border-4 px-6 py-2 text-black'
      >
        Вернуться назад
      </button>
      <div>
        {id}, {title}, {price},
      </div>

      {auth ? <Link to={`/goods/${id}/edit`}>Редактировать товар</Link> : ''}
    </>
  );
};

export default SingleGoods;
