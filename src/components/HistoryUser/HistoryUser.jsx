import React from 'react';

const HistoryUser = ({ data }) => {
  const { history } = data;
  let arr = [];
  for (let key in data.history) {
    arr.push({
      [key]: data.history[key],
    });
  }
  console.log(history);

  return (
    <div className='min-h-[250px] p-6'>
      <div>Колличество товаров в корзине: {data.basket.item.length}</div>

    </div>
  );
};

export default HistoryUser;
