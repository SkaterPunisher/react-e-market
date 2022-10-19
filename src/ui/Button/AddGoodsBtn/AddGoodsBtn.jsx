import { useSelector } from 'react-redux';
import { message } from 'antd';
import {
  useAddGoodsInBasketMutation,
  useGetUsersQuery,
} from '../../../redux/goodsApi';
import Spinner from '../../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const AddGoodsBtn = ({ text, id, goods }) => {
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);
  const user = useSelector((state) => state.users.lkUser);

  const { data = [] } = useGetUsersQuery(user.id);
  let result = data.find((item) => item.id == user.id);

  const [addProductInBasket, { isLoading }] = useAddGoodsInBasketMutation();

  const errorMessageLogin = () => {
    message.error('Войдите в профиль', [1]);
  };
  const successAdd = () => {
    message.success('Товар успешно добавлен в корзину', [1]);
  };
  const alreadyInBasket = () => {
    message.error('Товар уже есть в корзине', [1]);
  };

  const handleAddProductInBasket = async () => {
    if (auth === false && authCustomer === false) {
      errorMessageLogin();
    }
    if (auth != false || authCustomer != false) {
      let userTaget = data.find((item) => item.id == user.id);
      let productNumber = userTaget.basket.item.find(
        (item) => item.id == goods.id
      );
      if (productNumber === undefined) {
        successAdd();
        let result = {
          id: goods.id,
          title: goods.title,
          img: goods.images[0],
          price: goods.price,
          col: 1,
        };
        let previosItems = userTaget.basket.item;
        let arr = [];
        previosItems.forEach((item) => {
          arr.push(item);
        });
        arr.push(result);
        let generalSum = userTaget.GeneralsumInBasket + goods.price;
        await addProductInBasket({
          id: userTaget.id,
          data: arr,
          sum: generalSum,
        }).unwrap();
      } else {
        alreadyInBasket();
      }
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <button
      onClick={handleAddProductInBasket}
      className='border-2 px-6 py-1 rounded-3xl bg-green-100 hover:bg-green-300 duration-200'
    >
      {text}
    </button>
  );

  // finish === undefined ? (
  //   <button
  //     onClick={handleAddProductInBasket}
  //     className='border-2 px-6 py-1 rounded-3xl bg-green-100 hover:bg-green-300 duration-200'
  //   >
  //     {text}
  //   </button>
  // ) : (
  //   <>
  //     <div className='border-2 px-6 py-1 rounded-3xl bg-slate-200 cursor-default'>
  //       Добавлено
  //     </div>
  //     <Link to='/basket'>
  //       <HiOutlineShoppingCart className='w-[25px] h-[25px] text-gray-800' />
  //     </Link>
  //   </>
  // );
};

export default AddGoodsBtn;
