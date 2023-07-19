/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPoints, removePoints } from '../../redux/currentScore.slice';

export default function ModalWindow({
  showModal, setShowModal, playQuestion, setPlayQuestion,
}) {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  // eslint-disable-next-line prefer-const
  const currentScore = useSelector((state) => state?.currentScore.value);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  const tryAnswer = (event) => {
    event.preventDefault();

    if (inputValue.toLowerCase() === playQuestion.answer.toLowerCase()) {
      dispatch(addPoints(playQuestion.score));
    } else {
      dispatch(removePoints(playQuestion.score));
    }

    setInputValue('');
    setShowModal(false);
    setPlayQuestion(null);
  };
  return (
    <div id={playQuestion?.id}>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>
          <Modal.Title className="text-center">{playQuestion?.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form className="d-flex justify-content-center flex-column">
            <Form.Group className=" mb-3" controlId="formBasicPassword">
              <Form.Control value={inputValue} onChange={handleInput} name="answer" type="text" placeholder="ОТВЕТИТЬ" />
            </Form.Group>
            <Button variant="primary" className="btnApplay" type="button" onClick={(event) => { tryAnswer(event); }}>
              ОТПРАВИТЬ
            </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </div>
  );
}
