/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/user.reduce';

function Login() {
  const navigate = useNavigate();
  const [form, setForme] = useState({
    login: '', password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data) {
        dispatch(addUser({ id: data.id, name: data.name, loaded: true }));
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) => {
    setForme({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input type="text" className="form-control" required name="login" aria-describedby="emailHelp" placeholder="Логин" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" required name="password" placeholder="Пароль" onChange={handleInput} />
      </div>
      <button type="submit" className="btn btn-primary">Вход</button>
    </form>
  );
}

export default Login;
