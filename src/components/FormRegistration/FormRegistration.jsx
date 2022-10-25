import React from 'react';
import InputText from '../../ui/Input/InputText';
import AddButton from '../../ui/Button/AddButton/AddButton';
import { Link } from 'react-router-dom';

const FormRegistration = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex justify-center flex-col items-center my-10'>
      <h1 className='text-[20px]'>Регистрация</h1>
      <form
        onSubmit={onSubmit}
        className=' px-8 py-6 flex flex-col border-2 max-w-[500px]'
      >
        <InputText
          labelName={'Почта'}
          name={'email'}
          placeholder={'Введите Email'}
        />
        <InputText
          labelName={'Пароль'}
          name={'userPassword'}
          placeholder={'Придумайте пароль'}
        />
        <InputText
          labelName={'Логин'}
          name={'login'}
          placeholder={'Придумайте логин'}
        />
        <InputText
          labelName={'Аватар'}
          name={'avatar'}
          placeholder={'Загрузите URL аватара'}
        />
        <label>Тип пользователя
          <select
            name='role'
            className='w-full bg-slate-100 px-6 py-3 rounded-full mb-2'
          >
            <option value='customer'>Покупатель</option>
            <option value='admin'>Администратор</option>
          </select>
        </label>
        <AddButton type={'submit'} text={'Зарегестрироваться'} />
      </form>
      <p className='mt-4'>Если Вы уже зарегестрированны - <Link to='/login'>войдите</Link></p>
    </div>
  );
};

export default FormRegistration;
