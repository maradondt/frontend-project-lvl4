import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gon from 'gon';
import * as chatAPI from '../../utils/chatAPI';

const initialState = {
  data: gon.messages,
  processState: 'idle',
  errors: [],
};

export const postMessage = createAsyncThunk(
  'messages/post',
  async ({ message, channelId }, { rejectWithValue }) => {
    try {
      const response = await chatAPI.postMessage(message, channelId);
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
      // data: [...state.data, attributes],
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
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
