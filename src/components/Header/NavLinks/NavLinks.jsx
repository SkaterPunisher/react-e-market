import React from 'react';
import { useSelector } from 'react-redux';
import CustomLink from '../../CustomLink/CustomLink';

const NavLinks = () => {
  const auth = useSelector((state) => state.users.auth);

  return (
    <div className=''>
      <CustomLink to='/' >
        Главная
      </CustomLink>
      <CustomLink to='/goods'>
        Товары
      </CustomLink>
      {auth ? (
        <CustomLink to='/admin'>
          Админка
        </CustomLink>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavLinks;
