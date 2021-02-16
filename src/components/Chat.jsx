import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Channels from './Channels/Channels';
import Messages from './Messages/Messages';
import SubmitForm from './Messages/SubmitForm';
import ChannelModal from './Modal/ChannelModal';

export default function Chat() {
  return (
    <Row className="h-100">
      <Col xs={3} className="border-right">
        <Channels />
      </Col>
      <Col className="h-100 d-flex flex-column">
        <Messages id="messages" />
        <div className="mt-auto">
          <SubmitForm />
        </div>
      </Col>
      <ChannelModal />
    </Row>
  );
}
