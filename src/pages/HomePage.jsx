import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGetUsersQuery } from '../redux/goodsApi';
import Spinner from '../ui/Spinner/Spinner';

const HomePage = () => {
  const { data = [], isLoading } = useGetUsersQuery();

  const list = [
    'React',
    'Redux-toolkit',
    'TRK-query',
    'Redux-persist',
    'React-router-dom',
    'JSON Server',
    'AntDesign',
    'Tailwind CSS',
    'JavaScript',
  ];

  if (isLoading) return <Spinner />;

  return (
    <div className='p-6'>
      <h2 className='text-[50px] font-[700] text-center'>Добро пожаловать</h2>
      <p className='text-[18px]'>
        Интернет магазин "E-commerce" - построен полностью на запросах.
        Реализована корзина товаров, сортировка товаров по категориям, поиск по
        названию. Есть личный кабинет для покупателей, где можно посмотреть
        информацию о пользователе и историю заказов & личный кабинет для
        администратора, где можно добавить категорию или новый товар. Так же
        администратор можeт отредактировать уже имеющийся товар в карточке
        товара. Есть возможность зарегестрироваться и выбрать категорию профиля (администратор/покупатель) Реализована подгрузка товаров на страницу. BackEnd сделан с
        помощью JSON Server.
      </p>
      <div>
        <h2>Вы можете войти в профиль под уже готовым профилем или создать собственный</h2>

      </div>
      <ul className='flex flex-wrap justify-center'>
        {list.map((item) => {
          return (
            <li key={uuidv4()} className='px-4 py-2 m-2 bg-black text-white text-[16px] font-bold cursor-default'>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
