import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AddGoodsBtn from '../../../ui/Button/AddGoodsBtn/AddGoodsBtn';
import { useSelector } from 'react-redux';

const MainInformation = ({ title, description, price, id, data }) => {
  const auth = useSelector((state) => state.users.auth);

  return (
    <div className='px-8 py-6 flex flex-col justify-center'>
      <h2 className='text-[40px] text-center'>{title}</h2>
      <h2>{description}</h2>
      <div className=''>
        <h2 className='text-[30px]'>{price} ₽</h2>
        <AddGoodsBtn text={'Добавить в корзину'} id={id} goods={data} />
        {auth ? (
          <Link to={`/goods/${id}/edit`} className='flex items-center mt-10'>
            <MdModeEdit />
            Редактировать товар
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MainInformation;
