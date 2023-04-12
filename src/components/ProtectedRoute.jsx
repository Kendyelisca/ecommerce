import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isUserLogged = useSelector((state) => state.user.isLogged);
  if (isUserLogged) return <>{children}</>;
  else return <Navigate to="/Login" replace state={{ location }} />;
};

export default ProtectedRoute;
