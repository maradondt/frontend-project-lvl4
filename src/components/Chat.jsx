import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Channels from './Channels';
import Messages from './Messages';
import SubmitForm from './SubmitForm';

export default function Chat(props) {
  const { channels } = props;
  return (
    <Row className="h-100">
      <Col xs={3} className="border-right">
        <Channels channels={channels} />
      </Col>
      <Col className="h-100 d-flex flex-column">
        <Messages />
        <div className="mt-auto">
          <SubmitForm />
        </div>
      </Col>
    </Row>
  );
}
