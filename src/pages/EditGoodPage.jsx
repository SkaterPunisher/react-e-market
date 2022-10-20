import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Carousel } from 'antd';

const EditGoodPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(`/goods/${id}`);

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <button onClick={goBack} className='border-4 px-6 py-2 text-black'>
        Вернуться назад
      </button>
      <Carousel effect='fade'>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default EditGoodPage;
