/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/user.reduce';

function Navbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const getUser = useSelector((state) => state?.user);

  const user = getUser;

  const handleLogout = async (event) => {
    event.preventDefault();
    const responce = await fetch('http://localhost:3001/signout', { credentials: 'include' });
    if (responce.status === 200) {
      dispatch(removeUser());
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Домой</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user.name ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/statistics">Статистика</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" type="submit" onClick={handleLogout}>Выход</button>
                </li>
              </>
            )
              : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Регистрация</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Авторизация</Link>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
