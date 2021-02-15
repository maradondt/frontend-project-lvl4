import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gon from 'gon';
import * as chatAPI from '../../utils/chatAPI';

const initialState = gon.messages;

export const postMessage = createAsyncThunk(
  'messages/post',
  async (message) => {
    const response = await chatAPI.postMessage(message, 1);
    return response;
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, { payload: { message } }) {
      return [...state, message];
    },
  },
  extraReducers: {
    [postMessage.fulfilled]: (state, { payload: { attributes } }) => [...state, attributes],
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
