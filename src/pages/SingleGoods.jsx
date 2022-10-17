import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getGood } from '../redux/features/initialGood/goodSlice';
import { Link } from 'react-router-dom';
import Spinner from '../ui/Spinner/Spinner';

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
      <Spinner />
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
