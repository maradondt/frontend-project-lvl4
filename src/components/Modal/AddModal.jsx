import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddModal(props) {
  const [inputValue, setInputValue] = useState('');
  const {
    isOpened,
    handleClose,
    action,
    // extra
  } = props;

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    action(inputValue);
    setInputValue('');
    // handleClose();
  };

  return (
    <Modal show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Chanel</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Control type="text" onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
