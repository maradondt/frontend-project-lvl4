import { createSlice } from '@reduxjs/toolkit';
import { addChannelThunk, removeChannelThunk } from '../Channels/channelsSlice';

const initialState = {
  isOpened: false,
  type: null,
  extra: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload: { type, extra } }) => ({
      ...state,
      type,
      extra,
      isOpened: true,
    }),
    closeModal: (state) => ({
      ...state,
      isOpened: false,
    }),
  },
  extraReducers: {
    [addChannelThunk.fulfilled]: (state) => ({
      ...state,
      isOpened: false,
      type: null,
      extra: null,
    }),
    [removeChannelThunk.fulfilled]: (state) => ({
      ...state,
      isOpened: false,
      type: null,
      extra: null,
    }),
  },
});

export default modalSlice.reducer;

export const actionsModal = modalSlice.actions;
