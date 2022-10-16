import React from 'react';
import { useNavigate, useParams } from 'react-router';

const EditGoodPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(`/goods/${id}`);

  return (
    <>
      <button onClick={goBack} className='border-4 px-6 py-2 text-black'>
        Вернуться назад
      </button>
      <div>EditGoodPage {id}</div>
    </>
  );
};

export default EditGoodPage;
