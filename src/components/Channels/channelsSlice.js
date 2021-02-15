import { createSlice } from '@reduxjs/toolkit';
import gon from 'gon';
// import * as chatAPI from '../../utils/chatAPI';

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
  },
  extraReducers: {

  },
});

export const { changeChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
