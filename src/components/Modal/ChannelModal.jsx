import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { actionsModal } from './modalSlice';

const mapStateToProps = ({ modal }) => ({
  modal,
});

const actionCreators = {
  toggleModal: actionsModal.toggleModal,
};

const ChannelModal = (props) => {
  const { modal: { isOpened }, toggleModal } = props;
  const handleClose = () => {
    toggleModal();
  };

  return (
    <Modal show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(mapStateToProps, actionCreators)(ChannelModal);
