import React from 'react';
import { message } from 'antd';
import { useAddCategoriesMutation } from '../../redux/goodsApi';
import Spinner from '../../ui/Spinner/Spinner';

const FormAddCategories = () => {
  const successAdd = () => {
    message.success('Категория добавлена!', [1]);
  };
  const errorAdd = () => {
    message.error('Заполните все данные!', [1]);
  };

  const [addCategories, isLoading] = useAddCategoriesMutation();

  const handleAddCategories = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let name = e.target.name.value;
    let visibleName = e.target.visibleName.value;
    let image = e.target.image.value;
    if (name === '' || visibleName === '' || image === '') {
      errorAdd();
    } else {
      successAdd();
      await addCategories({
        name: name,
        visibleName: visibleName,
        image: image,
      }).unwrap();
      e.target.name.value = '';
      e.target.visibleName.value = '';
      e.target.image.value = '';
    }
  };

  if (!isLoading) return <Spinner />;

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-6 text-[20px]'>Форма для добавление категории</div>
      <form
        onSubmit={handleAddCategories}
        className='flex flex-col max-w-[500px] border-2 p-6'
      >
        <label className='mb-2'>
          Название на английском с маленькой буквы:
          <input
            type='text'
            name='name'
            className='w-full bg-slate-100 px-6 py-2 rounded-full'
            placeholder='furniture'
          />
        </label>
        <label className='mb-2'>
          Название на русском:
          <input
            type='text'
            name='visibleName'
            className='w-full bg-slate-100 px-6 py-2 rounded-full'
            placeholder='Мебель'
          />
        </label>
        <label className='mb-2'>
          Изображение для категории:
          <input
            type='text'
            name='image'
            className='w-full bg-slate-100 px-6 py-2 rounded-full'
            placeholder='URL на изображение'
          />
        </label>
        <button className='bg-green-300 px-6 py-2 rounded-full'>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default FormAddCategories;
