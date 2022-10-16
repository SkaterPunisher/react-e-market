import LogUser from './LogUser/LogUser';
import NavLinks from './NavLinks/NavLinks';

const Header = () => {
  return (
    <header className='bg-gray-800'>
      <div className='h-[80px] flex justify-between items-center max-w-[1280px] mx-auto px-10'>
        <div className='text-white text-[20px] cursor-default'>E-commerce</div>
        <NavLinks />
        <LogUser />
      </div>
    </header>
  );
};

export default Header;