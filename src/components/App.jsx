import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { io } from 'socket.io-client';
import { addMessage } from './Messages/MessagesSlice';
import { addChannel, removeChannel } from './Channels/channelsSlice';
import Chat from './Chat';

const actions = {
  addMessageAction: addMessage,
  addChannelAction: addChannel,
  removeChannelAction: removeChannel,
};

const App = (props) => {
  const { addMessageAction, addChannelAction, removeChannelAction } = props;
  useEffect(() => {
    const socket = io('/');
    socket.on('newMessage', (data) => {
      addMessageAction(data.data);
    });
    socket.on('newChannel', (data) => {
      addChannelAction(data.data);
    });
    socket.on('removeChannel', (data) => {
      removeChannelAction(data.data);
    });
  });

  return <Chat />;
};

export default connect(null, actions)(App);
