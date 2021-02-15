import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { io } from 'socket.io-client';
import { addMessage } from './Messages/MessagesSlice';
import Chat from './Chat';

const actions = {
  addMessageAction: addMessage,
};

const App = (props) => {
  const { addMessageAction } = props;
  // const channelId = 1;
  useEffect(() => {
    const socket = io('/');
    socket.on('newMessage', (data) => {
      addMessageAction(data.data);
    });
  });

  return <Chat />;
};

export default connect(null, actions)(App);
