import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gon from 'gon';
import * as chatAPI from '../../utils/chatAPI';
import { removeChannel } from '../Channels/channelsSlice';

const initialState = {
  data: gon.messages,
  processState: 'idle',
  errors: [],
};

export const postMessage = createAsyncThunk(
  'messages/post',
  async ({ message, currentChannelId }, { rejectWithValue }) => {
    try {
      const response = await chatAPI.postMessage(message, currentChannelId);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
export const getMessages = createAsyncThunk(
  'messages/post',
  async (currentChannelId, { rejectWithValue }) => {
    try {
      const response = await chatAPI.getMessages(currentChannelId);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, { payload: { attributes } }) => ({
      data: [...state.data, attributes],
      processState: 'idle',
      errors: [],
    }),
  },
  extraReducers: {
    [postMessage.fulfilled]: (state) => ({
      ...state,
      processState: 'idle',
      errors: [],
    }),
    [postMessage.rejected]: (state, { payload }) => ({
      ...state,
      processState: 'rejected',
      errors: [...state.errors, payload],
    }),
    [postMessage.pending]: (state) => ({
      ...state,
      processState: 'pending',
    }),
    [removeChannel]: (state, { payload: { id } }) => ({
      ...state,
      data: [...state.data.filter((m) => m.channelId !== id)],
    }),
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
