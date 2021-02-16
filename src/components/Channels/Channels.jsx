import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionsChannels from './channelsSlice';
import { actionsModal } from '../Modal/modalSlice';

const mapStateToProps = ({ channels }) => ({ channels });

const actionCreators = {
  changeChannel: actionsChannels.changeChannel,
  toggleModal: actionsModal.toggleModal,
};

const Channels = (props) => {
  // eslint-disable-next-line no-shadow
  const { channels: { data, currentChannelId }, changeChannel, toggleModal } = props;
  const handleChangeChannel = (id) => () => {
    changeChannel({ id });
  };
  const handleAddChannel = () => {
    toggleModal();
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <span className="lead">Channels</span>
        <Button onClick={handleAddChannel} variant="outline-primary" size="sm" className="ml-auto">+</Button>
      </div>
      <ListGroup defaultActiveKey={`#${currentChannelId}`}>
        {data.map(({ id, name }) => (
          <ListGroup.Item key={id} onClick={handleChangeChannel(id)} href={`#${id}`}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(Channels);
