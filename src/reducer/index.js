import { combineReducers } from '@reduxjs/toolkit';
import messages from '../components/Messages/MessagesSlice';
import channels from '../components/Channels/channelsSlice';

export default combineReducers({ messages, channels });
