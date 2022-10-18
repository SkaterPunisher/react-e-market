import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../redux/goodsApi';
import Spinner from '../ui/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';
import BasketItem from '../components/BasketItem/BasketItem';

const BasketPage = () => {
  const user = useSelector((state) => state.users.lkUser);

  const { data = [], isLoading } = useGetUsersQuery(user.id);
  let result = data.find((item) => item.id == user.id);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className='text-[30px] font-[700]'>Товары в корзине на сумму: {result.GeneralsumInBasket} ₽</h1>
      {result.basket.item?.map((item) => {
        const { id, title, price, img, col } = item;
        return (
          <BasketItem key={uuidv4()} id={id} title={title} price={price} img={img} col={col}/>
        );
      })}
    </div>
  );
};

export default BasketPage;
