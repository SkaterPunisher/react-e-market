import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// const setActive = ({ isActive }) => (isActive ? 'text-red-500 mr-10' : 'mr-10');
const setActive = ({isActive}) => ({color: isActive ? 'blue' : 'black'})

const Layout = () => {
  return (
    <>
      <header>
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
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
