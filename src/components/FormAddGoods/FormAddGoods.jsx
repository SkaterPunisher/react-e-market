import React, { useState } from 'react';
import { useAddGoodsMutation, useGetCategoryQuery } from '../../redux/goodsApi';
import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd';
import Spinner from '../../ui/Spinner/Spinner';

const FormAddGoods = () => {
  const [addGoods, isLoading] = useAddGoodsMutation();

  const successAdd = () => {
    message.success('Товар добавлен!', [1]);
  };
  const errorAdd = () => {
    message.error('Заполните все данные!', [1]);
  };

  const { data = [] } = useGetCategoryQuery();
  let allCategories = data.slice(2);

  const [img, setImg] = useState([1, 2, 3]);

  // const addImages = (e) => {
  //   setImg((prev) => prev.push(1))
  //   console.log(img)
  // }

  const handleAddGoods = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let title = e.target.title.value;
    let price = Number(e.target.price.value);
    let description = e.target.description.value;
    let category = e.target.category.value;
    let img1 = e.target.img1.value;
    let img2 = e.target.img2.value;
    let img3 = e.target.img3.value;
    if (
      title === '' ||
      price === 0 ||
      description === '' ||
      category === '' ||
      img1 === '' ||
      img2 === '' ||
      img3 === ''
    ) {
      errorAdd();
    } else {
      successAdd();
      let images = [];
      images.push(img1, img2, img3);
      await addGoods({
        title: title,
        price: price,
        description: description,
        category: category,
        images: images,
      }).unwrap();
      e.target.title.value = '';
      e.target.price.value = '';
      e.target.description.value = '';
      e.target.category.value = '';
      e.target.img1.value = '';
      e.target.img2.value = '';
      e.target.img3.value = '';
    }
  };

  if (!isLoading) return <Spinner />;

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-6 text-[20px]'>Форма для добавления товара</div>
      <form
        onSubmit={handleAddGoods}
        className='flex flex-col max-w-[500px] border-2 p-6'
      >
        <label className='mb-2'>
          НАЗВАНИЕ:
          <input
            type='text'
            name='title'
            className='w-full bg-slate-100 px-6 py-2 rounded-full'
            placeholder='Введите название товара'
          />
        </label>
        <label className='mb-2'>
          СТОИМОСТЬ:
          <input
            type='number'
            name='price'
            className='w-full bg-slate-100 px-6 py-2 rounded-full'
            placeholder='Введите стоимость числом в рублях'
          />
        </label>
        <label className='mb-2'>
          ОПИСАНИЕ:
          <input
            type='text'
            name='description'
            className='w-full bg-slate-100 px-6 py-2 rounded-full'
            placeholder='Описание товара'
          />
        </label>
        <label className='mb-2'>
          КАТЕГОРИЯ:
          <select
            name='category'
            className='px-6 py-4 bg-slate-100 w-full rounded-full'
          >
            {allCategories?.map((item) => {
              return (
                <option key={uuidv4()} value={item.name}>
                  {item.visibleName}
                </option>
              );
            })}
          </select>
        </label>
        <label className='mb-2'>
          ИЗОБРАЖЕНИЯ:
          {img?.map((item) => {
            return (
              <input
                key={uuidv4()}
                type='text'
                name={`img${item}`}
                className='w-full bg-slate-100 px-6 py-2 rounded-full mb-2'
                placeholder='URL изображения'
              />
            );
          })}
          {/* <button
            onClick={addImages}
            className='bg-green-300 px-6 py-2 rounded-full'
          >
            Добавить изображение
          </button> */}
        </label>
        <button className='bg-green-300 px-6 py-2 rounded-full'>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default FormAddGoods;
