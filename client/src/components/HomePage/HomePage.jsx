/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../../redux/questionsSlice';
import ModalWindow from '../Modal/Modal';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [playQuestion, setPlayQuestion] = useState(null);

  const quests = useSelector((state) => state.questions);
  const getUser = useSelector((state) => state.user);
  const currentScore = useSelector((state) => state.currentScore);

  const handleQuestion = (e, question) => {
    e.preventDefault();

    e.target.style.visibility = 'hidden';

    setPlayQuestion(question);
    setShowModal(true);
  };

  const handleEnding = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:3001/api/statistics', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score: currentScore.value, userId: getUser.id }),
    });

    navigate('/statistics');
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/table', { credentials: 'include' })
      .then((data) => (data.json()))
      .then((data) => dispatch(getQuestions(data)));
  }, []);

  return getUser.name ? (
    <>
      <div className="statisticTitle">
        Текущий счет:
        {' '}
        {currentScore.value}
      </div>
      <div className="bigDiv">
        {quests?.value?.map((category) => (
          <div key={category.id} className="questions">
            <div className="categoryName">{category.name}</div>
            {category?.Questions
              .map((question) => (
                <p className="oneQuestion" key={question.id} onClick={(e) => { handleQuestion(e, question); }}>
                  {question?.score}
                </p>
              ))}

          </div>
        ))}
        <ModalWindow
          showModal={showModal}
          setShowModal={setShowModal}
          playQuestion={playQuestion}
          setPlayQuestion={setPlayQuestion}
        />
      </div>
      <button className="btn btnCloset btn-primary endGame" type="button" onClick={(e) => { handleEnding(e); }}>Конец игры!</button>
    </>
  ) : (<div className="statisticTitle">Авторизуйтесь</div>);
}
export default HomePage;
