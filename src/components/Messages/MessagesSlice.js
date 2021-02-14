import { createSlice } from '@reduxjs/toolkit';
import gon from 'gon';

const initialState = gon.messages;

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, { payload: { message } }) {
      return [...state, message];
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
