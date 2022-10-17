import React from 'react'
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { useAddGoodsInBasketMutation } from '../../../redux/goodsApi'
import Spinner from '../../Spinner/Spinner';

const AddCardBtn = ({ text, id, goods }) => {
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);
  const user = useSelector((state) => state.users.lkUser)
  
  const [addProductInBasket, {isLoading}] = useAddGoodsInBasketMutation();

  const errorMessageLogin = () => {
    message.error('Войдите в профиль', [1]);
  };

  const handleAddProductInBasket = async () => {
    if (auth === false && authCustomer === false) {
      errorMessageLogin()
    } else {
        let result ={
          id: goods.id,
          col: 1,
          sum: goods.price
        } 
        let arr = []
        arr.push(result)
        // console.log(arr)
      await addProductInBasket({
        id: user.id,
        data: arr,
      }).unwrap();
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <button onClick={handleAddProductInBasket}
     className='border-2 px-6 py-1 rounded-3xl hover:bg-slate-200 duration-200'>{text}</button>
  )
}

export default AddCardBtn