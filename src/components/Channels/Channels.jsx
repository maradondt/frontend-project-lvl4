import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionsChannels from './channelsSlice';

const mapStateToProps = ({ channels }) => ({ channels });

const actionCreators = {
  changeChannel: actionsChannels.changeChannel,
};

const Channels = (props) => {
  // eslint-disable-next-line no-shadow
  const { channels: { data, currentChannelId }, changeChannel } = props;
  const handleChangeChannel = (id) => () => {
    changeChannel({ id });
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <span className="lead">Channels</span>
        <Button variant="outline-primary" size="sm" className="ml-auto">+</Button>
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
