import React from 'react'
import { useSelector } from 'react-redux';
import Spinner from '../ui/Spinner/Spinner';
import { useGetSingleUserQuery } from '../redux/goodsApi';

const LkPage = () => {
  const user = useSelector((state) => state.users.lkUser);
  const { data = [], isLoading } = useGetSingleUserQuery(user.id);

  if (isLoading) return <Spinner />;

  return (
    <div>
    Личный кабинет: {data.name}
    </div>
  )
}

export default LkPage