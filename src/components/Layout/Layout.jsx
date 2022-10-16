import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from '../../features/initialUsers/initialUsersSlice';

// const setActive = ({ isActive }) => (isActive ? 'text-red-500 mr-10' : 'mr-10');

const Layout = () => {
  const setActive = ({ isActive }) => ({ color: isActive ? 'blue' : 'black' });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.auth);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header className='flex justify-between'>
        <div></div>
        <div>
          <NavLink to='/' className='mr-10' style={setActive}>
            HomePage
          </NavLink>
          <NavLink to='/goods' className='mr-10' style={setActive}>
            GoodsPage
          </NavLink>
          <NavLink to='/admin' className='mr-10' style={setActive}>
            AdminPage
          </NavLink>
          <NavLink to='/basket' className='mr-10' style={setActive}>
            BasketPage
          </NavLink>
          <NavLink to='/lk' style={setActive}>
            LkPage
          </NavLink>
        </div>
        <div>{auth ? <button onClick={handleClick}>Выйти</button> : ''}</div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
