import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
  getUser,
  logInAdmin,
  logInCustomer,
} from '../features/initialUsers/initialUsersSlice';
import { message } from 'antd';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.userName.value;
    const password = form.userPassword.value;

    const successMessageAdmin = () => {
      message.success('Вы пошли как администратор');
    };
    const successMessageCustomer = () => {
      message.success('Вы пошли как пользователь');
    };
    const errorMessage = () => {
      message.error('Введите коректный логин и пароль или зарегестрирустесь');
    };

    let user = users.find(
      (item) => item.password === password && item.name === login
    );
    if (user != undefined) {
      if (user.role === 'customer') {
        successMessageCustomer()
        dispatch(logInCustomer(user));
        navigate(fromPage);
      }
      if (user.role === 'admin') {
        successMessageAdmin()
        dispatch(logInAdmin(user));
        navigate(fromPage);
      }
    } else {
      errorMessage()
    }
  };

  return (
    <div className='flex justify-center flex-col items-center'>
      <h1>Регистация и вход</h1>
      <form
        onSubmit={handleSubmit}
        className=' px-6 py-4 flex flex-col bg-slate-100 max-w-[500px]'
      >
        <label>
          Login: <input name='userName' />
        </label>
        <label>
          Password: <input name='userPassword' />
        </label>
        <button type='submit'>Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
