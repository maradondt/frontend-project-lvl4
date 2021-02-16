import { combineReducers } from '@reduxjs/toolkit';
import messages from '../components/Messages/MessagesSlice';
import channels from '../components/Channels/channelsSlice';
import modal from '../components/Modal/modalSlice';

export default combineReducers({ messages, channels, modal });
