import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { add } from '../../../redux/features/addInBasket/addInBasket';
import { useAddGoodsInBasketMutation } from '../../../redux/goodsApi'
import Spinner from '../../Spinner/Spinner';

const AddCardBtn = ({ text, id, goods }) => {
  const dispatch = useDispatch()
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
      await addProductInBasket({
        id: user.id,
        data: result,
      }).unwrap();
    }
  }

  // const handleClick = () => {
  //   if (auth === false && authCustomer === false) {
  //     errorMessageLogin()
  //   } else {
  //     let data = {
  //       'id': id,
  //       'user': user,
  //       "goods": goods 
  //     }
  //     dispatch(add(data))
  //   }
  // }

  if (isLoading) return <Spinner />;

  return (
    <button onClick={handleAddProductInBasket}
     className='border-2 px-6 py-1 rounded-3xl hover:bg-slate-200 duration-200'>{text}</button>
  )
}

export default AddCardBtn