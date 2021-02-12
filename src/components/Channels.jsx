import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export default function Channels(props) {
  const { channels } = props;

  return (
    <>
      <div className="d-flex align-items-center">
        <span className="lead">Channels</span>
        <Button variant="outline-primary" size="sm" className="ml-auto">+</Button>
      </div>
      <ListGroup defaultActiveKey="#1">
        {channels.map(({ id, name }) => (
          <ListGroup.Item key={id} action href={`#${id}`}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
