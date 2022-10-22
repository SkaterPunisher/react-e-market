import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd';
import { useChangeSingleGoodsMutation, useGetSingleGoodsQuery } from '../../redux/goodsApi';
import Spinner from '../../ui/Spinner/Spinner';

const FormEdidGoods = ({ id }) => {
  const successChange = () => {
    message.success('Товар отредактирован!', [1]);
  };
  const { data: goods = [] } = useGetSingleGoodsQuery(id);
  const [changeGoods, isLoading] = useChangeSingleGoodsMutation();

  const handleSubmit = async (e) => {
    successChange();
    e.preventDefault();
    e.stopPropagation();
    let title = e.target.title.value == '' ? goods.title : e.target.title.value;
    let description =
      e.target.description.value == ''
        ? goods.description
        : e.target.description.value;
    let price = e.target.price.value == '' ? goods.price : Number(e.target.price.value);
    await changeGoods({
      idGoods: goods.id,
      newTitle: title,
      newPrice: price,
      newDescription: description,
    }).unwrap();
    e.target.title.value = '';
    e.target.description.value = '';
    e.target.price.value = '';
  };

  if (!isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full border-2 p-6'>
      <h1 className='m-0 mb-2 cursor-default'>
        ID: <span className='text-gray-400'>{goods.id}</span>
      </h1>
      <label className='mb-2'>
        TITLE:
        <input
          type='text'
          name='title'
          className='w-full bg-slate-100 px-6 py-2 rounded-full'
          placeholder={goods.title}
        />
      </label>
      <label className='mb-2'>
        PRICE:
        <input
          type='text'
          name='price'
          className='w-full bg-slate-100 px-6 py-2 rounded-full'
          placeholder={goods.price}
        />
      </label>
      <label className='mb-2'>
        DESCRIPTION:
        <input
          type='text'
          name='description'
          className='w-full bg-slate-100 px-6 py-2 rounded-full'
          placeholder={goods.description}
        />
      </label>
      <h1 className='mb-2 cursor-default'>
        CATEGORY:{' '}
        <span className='uppercase text-gray-400'>{goods.category}</span>
      </h1>
      {/* {goods.images.map((item) => {
            return (
              <label key={uuidv4()} className='mb-2'>
                URL изображения:
                <input
                  type='text'
                  className='w-full bg-slate-100 px-6 py-2 rounded-full'
                  placeholder={item}
                />
              </label>
            );
          })} */}
      <button className='bg-green-300 px-6 py-2 rounded-full'>Изменить</button>
    </form>
  );
};

export default FormEdidGoods;
