import React from 'react';
import { connect } from 'react-redux';
// import { Modal, Button } from 'react-bootstrap';
import { actionsModal } from './modalSlice';
import AddModal from './AddModal';
import { addChannelAction } from '../Channels/channelsSlice';

const mapStateToProps = ({ modal }) => ({
  modal,
});

const actionCreators = {
  closeModal: actionsModal.closeModal,
  addChannel: addChannelAction,
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
    null: () => (<></>),
  };

  return <>{dispatchModal[type](extra)}</>;
};

export default connect(mapStateToProps, actionCreators)(ChannelModal);
