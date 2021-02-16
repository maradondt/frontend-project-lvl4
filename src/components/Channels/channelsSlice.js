import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gon from 'gon';
import * as chatAPI from '../../utils/chatAPI';

export const addChannelAction = createAsyncThunk(
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
  },
  extraReducers: {
    [addChannelAction.fulfilled]: (state) => ({
      ...state,
      // data: [...state.data, attributes],
      processState: 'idle',
    }),
    [addChannelAction.rejected]: (state, { payload }) => ({
      ...state,
      errors: [...state.errors, payload],
      processState: 'failed',
    }),
  },
});

export const { changeChannel, addChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
