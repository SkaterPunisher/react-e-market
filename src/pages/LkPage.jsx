import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../ui/Spinner/Spinner';
import { useGetSingleUserQuery } from '../redux/goodsApi';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const LkPage = () => {
  const user = useSelector((state) => state.users.lkUser);
  const { data = [], isLoading } = useGetSingleUserQuery(user.id);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className='text-[40px] text-center'>Личный кабинет: {data.name}</div>
      <div>Колличество товаров в корзине: {data.basket.item.length}</div>
      <div className='flex'>
        <div className='w-[30%]'>
          <ul>
            <li>
              <Link to='history'>История заказов</Link>
            </li>
            <li>
              <Link to='about'>Информация о пользователе</Link>
            </li>
          </ul>
        </div>
        <div className='w-[70%]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LkPage;
