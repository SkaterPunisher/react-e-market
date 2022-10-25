import React from 'react';

const AboutUser = ({ data }) => {
  const { email, password, name, role, avatar } = data;

  return (
    <div className='flex items-center'>
      <div>
        <h2 className='text-[16px] dark:text-white'>Email: <span className='text-gray-400'>{email}</span></h2>
        <h2 className='text-[16px] dark:text-white'>Name: <span className='text-gray-400'>{name}</span></h2>
        <h2 className='text-[16px] dark:text-white'>Password: <span className='text-gray-400'>{password}</span></h2>
        <h2 className='text-[16px] dark:text-white'>Role: <span className='text-gray-400'>{role}</span></h2>
        <h2 className='text-[16px] dark:text-white'>Email: <span className='text-gray-400'>{email}</span></h2>
      </div>
      <img src={avatar} alt={name} className='w-[150px] h-[150px] object-cover ml-20 rounded-full' />
    </div>
  );
};

export default AboutUser;
