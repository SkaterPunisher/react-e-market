import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export { Layout };
