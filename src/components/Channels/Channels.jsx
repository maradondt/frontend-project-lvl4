import React from 'react';
import {
  Button,
  ButtonGroup,
  Dropdown,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionsChannels from './channelsSlice';
import { actionsModal } from '../Modal/modalSlice';

const mapStateToProps = ({ channels }) => ({ channels });

const actionCreators = {
  changeChannel: actionsChannels.changeChannel,
  openModal: actionsModal.openModal,
};

const Channels = (props) => {
  // eslint-disable-next-line no-shadow
  const { channels: { data, currentChannelId }, changeChannel, openModal } = props;
  const handleChangeChannel = (id) => () => {
    changeChannel({ id });
  };
  const handleAddChannel = () => {
    openModal({ type: 'addChannel', extra: null });
  };

  const handleRemoveChannel = (id) => () => {
    openModal({ type: 'removeChannel', extra: id });
  };
  const getButtonVariant = (id) => (id === currentChannelId ? 'primary' : 'light');
  return (
    <>
      <div className="d-flex align-items-center">
        <span className="lead">Channels</span>
        <Button onClick={handleAddChannel} variant="outline-primary" size="sm" className="ml-auto">+</Button>
      </div>
      <div className="mt-3 w-100 d-flex flex-column">
        {data.map(({ id, name, removable }) => (removable
          ? (
            <Dropdown className="d-flex mb-2" key={id} as={ButtonGroup}>
              <Button
                className="flex-grow-1"
                onClick={handleChangeChannel(id)}
                variant={getButtonVariant(id)}
              >
                {name}
              </Button>
              <Dropdown.Toggle className="flex-grow-0" split variant={getButtonVariant(id)} />
              <Dropdown.Menu>
                <Dropdown.Item>Rename</Dropdown.Item>
                <Dropdown.Item onClick={handleRemoveChannel(id)}>Remove</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )
          : (
            <Button
              key={id}
              variant={getButtonVariant(id)}
              onClick={handleChangeChannel(id)}
              className="mb-2"
            >
              {name}
            </Button>
          )
        ))}
      </div>
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(Channels);
