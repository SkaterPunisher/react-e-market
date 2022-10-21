import { addGoods } from '../../redux/features/initialGoods/initialGoodsSlice';
import Spinner from '../../ui/Spinner/Spinner';
import MoreGoodsBtn from '../../ui/Button/MoreGoodsBtn/MoreGoodsBtn';
import OneGood from './OneGood/OneGood';
import { useGetGoodsQuery } from '../../redux/goodsApi';
import { useDispatch, useSelector } from 'react-redux';
import SelectCategory from './SelectCategory/SelectCategory';
import SearchTitle from './SearchTitle/SearchTitle';

const Goods = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.initialGoods.limit);
  const categoryGoods = useSelector((state) => state.initialGoods.category);

  const body = {
    limit: limit,
    category: categoryGoods,
  };

  const { data = [], isLoading } = useGetGoodsQuery(body);

  if (isLoading) return <Spinner />;

  const onClick = () => {
    dispatch(addGoods());
  };

  return (
    <>
      <SearchTitle />
      <SelectCategory />
      <OneGood data={data} />
      <div className='text-center'>
        <MoreGoodsBtn onClick={onClick} />
      </div>
    </>
  );
};

export default Goods;
