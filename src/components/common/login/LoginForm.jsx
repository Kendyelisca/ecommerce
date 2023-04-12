import React, { useState } from 'react';
import { loginService } from '../../../services/loginService';
import { useDispatch } from 'react-redux';
import { logIn, updateToken, updateUserData } from '../../../store/slice/user.slice';

const LoginForm = () => {
  const [toggleType, setToggleType] = useState('password');
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleClickType = () => {
    if (toggleType === 'password') setToggleType('text');
    else if (toggleType === 'text') setToggleType('password');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const login = async () => {
    const dataLogin = await loginService(loginFormData);
    console.log(dataLogin);
    const userData = {
      id: dataLogin.data.user.id,
      firstName: dataLogin.data.user.firstName,
      lastName: dataLogin.data.user.lastName,
      email: dataLogin.data.user.email,
    };
    const token = loginFormData.data;
    dispatch(updateUserData(userData));
    dispatch(updateToken(token));
    dispatch(logIn());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailId">Email</label>
          <input
            type="email"
            id="emailId"
            name="email"
            value={loginFormData.email}
            placeholder="example@niemail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password: </label>
          <input
            type={toggleType}
            id="passwordId"
            name="password"
            value={loginFormData.password}
            required
          />
          <button type="button" onClick={handleClickType}>
            see password
          </button>
        </div>
        <button className="border border-blue-600 p-2 rounded-md bg-blue-400 hover:bg-slate-900">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
