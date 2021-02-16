import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';

export default function RemoveModal(props) {
  const {
    isOpened,
    handleClose,
    action,
    extra,
  } = props;
  const processStateSelector = useSelector(
    (state) => state.channels.processState,
  );
  const errorsSelector = useSelector(
    (state) => state.channels.errors,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    action(extra);
  };
  const renderErrors = (errors) => errors.map((e) => <>{e}</>);

  return (
    <Modal show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Chanel</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          Are you Shure?
          <div className="d-block invalid-feedback">
            {renderErrors(errorsSelector)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={processStateSelector === 'pending'} type="submit" variant="danger">
            Remove
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
