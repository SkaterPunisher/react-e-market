
import StackList from '../components/HomePage/StackList/StackList';
import ListUsers from '../components/HomePage/ListUsers/ListUsers';
import Description from '../components/HomePage/Description/Description';

const HomePage = () => {

  return (
    <div className='p-6 dark:bg-gray-900'>
      <h2 className='text-[35px] font-[500] lg:text-[50px] lg:font-[700] text-center dark:text-white'>Добро пожаловать</h2>
      <Description />
      <ListUsers />
      <StackList />
    </div>
  );
};

export default HomePage;
