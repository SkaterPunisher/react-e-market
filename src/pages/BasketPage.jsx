import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../redux/goodsApi';
import Spinner from '../ui/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';

const BasketPage = () => {
  const user = useSelector((state) => state.users.lkUser);

  const { data = [], isLoading } = useGetUsersQuery(user.id);
  let result = data.find((item) => item.id == user.id)

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className='text-[30px] font-[700]'>Товары в корзине</h1>
      {result.basket.item?.map((item) => {
        const { id, col, sum } = item;
        return (
          <div className='border-2 border-black' key={uuidv4()}>
            <h2>ID: {id}</h2>
            <h2>COL: {col}</h2>
            <h2>SUM: {sum}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BasketPage;
