import React from 'react';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import {
  useAddGoodsInBasketMutation,
  useGetUsersQuery,
} from '../../../redux/goodsApi';
import Spinner from '../../Spinner/Spinner';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const AddCardBtn = ({ text, id, goods }) => {
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);
  const user = useSelector((state) => state.users.lkUser);

  const { data = [] } = useGetUsersQuery(user.id);
  let result = data.find((item) => item.id == user.id);
  let btn = result.basket.item.find((item) => item.id == goods.id);

  // console.log(btn);

  const [addProductInBasket, { isLoading }] = useAddGoodsInBasketMutation();

  const errorMessageLogin = () => {
    message.error('Войдите в профиль', [1]);
  };

  const handleAddProductInBasket = async () => {
    if (auth === false && authCustomer === false) {
      errorMessageLogin();
    } else {
      let result = {
        id: goods.id,
        col: 1,
        sum: goods.price,
      };
      let arr = [];
      arr.push(result);
      // console.log(arr)
      await addProductInBasket({
        id: user.id,
        data: arr,
      }).unwrap();
    }
  };

  if (isLoading) return <Spinner />;

  return btn === undefined ? (
    <button
      onClick={handleAddProductInBasket}
      className='border-2 px-6 py-1 rounded-3xl bg-green-200 hover:bg-green-400 duration-200'
    >
      {text}
    </button>
  ) : (
    <>
      <div className='border-2 px-6 py-1 rounded-3xl bg-slate-200 cursor-default'>
        Добавлено
      </div>
      <Link to='/basket'>
        <HiOutlineShoppingCart className='w-[25px] h-[25px] text-gray-800' />
      </Link>
    </>
  );
};

export default AddCardBtn;
