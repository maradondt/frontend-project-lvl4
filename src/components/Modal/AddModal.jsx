import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddModal(props) {
  const inputElem = useRef();
  const [inputValue, setInputValue] = useState('');
  const {
    isOpened,
    handleClose,
    action,
    // extra
  } = props;

  const processStateSelector = useSelector(
    (state) => state.channels.processState,
  );
  const errorsSelector = useSelector(
    (state) => state.channels.errors,
  );

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    action(inputValue);
    setInputValue('');
    // handleClose();
  };

  const renderErrors = (errors) => errors.map((e) => <>{e}</>);
  useEffect(() => {
    if (inputElem.current) {
      inputElem.current.focus();
    }
  });

  return (
    <Modal show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Chanel</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Control readOnly={processStateSelector === 'pending'} ref={inputElem} type="text" onChange={handleChange} />
          <div className="d-block invalid-feedback">
            {renderErrors(errorsSelector)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={processStateSelector === 'pending'} type="submit" variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
