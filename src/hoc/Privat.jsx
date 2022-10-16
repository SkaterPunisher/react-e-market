import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const Privat = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.users.auth);

  if (!auth) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default Privat;
