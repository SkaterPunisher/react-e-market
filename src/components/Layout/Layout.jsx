import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logOut } from '../../features/initialUsers/initialUsersSlice';
import CustomLink from '../CustomLink/CustomLink';

// const setActive = ({ isActive }) => (isActive ? 'text-red-500 mr-10' : 'mr-10');

const Layout = () => {
  // const setActive = ({ isActive }) => ({ color: isActive ? 'blue' : 'black' });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header className='flex justify-between'>
        <div></div>
        <div>
          <CustomLink to='/' className='mr-10'>
            HomePage
          </CustomLink>
          <CustomLink to='/goods' className='mr-10'>
            GoodsPage
          </CustomLink>
          {auth ? (
            <CustomLink to='/admin' className='mr-10'>
              AdminPage
            </CustomLink>
          ) : (
            ''
          )}

          <CustomLink to='/basket' className='mr-10'>
            BasketPage
          </CustomLink>
          <CustomLink to='/lk'>LkPage</CustomLink>
        </div>
        <div>
          {auth || authCustomer ? (
            <button onClick={handleClick}>Выйти</button>
          ) : (
            ''
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
