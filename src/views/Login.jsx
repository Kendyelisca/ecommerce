import React from 'react';
import LoginForm from '../components/common/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div>
      <p>Welcome! Enter your email and password</p>
      <div className="bg-blue-300 w-3/6">
        <h2>Test Data</h2>
        <p>kendyelisca@gmail.com</p>
        <p>kendy1234</p>
      </div>
      <LoginForm />
      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;
