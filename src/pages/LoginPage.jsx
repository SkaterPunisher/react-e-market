import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
  logInAdmin,
  logInCustomer,
} from '../redux/features/initialUsers/initialUsersSlice';
import { message } from 'antd';
import Spinner from '../ui/Spinner/Spinner';
import { useGetUsersQuery } from '../redux/goodsApi';
import FormLogin from '../components/FormLogin/FormLogin';

const LoginPage = () => {
  const { data = [], isLoading } = useGetUsersQuery();
  const navigate = useNavigate();
  const location = useLocation(); 
  const dispatch = useDispatch();

  const users = data;

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.userName.value;
    const password = form.userPassword.value;

    const successMessageAdmin = () => {
      message.success('Вы пошли как администратор', [1]);
    };
    const successMessageCustomer = () => {
      message.success('Вы пошли как пользователь', [1]);
    };
    const errorMessage = () => {
      message.error('Введите коректный логин и пароль или зарегестрирустесь', [1]);
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FormLogin onSubmit={handleSubmit} />
  );
};

export default LoginPage;
