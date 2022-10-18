import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../ui/Spinner/Spinner';
import { useGetSingleUserQuery } from '../redux/goodsApi';

const LkPage = () => {
  const user = useSelector((state) => state.users.lkUser);
  const { data = [], isLoading } = useGetSingleUserQuery(user.id);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div>Личный кабинет: {data.name}</div>
      <div>Колличество товаров в корзине: {data.basket.item.length}</div>
    </div>
  );
};

export default LkPage;
