import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import FormAddCategories from '../components/FormAddCategories/FormAddCategories';
import FormAddGoods from '../components/FormAddGoods/FormAddGoods';
import { Link } from 'react-router-dom';


const AdminPage = () => {
  const location = useLocation();


  return (
    <div>
      <h2 className='text-[50px] font-[700] text-center'>Администрирование</h2>

      <div className='flex flex-col'>
        <ul className='px-6 py-2 h-full flex justify-start'>
          <li
            className={`${
              location.pathname === '/admin/addGoods'
                ? 'bg-gray-900 text-white text-[20px] px-4 py-2 rounded-lg mx-2 w-fit'
                : 'bg-gray-600 text-gray-300 text-[20px] hover:bg-gray-900 hover:text-white px-4 py-2 rounded-lg mx-2 w-fit'
            }`}
          >
            <Link to='addGoods' className='text-inherit'>
              Добавить товар
            </Link>
          </li>
          <li
            className={`${
              location.pathname === '/admin/addCategories'
                ? 'bg-gray-900 text-white text-[20px] px-4 py-2 rounded-lg mx-2 w-fit'
                : 'bg-gray-600 text-gray-300 text-[20px] hover:bg-gray-900 hover:text-white px-4 py-2 rounded-lg mx-2 w-fit'
            }`}
          >
            <Link to='addCategories' className='text-inherit'>
              Добавить категорию товаров
            </Link>
          </li>
        </ul>
        <div className='min-h-[250px] p-6'>
          <Routes>
            <Route path='addGoods' element={<FormAddGoods />} />
            <Route path='addCategories' element={<FormAddCategories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
