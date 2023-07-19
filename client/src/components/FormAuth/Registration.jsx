import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', login: '', password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:3001/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <input type="text" className="form-control" required name="name" aria-describedby="emailHelp" placeholder="Логин" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" required name="login" aria-describedby="emailHelp" placeholder="Имя" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" required name="password" placeholder="Пароль" onChange={handleInput} />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
