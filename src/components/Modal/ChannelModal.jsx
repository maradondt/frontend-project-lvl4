import React from 'react';
import { connect } from 'react-redux';
// import { Modal, Button } from 'react-bootstrap';
import { actionsModal } from './modalSlice';
import AddModal from './AddModal';
import RemoveModal from './RemoveModal';
import RenameModal from './RenameModal';
import { addChannelThunk, removeChannelThunk, renameChannelThunk } from '../Channels/channelsSlice';

const mapStateToProps = ({ modal }) => ({
  modal,
});

const actionCreators = {
  closeModal: actionsModal.closeModal,
  addChannel: addChannelThunk,
  removeChannel: removeChannelThunk,
  renameChannel: renameChannelThunk,
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
    removeChannel,
    renameChannel,
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
        action={removeChannel}
        handleClose={handleClose}
        isOpened={isOpened}
        extra={e}
      />
    ),
    renameChannel: (e) => (
      <RenameModal
        action={renameChannel}
        handleClose={handleClose}
        isOpened={isOpened}
        extra={e}
      />
    ),
    null: () => (<></>),
  };

  return <>{dispatchModal[type](extra)}</>;
};

export default connect(mapStateToProps, actionCreators)(ChannelModal);
