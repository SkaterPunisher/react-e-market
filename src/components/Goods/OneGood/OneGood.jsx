import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddGoodsBtn from '../../../ui/Button/AddGoodsBtn/AddGoodsBtn';

const OneGood = ({ data }) => {
  const user = useSelector((state) => state.users.lkUser);

  return (
    <div className='p-4 flex flex-wrap gap-4 justify-center '>
      {data?.map((item) => {
        const { id, title, price, description, images } = item;
        return (
          <div
            key={uuidv4()}
            className='border-2 border-black p-4 w-[300px] h-[300px] hover:scale-105 duration-200'
          >
            <Link key={uuidv4()} to={`/goods/${id}`}>
              <img src={images[0]} alt={title} className='object-cover' />
              <h2 className='text-center mt-2'>{title}</h2>
            </Link>
            <div>
              <div className='flex justify-between items-center'>
                <h2 className='m-0 text-[15px] font-bold'>
                  {price} <span className='m-0'>₽</span>
                </h2>

                <AddGoodsBtn text={'Добавить'} id={id} goods={item} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneGood;
