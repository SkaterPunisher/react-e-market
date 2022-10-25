
import { useGetUsersQuery } from '../redux/goodsApi';
import Spinner from '../ui/Spinner/Spinner';
import StackList from '../components/HomePage/StackList/StackList';

const HomePage = () => {
  const { data = [], isLoading } = useGetUsersQuery();

  if (isLoading) return <Spinner />;

  return (
    <div className='p-6'>
      <h2 className='text-[35px] font-[500] lg:text-[50px] lg:font-[700] text-center'>Добро пожаловать</h2>
      <p className='text-[18px]'>
        Интернет магазин "E-commerce" - построен полностью на запросах.
        Реализована корзина товаров, сортировка товаров по категориям, поиск по
        названию. Есть личный кабинет для покупателей, где можно посмотреть
        информацию о пользователе и историю заказов & личный кабинет для
        администратора, где можно добавить категорию или новый товар. Так же
        администратор можeт отредактировать уже имеющийся товар в карточке
        товара. Есть возможность зарегестрироваться и выбрать категорию профиля
        (администратор/покупатель) Реализована подгрузка товаров на страницу.
        BackEnd сделан с помощью JSON Server.
      </p>
      <div>
        <h2>
          Вы можете войти в профиль под уже готовым профилем или создать
          собственный
        </h2>
      </div>
      <StackList />
    </div>
  );
};

export default HomePage;
