import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { add } from '../../../features/addInBasket/addInBasket';

const AddCardBtn = ({ text, id, goods }) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);
  const user = useSelector((state) => state.users.lkUser)
  
  const errorMessageLogin = () => {
    message.error('Войдите в профиль', [1]);
  };

  const handleClick = () => {
    if (auth === false && authCustomer === false) {
      errorMessageLogin()
    } else {
      let data = {
        'id': id,
        'user': user,
        "goods": goods
      }
      dispatch(add(data))
    }
  }

  return (
    <button onClick={handleClick}
     className='border-2 px-6 py-1 rounded-3xl hover:bg-slate-200 duration-200'>{text}</button>
  )
}

export default AddCardBtn