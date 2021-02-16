import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { io } from 'socket.io-client';
import { addMessage } from './Messages/MessagesSlice';
import { addChannel } from './Channels/channelsSlice';
import Chat from './Chat';

const actions = {
  addMessageAction: addMessage,
  addChannelAction: addChannel,
};

const App = (props) => {
  const { addMessageAction, addChannelAction } = props;
  useEffect(() => {
    const socket = io('/');
    socket.on('newMessage', (data) => {
      addMessageAction(data.data);
    });
    socket.on('newChannel', (data) => {
      addChannelAction(data.data);
    });
  });

  return <Chat />;
};

export default connect(null, actions)(App);
