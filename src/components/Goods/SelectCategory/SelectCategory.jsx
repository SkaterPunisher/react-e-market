import React from 'react';
import { useGetCategoryQuery } from '../../../redux/goodsApi';
import Spinner from '../../../ui/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../../redux/features/initialGoods/initialGoodsSlice';

const SelectCategory = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetCategoryQuery();

  const handleChange = (e) => {
    dispatch(changeCategory(e.target.value));
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <select
        name='category'
        onChange={handleChange}
        className='ml-10 mt-2 px-6 py-4 bg-slate-100 rounded-full'
      >
        {data?.map((item) => {
          return (
            <option key={uuidv4()} value={item.name}>
              {item.visibleName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCategory;
