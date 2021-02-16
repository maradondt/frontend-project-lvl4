import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gon from 'gon';
import * as chatAPI from '../../utils/chatAPI';

export const addChannelThunk = createAsyncThunk(
  'channels/addChannel',
  async (name, { rejectWithValue }) => {
    try {
      const response = await chatAPI.postChannel(name);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const removeChannelThunk = createAsyncThunk(
  'channels/removeChannel',
  async (id, { rejectWithValue }) => {
    try {
      const response = await chatAPI.deleteChannel(id);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const initialState = {
  data: gon.channels,
  currentChannelId: gon.currentChannelId,
  processState: 'idle',
  errors: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    changeChannel: (state, { payload: { id } }) => ({
      ...state,
      currentChannelId: id,
    }),
    addChannel: (state, { payload: { attributes } }) => ({
      ...state,
      data: [...state.data, attributes],
    }),
    removeChannel: (state, { payload: { id } }) => ({
      ...state,
      data: [...state.data.filter((c) => c.id !== id)],
      currentChannelId: 1,
    }),
  },
  extraReducers: {
    [addChannelThunk.fulfilled]: (state) => ({
      ...state,
      // data: [...state.data, attributes],
      processState: 'idle',
    }),
    [addChannelThunk.rejected]: (state, { payload }) => ({
      ...state,
      errors: [...state.errors, payload],
      processState: 'failed',
    }),
    [addChannelThunk.pending]: (state) => ({
      ...state,
      processState: 'pending',
      errors: [],
    }),
    [removeChannelThunk.fulfilled]: (state) => ({
      ...state,
      processState: 'idle',
    }),
    [removeChannelThunk.pending]: (state) => ({
      ...state,
      processState: 'pending',
      errors: [],
    }),
    [removeChannelThunk.rejected]: (state, { payload }) => ({
      ...state,
      errors: [...state.errors, payload],
      processState: 'failed',
    }),
  },
});

export const { changeChannel, addChannel, removeChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
