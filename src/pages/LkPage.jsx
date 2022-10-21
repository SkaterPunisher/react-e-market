import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../ui/Spinner/Spinner';
import { useGetSingleUserQuery } from '../redux/goodsApi';
import { Routes, Route, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import AboutUser from '../components/AboutUser/AboutUser';
import HistoryUser from '../components/HistoryUser/HistoryUser';

const LkPage = () => {
  const user = useSelector((state) => state.users.lkUser);
  const { data = [], isLoading } = useGetSingleUserQuery(user.id);
  const location = useLocation();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className='text-[40px] text-center'>
        Добро пожаловать {data.name} !
      </div>
      <div className='flex flex-col'>
        <ul className='px-6 py-2 bg-gray-800 h-full flex flex-col justify-start'>
          <li
            className={`mb-6 ${
              location.pathname == '/lk/history'
                ? 'bg-gray-900 text-white text-[20px] px-4 py-2 rounded-lg mx-2'
                : 'text-gray-300 text-[20px] hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg mx-2'
            }`}
          >
            <Link to='history'>История заказов</Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname == '/lk/about'
                  ? 'bg-gray-900 text-white text-[20px] px-4 py-2 rounded-lg mx-2'
                  : 'text-gray-300 text-[20px] hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg mx-2'
              }`}
              to='about'
            >
              Информация о пользователе
            </Link>
          </li>
        </ul>
        <div className=''>
          <Routes>
            <Route path='history' element={<HistoryUser data={data} />} />
            <Route path='about' element={<AboutUser data={data} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default LkPage;
