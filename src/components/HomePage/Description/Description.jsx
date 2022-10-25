import React from 'react';

const Description = () => {
  return (
    <p className='text-[18px] dark:text-white'>
      Интернет магазин "E-commerce" - построен полностью на запросах.
      <br />- Реализована корзина товаров, сортировка товаров по категориям,
      поиск по названию.
      <br />- Есть личный кабинет для покупателей, где можно посмотреть
      информацию о пользователе и историю заказов & личный кабинет для
      администратора, где можно добавить категорию или новый товар.
      <br />- Так же администратор можeт отредактировать уже имеющийся товар в
      карточке товара.
      <br />- Есть возможность зарегестрироваться и выбрать категорию профиля
      (администратор/покупатель).
      <br />- Реализована подгрузка товаров на страницу.
      <br />- Доступна смена темы темная/светлая.
      <br />- Есть возможность поменять русский язык на английский.
      <br />- Полностью адаптировано под мобильные устройства.
      <br />- BackEnd сделан с помощью JSON Server.
    </p>
  );
};

export default Description;