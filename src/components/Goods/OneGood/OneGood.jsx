import React from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import AddCardBtn from '../../../ui/Button/AddCardBtn/AddCardBtn';

const OneGood = () => {
    const goods = useSelector((state) => state.initialGoods.goods);

  return (
    <div className='p-4 flex flex-wrap gap-4 justify-center '>
        {goods?.map((item) => {
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
                  <AddCardBtn text={'В корзину'} id={id} goods={item}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default OneGood