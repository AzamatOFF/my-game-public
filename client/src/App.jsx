import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Registration from './components/FormAuth/Registration';
import Navbar from './components/Navbar/Navbar';
import Login from './components/FormAuth/Login';
import HomePage from './components/HomePage/HomePage';
import { addUser } from './redux/user.reduce';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const [user, setUser] = useState(undefined);
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  async function checkUser() {
    try {
      setLoad(true);
      const responce = await fetch('http://localhost:3001/', {
        credentials: 'include',
      });
      const data = await responce.json();

      if (data) {
        dispatch(addUser({ id: data.id, name: data.name, loaded: true }));
      }

      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="App">
      {load ? ('loading') : (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
