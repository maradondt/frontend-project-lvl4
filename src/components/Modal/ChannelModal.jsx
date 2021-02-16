import React from 'react';
import { connect } from 'react-redux';
// import { Modal, Button } from 'react-bootstrap';
import { actionsModal } from './modalSlice';
import AddModal from './AddModal';
import RemoveModal from './RemoveModal';
import { addChannelThunk, removeChannelThunk } from '../Channels/channelsSlice';

const mapStateToProps = ({ modal }) => ({
  modal,
});

const actionCreators = {
  closeModal: actionsModal.closeModal,
  addChannel: addChannelThunk,
  removeModal: removeChannelThunk,
};

const ChannelModal = (props) => {
  const {
    modal: {
      isOpened,
      type,
      extra,
    },
    closeModal,
    addChannel,
    removeModal,
  } = props;

  const handleClose = () => {
    closeModal();
  };
  const dispatchModal = {
    addChannel: (e) => (
      <AddModal
        action={addChannel}
        handleClose={handleClose}
        isOpened={isOpened}
        extra={e}
      />
    ),
    removeChannel: (e) => (
      <RemoveModal
        action={removeModal}
        handleClose={handleClose}
        isOpened={isOpened}
        extra={e}
      />
    ),
    // renameChannel: (e) => (
    //   <AddModal
    //     action={addChannel}
    //     handleClose={handleClose}
    //     isOpened={isOpened}
    //     extra={e}
    //   />
    // ),
    null: () => (<></>),
  };

  return <>{dispatchModal[type](extra)}</>;
};

export default connect(mapStateToProps, actionCreators)(ChannelModal);
