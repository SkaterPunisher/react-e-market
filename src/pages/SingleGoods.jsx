import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../ui/Spinner/Spinner';
import { useGetSingleGoodsQuery } from '../redux/goodsApi';

const SingleGoods = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.users.auth);

  const { data = [], isLoading } = useGetSingleGoodsQuery(id);
  const { title, price } = data;

  if (isLoading) return <Spinner />;

  const goBack = () => navigate('/goods');

  return (
    <>
      <button onClick={goBack} className='border-4 px-6 py-2 text-black'>
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
