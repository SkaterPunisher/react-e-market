import { Modal } from 'antd';
import React, { useState } from 'react';
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import MainBasketItem from '../../../components/BasketItem/MainBasketItem/MainBasketItem';
import {
  useConfirmDiliveryBasketMutation,
  useGetSingleUserQuery,
} from '../../../redux/goodsApi';
import Spinner from '../../Spinner/Spinner';
import { useSelector } from 'react-redux';

const ConfirmDilivery = ({ result }) => {
  const user = useSelector((state) => state.users.lkUser);
  const [removeBasketItem] = useConfirmDiliveryBasketMutation();
  let { data = [], isLoading } = useGetSingleUserQuery(user.id);

  const successAdd = () => {
    message.success('Заказ успешно оформлен!', [1]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    successAdd();
    let date = new Date();
    let userHistory = JSON.parse(JSON.stringify(data.history));
    userHistory[date] = { ...data.basket.item };
    await removeBasketItem({
      idUser: user.id,
      item: [],
      generalSum: 0,
      history: userHistory,
    }).unwrap();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <button
        onClick={showModal}
        className='border-2 px-6 py-1 mb-4 rounded-3xl hover:bg-slate-200 duration-200'
      >
        Оформить заказ
      </button>
      <Modal
        title='Подтвердите информацию о заказе'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={'Назад'}
        okText={'Оформить заказ'}
      >
        {result.basket.item?.map((item) => {
          const { id, title, price, img, col } = item;
          let resultSum = col * price;
          return (
            <div
              className='flex items-center mb-4 justify-between'
              key={uuidv4()}
            >
              <MainBasketItem
                id={id}
                title={title}
                price={price}
                img={img}
                col={col}
              />
              <div>
                <h2>{col} шт</h2>
                <h2>Всего: {resultSum} ₽</h2>
              </div>
            </div>
          );
        })}
        <h2 className='mt-10'>Итого: {result.GeneralsumInBasket}</h2>
      </Modal>
    </>
  );
};

export default ConfirmDilivery;
